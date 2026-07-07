import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

interface HeroSignProps {
  h1?: React.ReactNode;
  h2?: React.ReactNode;
  h3?: React.ReactNode;
  button1?: { href: string };
  button2?: { href: string };
  image?: { src: string; alt: string; width: number; height: number };
  image1?: { src: string; alt: string; width: number; height: number };
  image2?: { src: string; alt: string; width: number; height: number };

  p?: React.ReactNode;
}

export default function HeroSign({
  h1,
  h2,
  h3,
  p,
  button1,
  button2,
  image,
  image1,
  image2,
}: HeroSignProps) {
  return (
    <section className="relative rounded-xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-5 before:bg-linear-to-r before:from-green/90 before:to-transparent">
      <div className="absolute inset-0 px-10 z-10 flex items-center justify-between">
        <div className="text-white flex flex-col gap-4 w-full text-center">
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

          <div className="flex justify-center gap-4">
            {image1 &&
              (button1 ? (
                <Link href={button1.href}>
                  <Image
                    src={image1.src}
                    alt={image1.alt}
                    width={image1.width}
                    height={image1.height}
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                    priority
                    className="w-30 sm:w-45 lg:w-60 h-auto"
                  />
                </Link>
              ) : (
                <Image
                  src={image1.src}
                  alt={image1.alt}
                  width={image1.width}
                  height={image1.height}
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                  priority
                  className="w-30 sm:w-45 lg:w-60 h-auto"
                />
              ))}
            {image2 &&
              (button2 ? (
                <Link href={button2.href}>
                  <Image
                    src={image2.src}
                    alt={image2.alt}
                    width={image2.width}
                    height={image2.height}
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                    priority
                    className="w-30 sm:w-45 lg:w-60 h-auto"
                  />
                </Link>
              ) : (
                <Image
                  src={image2.src}
                  alt={image2.alt}
                  width={image2.width}
                  height={image2.height}
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                  priority
                  className="w-30 sm:w-45 lg:w-60 h-auto"
                />
              ))}
          </div>
        </div>
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
