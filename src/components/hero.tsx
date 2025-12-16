import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from './ui/badge';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-collage');

const menuHighlights = [
  { name: "Softy Ice Cream", href: "/menu#desserts" },
  { name: "Mojitos", href: "/menu#drinks" },
  { name: "Sandwiches", href: "/menu#sandwiches-and-more" },
  { name: "Waffles", href: "/menu#desserts" },
  { name: "Appetizers", href: "/menu#appetizers" },
];


export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60" />
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Shabistan – The Meeting Point
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Ice creams, shakes, mojitos & munchies – the perfect spot to chill with your gang.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="secondary" size="lg" className="bg-green-700 hover:bg-green-800 text-secondary-foreground">
                <a href="https://www.swiggy.com/city/hyderabad/shabistan-mehdipatnam-rest1049474" target="_blank" rel="noopener noreferrer">Order on Swiggy</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {menuHighlights.map(item => (
            <Link key={item.name} href={item.href}>
                <Badge variant="outline" className="border-primary/50 bg-background/70 text-sm hover:bg-accent cursor-pointer">
                    {item.name}
                </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
