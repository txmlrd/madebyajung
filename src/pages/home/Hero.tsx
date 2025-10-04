"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Ajoungnarl Mobile App (Coming Soon)",
    link: "https://www.ajoungnarl.web.id/",
    thumbnail: "https://tomvisual.vercel.app/images/project/ajoungnarl-mobile.png",
  },
  {
    title: "Ajoungnarl Website (2025)",
    link: "https://www.ajoungnarl.web.id/",
    thumbnail: "https://tomvisual.vercel.app/images/project/ajoungnarl.jpg",
  },
  {
    title: "Vonks Design (2024)",
    link: "https://www.vonksdesign.com/",
    thumbnail: "https://tomvisual.vercel.app/images/project/vonksdesign.png",
  },
  {
    title: "Starter Academy (2023)",
    link: "https://fe-starter-git-landing-new-txmlrds-projects.vercel.app/",
    thumbnail: "https://tomvisual.vercel.app/images/project/starter.png",
  },
];
