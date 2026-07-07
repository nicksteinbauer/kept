import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ScrollVideo } from "./ScrollVideo";

interface HeroProps {
  h1?: React.ReactNode;
  h2?: React.ReactNode;
  h3?: React.ReactNode;
  button1?: { label: string; href: string };
  button2?: { label: string; href: string };
  image?: { src: string; alt: string; width: number; height: number };
  video?: { src: string; className?: string };
  p?: React.ReactNode;
}

export default function Hero({ h1, h2, h3, p, button1, button2, image, video }: HeroProps) {
  return (
    <section className="relative rounded-xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-5 before:bg-linear-to-r before:from-green/90 before:to-transparent">
      <div className="absolute inset-0 pl-6 pr-10 md:pr-20 z-10 flex items-center justify-between">
        <div className="text-white flex flex-col gap-4 max-w-3xl flex-1">
          {h1 && (
            <FadeIn className="-translate-x-7" vars={{ duration: 1 }}>
              <h1>{h1}</h1>
            </FadeIn>
          )}
          {h2 && (
            <FadeIn className="-translate-x-7" vars={{ duration: 1, delay: 0.3 }}>
              <h2 className="-mt-2">{h2}</h2>
            </FadeIn>
          )}
          {h3 && (
            <FadeIn className="-translate-x-7" vars={{ duration: 1, delay: 0.6 }}>
              <h3>{h3}</h3>
            </FadeIn>
          )}
          {p && (
            <FadeIn className="-translate-x-7" vars={{ duration: 1, delay: 0.9 }}>
              <p>{p}</p>
            </FadeIn>
          )}
          {(button1 || button2) && (
            <FadeIn className="-translate-x-7" vars={{ duration: 1, delay: 1.2 }}>
              <div className="flex gap-4">
                {button1 && (
                  <Link
                    className="bg-green text-light-tan px-4 md:px-6 py-1 rounded-[30px] border-2 border-tan transition-all duration-300 hover:bg-sage"
                    href={button1.href}
                  >
                    {button1.label}
                  </Link>
                )}
                {button2 && (
                  <Link
                    className="bg-green text-white px-4 md:px-6 py-1 rounded-[30px] border-2 border-tan transition-all duration-300 hover:bg-sage"
                    href={button2.href}
                  >
                    {button2.label}
                  </Link>
                )}
              </div>
            </FadeIn>
          )}
        </div>
        {video && (
          <FadeIn
            className="translate-x-7 flex items-center justify-center"
            vars={{ duration: 1, delay: 0.6 }}
          >
            <ScrollVideo src={video.src} className={video.className} />
          </FadeIn>
        )}
      </div>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="100vw"
          priority
          className="w-full object-cover min-h-[calc(100vh-132.24px)] lg:h-[calc(100vh-139.62px)]"
        />
      )}
    </section>
  );
}
