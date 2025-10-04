"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

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
    <div className="h-screen w-full flex items-center justify-center">
      <ThreeDMarquee images={images} />
    </div>
  );
}
