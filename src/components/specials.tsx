import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const specialImage = PlaceHolderImages.find(p => p.id === 'dahi-papdi-special');

export default function Specials() {
  return (
    <section id="specials" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <Card className="overflow-hidden bg-pink-100/30 shadow-lg md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-8 text-center md:p-12 md:items-start md:text-left">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Special</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Dahi Papdi
            </h2>
            <p className="mt-4 max-w-xl text-lg text-foreground/80">
              Crispy, tangy and creamy – a flavour explosion that has become a favourite at Shabistan. You have to try it to believe it!
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Badge variant="destructive" className="px-4 py-2 text-lg font-bold">Full: ₹60/-</Badge>
              <Badge variant="destructive" className="px-4 py-2 text-lg font-bold">Half: ₹40/-</Badge>
            </div>
            <p className="mt-4 font-semibold text-primary">
              Available Tuesday to Friday
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/menu#dahi-papdi">View on Menu</Link>
            </Button>
          </div>
          <div className="relative h-64 w-full md:h-full">
            {specialImage && (
              <Image
                src={specialImage.imageUrl}
                alt={specialImage.description}
                fill
                className="object-cover"
                data-ai-hint={specialImage.imageHint}
              />
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
