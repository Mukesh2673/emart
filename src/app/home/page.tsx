'use client'
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryList from "@/components/CategoryList";
import BrandOffers from "@/components/BrandOffer";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
import DailyEssentials from "@/components/DailyEssentials";

// ⛔ was: ssr: true
// ✅ now: ssr: false
const HeroBanner = dynamic(() => import("@/components/HeroBanner"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <ProductCarousel />
      <CategoryList />
      <BrandOffers />
      <DailyEssentials />
      <Footer />
    </main>
  );
}
