"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { SparklesTitle } from "./SparkleTitle";

export default function HeroShowcase() {
  const images = [
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
    "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
    "https://tomvisual.vercel.app/images/project/vonksdesign.png",
    "https://tomvisual.vercel.app/images/project/starter.png",
  ];
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background marquee */}
      <ThreeDMarquee className="absolute inset-0 z-0" images={images} />

      {/* Overlay hitam */}
      <div className="absolute inset-0 bg-slate-950/40 z-0"></div>

      {/* Konten tulisan */}
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10 flex flex-col items-center justify-center h-screen text-center">
        <SparklesTitle />
      </div>
    </div>
  );
}
