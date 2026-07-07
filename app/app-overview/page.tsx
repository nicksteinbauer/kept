import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "App Overview",
  description:
    "See how the KEPT app organizes your home's maintenance, calendar, and service history in one secure platform — from initial setup to ongoing care.",
};
import { ScrollVideo } from "@/components/ScrollVideo";
import Hero from "@/components/Hero";

import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero
        h1={<>App Overview</>}
        h2={
          <>
            <em className="text-tan">Your Home</em> Organized in One Place
          </>
        }
        p={
          <>
            The Kept app serves as your home’s operational dashboard. Everything related to your
            property is stored, tracked, and managed within one secure platform.
          </>
        }
        image={{
          src: "https://images.ctfassets.net/qwksnpofolz1/4lG9dlHCQOwZlVVAVIw0AP/8d63b448807fa54e37de443a77715716/KeptHeroImage.jpg",
          alt: "A beautiful white traditional house with a sidewalk, in lush greenery",
          width: 1536,
          height: 1024,
        }}
        video={{
          src: "/KeptV2.mp4",
          className:
            "hidden sm:block w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]",
        }}
      />

      <section className="p-10 xl:p-20 text-green">
        <div className="flex flex-col md:flex-row-reverse md:justify-end">
          <div className="flex items-center md:pl-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div className="flex items-center gap-3">
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  1
                </div>
                <h2>
                  <div>Set up the Kept App</div>
                </h2>
              </div>
              <ul className="kept-list">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            </FadeIn>
          </div>
          <div className="flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo
                src="/KeptV2.mp4"
                className="w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center md:pr-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div className="flex items-center gap-3">
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  2
                </div>
                <h2>
                  <div>Schedule your Initial Review</div>
                </h2>
              </div>
              <ul className="kept-list">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            </FadeIn>
          </div>
          <div className="flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo
                src="/KeptV2.mp4"
                className="w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="p-10 xl:p-20 text-green">
        <div className="flex flex-col md:flex-row-reverse md:justify-end">
          <div className="flex items-center md:pl-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div className="flex items-center gap-3">
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  3
                </div>
                <h2>
                  <div>Your Calendar</div>
                </h2>
              </div>
              <ul className="kept-list">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            </FadeIn>
          </div>
          <div className="flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo
                src="/KeptV2.mp4"
                className="w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center md:pr-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div className="flex items-center gap-3">
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  4
                </div>
                <h2>
                  <div>Schedule a Service or Repair</div>
                </h2>
              </div>
              <ul className="kept-list">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            </FadeIn>
          </div>
          <div className="flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo
                src="/KeptV2.mp4"
                className="w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="p-10 xl:p-20 text-green">
        <div className="flex flex-col md:flex-row-reverse md:justify-end">
          <div className="flex items-center md:pl-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div className="flex items-center gap-3">
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  5
                </div>
                <h2>
                  <div>Add Recurring Maintenance</div>
                </h2>
              </div>
              <ul className="kept-list">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
              </ul>
            </FadeIn>
          </div>
          <div className="flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo
                src="/KeptV2.mp4"
                className="w-[200px] rounded-[2rem] overflow-hidden xl:w-[300px] xl:rounded-[3rem]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
