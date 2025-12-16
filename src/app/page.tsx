import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Specials from '@/components/specials';
import Gallery from '@/components/gallery';
import VisitUs from '@/components/visit-us';
import Footer from '@/components/footer';
import CartSheet from '@/components/cart-sheet';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Specials />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
}
