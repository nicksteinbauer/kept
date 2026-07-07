"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { x: 50 },
        {
          x: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div ref={trackRef} className="flex items-center gap-2 justify-center">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="300px"
            className="rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}
