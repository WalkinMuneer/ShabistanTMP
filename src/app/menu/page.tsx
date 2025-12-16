"use client";

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CartSheet from '@/components/cart-sheet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { menuData, type MenuCategory, type MenuItem, type MenuSubCategory } from "@/app/lib/menu-data";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from '@/context/cart-context';

const tagColors = {
  'New': 'bg-blue-500 text-white',
  'Popular': 'bg-primary text-primary-foreground',
  'Best Seller': 'bg-amber-500 text-white',
  'Special': 'bg-purple-600 text-white',
};

export type CartItem = MenuItem & { quantity: number };

const MenuSubCategoryItem = ({ item, onAddToCart, id }: { item: MenuItem, onAddToCart: (item: MenuItem) => void, id?: string }) => (
  <div id={id} className="flex flex-col rounded-lg p-3 transition-colors hover:bg-background scroll-mt-24">
    <div className="flex items-start justify-between">
      <div className="flex-1 pr-2">
        <h4 className="font-semibold text-foreground">{item.name}</h4>
        <p className="text-sm text-foreground/70">{item.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold text-primary">
          ₹{item.price}/-
        </div>
        <Button size="icon" variant="ghost" onClick={() => onAddToCart(item)} aria-label={`Add ${item.name} to cart`}>
          <PlusCircle className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </div>
    {item.tag && (
      <div className="mt-2">
        <Badge className={`${tagColors[item.tag]} text-xs`}>{item.tag}</Badge>
      </div>
    )}
  </div>
);


const MenuSubCategorySection = ({ subcategory, onAddToCart }: { subcategory: MenuSubCategory, onAddToCart: (item: MenuItem) => void }) => (
  <div className="mb-8">
    <div className="mb-4 inline-block rounded-md bg-secondary px-4 py-2 text-secondary-foreground shadow-sm" style={{ backgroundColor: 'hsl(var(--secondary))'}}>
      <h3 className="text-lg font-bold uppercase tracking-wider" style={{ color: 'hsl(76, 86%, 72%)' }}>{subcategory.name}</h3>
    </div>
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
      {subcategory.items.map((item) => (
        <MenuSubCategoryItem key={item.name} id={item.name.toLowerCase().includes('dahi papdi') ? 'dahi-papdi' : undefined} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

const MenuCategorySection = ({ category, onAddToCart }: { category: MenuCategory, onAddToCart: (item: MenuItem) => void }) => (
  <Card id={category.category.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')} className="mb-12 shadow-lg scroll-mt-20">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-center text-primary">{category.category}</CardTitle>
    </CardHeader>
    <CardContent>
      {category.subcategories.map((subcategory) => (
        <MenuSubCategorySection key={subcategory.name} subcategory={subcategory} onAddToCart={onAddToCart} />
      ))}
    </CardContent>
  </Card>
);

export default function MenuPage() {
  const { cartItems, addItem, setIsCartOpen } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const handleProceedToCart = () => {
    if (cartItems.length === 0) {
      toast({
        variant: "destructive",
        title: "Your cart is empty",
        description: "Please add items to your cart before proceeding.",
      });
      return;
    }
    setIsCartOpen(true);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section id="menu" className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Menu</h2>
              <p className="mt-2 text-lg text-foreground/80">
                From softy cones to mojitos and fries – explore everything Shabistan serves.
              </p>
            </div>

            {menuData.map((category) => (
              <MenuCategorySection key={category.category} category={category} onAddToCart={handleAddToCart} />
            ))}

            <div className="mt-12 flex justify-center gap-4">
              <Button size="lg" onClick={handleProceedToCart}>
                 <ShoppingCart className="mr-2 h-5 w-5" /> View Cart {totalItems > 0 && `(${totalItems})`}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
       {cartItems.length > 0 && (
        <div className="sticky bottom-0 w-full bg-primary text-primary-foreground p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <p className="font-bold">{totalItems} item(s) in your cart</p>
            <Button variant="secondary" onClick={handleProceedToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" /> View Cart
            </Button>
          </div>
        </div>
      )}
      <CartSheet />
    </div>
  );
}