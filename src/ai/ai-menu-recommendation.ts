'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized menu recommendations.
 *
 * - getMenuRecommendation - A function that takes user preferences and dietary restrictions as input and returns personalized menu recommendations.
 * - MenuRecommendationInput - The input type for the getMenuRecommendation function.
 * - MenuRecommendationOutput - The return type for the getMenuRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MenuRecommendationInputSchema = z.object({
  preferences: z
    .string()
    .describe('User preferences regarding food, flavors, and cuisine.'),
  dietaryRestrictions: z
    .string()
    .describe(
      'Dietary restrictions such as allergies, intolerances, or dietary choices (e.g., vegetarian, vegan, gluten-free).'
    ),
});
export type MenuRecommendationInput = z.infer<typeof MenuRecommendationInputSchema>;

const MenuRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized menu item recommendations.'),
});
export type MenuRecommendationOutput = z.infer<typeof MenuRecommendationOutputSchema>;

export async function getMenuRecommendation(input: MenuRecommendationInput): Promise<MenuRecommendationOutput> {
  return menuRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'menuRecommendationPrompt',
  input: {schema: MenuRecommendationInputSchema},
  output: {schema: MenuRecommendationOutputSchema},
  prompt: `You are a helpful AI assistant that provides menu recommendations based on user preferences and dietary restrictions for Shabistan - The Meeting Point.

User Preferences: {{{preferences}}}
Dietary Restrictions: {{{dietaryRestrictions}}}

Based on the provided preferences and restrictions, suggest a list of menu items from Shabistan that the user might enjoy. The menu includes items such as Softy Ice Cream, Mojitos, Sandwiches, Waffles, and Appetizers.

Recommendations:`, // Removed Handlebars from the prompt
});

const menuRecommendationFlow = ai.defineFlow(
  {
    name: 'menuRecommendationFlow',
    inputSchema: MenuRecommendationInputSchema,
    outputSchema: MenuRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
