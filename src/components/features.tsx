import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { IceCream, GlassWater, Sandwich, Users } from "lucide-react";

const features = [
  {
    icon: <IceCream className="h-10 w-10 text-primary" />,
    title: "Softy Ice Cream & Waffles",
    description: "Indulge in our creamy softy cones and crispy, warm waffles, made fresh to order.",
    color: "bg-pink-100/50",
  },
  {
    icon: <GlassWater className="h-10 w-10 text-green-700" />,
    title: "Shakes, Mojitos & Thirst Busters",
    description: "Quench your thirst with our thick shakes, refreshing mojitos, and classic cold coffees.",
     color: "bg-green-100/50",
  },
  {
    icon: <Sandwich className="h-10 w-10 text-yellow-600" />,
    title: "Sandwiches, Fries & Appetizers",
    description: "Perfect for a quick bite! Enjoy our grilled sandwiches, loaded fries, and tasty appetizers.",
    color: "bg-yellow-100/50",
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Perfect Meeting Point",
    description: "The ideal spot for friends and family to hang out, celebrate, and enjoy good food.",
    color: "bg-blue-100/50",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className={`transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${feature.color}`}>
              <CardHeader className="items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base text-foreground/80">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
