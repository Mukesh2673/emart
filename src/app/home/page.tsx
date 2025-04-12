'use client'
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryList from "@/components/CategoryList";
import BrandOffers from "@/components/BrandOffer";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
import DailyEssentials from "@/components/DailyEssentials";

// HeroBanner dynamically imported with ssr: false
const HeroBanner = dynamic(() => import("@/components/HeroBanner"), {
  ssr: false,
});

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  // Ensures the component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <Header />
      {/* Only render HeroBanner on the client side */}
      {isClient && <HeroBanner />}
      <ProductCarousel />
      <CategoryList />
      <BrandOffers />
      <DailyEssentials />
      <Footer />
    </main>
  );
}
