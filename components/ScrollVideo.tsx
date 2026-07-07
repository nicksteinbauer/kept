"use client";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollVideoProps = {
  src: string;
  className?: string;
  videoClassName?: string;
  start?: string;
  end?: string;
};

export const ScrollVideo = ({
  src,
  className,
  videoClassName,
  start = "top 80%",
  end = "bottom 20%",
}: ScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start,
          end,
          onEnter: () => {
            videoRef.current?.play();
            setIsPlaying(true);
          },
          onLeave: () => {
            videoRef.current?.pause();
            setIsPlaying(false);
          },
          onEnterBack: () => {
            videoRef.current?.play();
            setIsPlaying(true);
          },
          onLeaveBack: () => {
            videoRef.current?.pause();
            setIsPlaying(false);
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        videoRef.current?.play();
        setIsPlaying(true);
      });
    },
    { scope: containerRef }
  );

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div ref={containerRef} className={clsx("relative group", className)}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={clsx("p-[0.5em] xl:p-[.7em]", videoClassName)}
      />
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-10 right-10 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/phone-overlay.png"
        alt="iphone overlay"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
