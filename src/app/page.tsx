import Hero from "@/pages/home/Hero";
import Image from "next/image";
import { MainNavbar } from "@/components/internal/Navbar";
import MainComments from "@/pages/home/Comments";
import Tagline from "@/pages/home/Tagline";
import TimelineSection from "@/pages/home/TimelineSection";
import ProductsTab from "@/pages/home/ProductsTab";
import Footer from "@/pages/home/Footer";
import HeroShowcase from "@/pages/home/HeroShowcase";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <nav className="fixed top-0 left-0 w-full z-50 pt-5">
        <MainNavbar />
      </nav>
      <main className="">
        {/* <Hero /> */}
        <HeroShowcase />
        {/* <ProductsTab /> */}
        <TimelineSection />
        {/* <MainComments /> */}

        <Tagline />
        <Footer />
      </main>
    </div>
  );
}
