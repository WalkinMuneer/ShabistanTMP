"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/cart-context';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/#specials', label: 'Specials' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#visit-us', label: 'Visit Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-card/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/#home" className="flex items-center">
          <Logo width={576} height={144} className="h-24 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Go to Cart {totalItems > 0 && `(${totalItems})`}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          {isClient && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card">
                <div className="flex h-full flex-col">
                  <div className="p-4">
                    <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo width={576} height={144} className="h-24 w-auto" />
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col gap-2 p-4">
                      <Button size="lg" onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true);}}>
                          <ShoppingCart className="mr-2 h-4 w-4" /> Go to Cart {totalItems > 0 && `(${totalItems})`}
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
