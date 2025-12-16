"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const galleryItems = [
  { imageId: 'gallery-cone', label: 'Softy Time', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { imageId: 'gallery-waffle', label: 'Waffle Cravings', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { imageId: 'gallery-mojito', label: 'Mojito Mood', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { imageId: 'gallery-sandwich', label: 'Evening Snacks', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { imageId: 'gallery-fries', label: 'Crispy Fries', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { imageId: 'gallery-people', label: 'Good Times', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
];

type GalleryItem = (typeof galleryItems)[0];
type PlaceholderImageType = (typeof PlaceHolderImages)[0];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PlaceholderImageType | null>(null);

  const openLightbox = (item: PlaceholderImageType) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Gallery</h2>
          <p className="mt-2 text-lg text-foreground/80">A glimpse of the good times and great food at Shabistan.</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3">
          {galleryItems.map((item: GalleryItem) => {
            const image = PlaceHolderImages.find(p => p.id === item.imageId);
            if (!image) return null;
            return (
              <Card
                key={image.id}
                className={cn(
                  'group relative h-full min-h-[250px] w-full cursor-pointer overflow-hidden rounded-lg shadow-lg',
                  item.colSpan,
                  item.rowSpan
                )}
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.description}
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg"
              data-ai-hint={selectedImage.imageHint}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
