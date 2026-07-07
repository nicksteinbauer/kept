import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Home Maintenance Services",
  description:
    "KEPT coordinates essential, seasonal, enhancement, and preservation services for your home — year-round, backed by vetted and trusted professionals.",
};
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

import Service1 from "@/components/Service1";
import Service2Alt from "@/components/Service2Alt";
import How from "@/components/How";
import Service3 from "@/components/Service3";
import Service4Alt from "@/components/Service4Alt";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="min-h-[50vh] flex items-center justify-center p-6 pt-10 text-green">
        <div className="flex flex-col gap-3">
          <FadeIn className="-translate-x-7 flex flex-col gap-3 max-w-7xl" vars={{ duration: 1 }}>
            <h1 className="text-center small">
              At KEPT we pride ourselves in offering
              <em className="text-brown">Year-Round, Extensive Services</em> for residential
              properties
            </h1>

            <p className="text-[20px] text-center">
              Membership includes preventative care, service coordination, and forward planning.
            </p>
          </FadeIn>

          <FadeIn className="-translate-x-7 text-center" vars={{ duration: 1, delay: 0.3 }}>
            <Link
              className="bg-brown text-light-tan px-4 md:px-6 py-1 rounded-[30px] border-2 border-green transition-all duration-300 hover:bg-green inline-block"
              href="/sign-up"
            >
              Get Started Now
            </Link>
          </FadeIn>
        </div>
      </div>
      <ImageCarousel
        images={[
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/yE3a55KLYOPq0U55lNW91/427a3f20665c2bf1c2066bc17a5ea5db/getty-images-N0EX-hLZWhw-unsplash.jpg",
            alt: "",
            width: 300,
            height: 200,
          },
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/6eLOPxIVUAoy7aDkmppw9b/c7fb6de2c50aaab5240d35b03e3ae953/2023Kitchen1.jpg",
            alt: "",
            width: 300,
            height: 328,
          },
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/6oNSXUpimx5z8usboChqqe/e57fe42acf52094d33d038e6ad78023e/getty-images-j1I0XaSfR8c-unsplash.jpg",
            alt: "",
            width: 300,
            height: 200,
          },
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/7qOjaKYgopYcjWvML49orN/4e42af23177cc5fe74d6b79cd44b620e/WoodlandDesignMain22RGB.jpg",
            alt: "",
            width: 300,
            height: 225,
          },
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/7jzqnl6pCHu2GV3nQjRIjh/e5059ec0e1169fd1dfb4b5da4da78e76/2023Bathroom1.jpg",
            alt: "",
            width: 300,
            height: 400,
          },
        ]}
      />
      <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 flex md:pr-10 py-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3 flex-1" vars={{ duration: 1 }}>
              <div>
                <h2 className="light">Essential Services</h2>

                <div className="flex flex-col gap-2">
                  <div className="h-25 xl:h-35">
                    <Service1 />
                  </div>
                </div>

                <h4 className="mt-4">The everyday stuff that always needs handling</h4>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex items-center text-green">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3 flex-1 bg-tan p-10 rounded-2xl"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <ul className="kept-list">
                  <li className="border-b border-green mt-3">Light bulb and fixture replacement</li>
                  <li className="border-b border-green mt-3">
                    Plumbing repairs and fixture upgrades
                  </li>
                  <li className="border-b border-green mt-3">Hardware replacement</li>
                  <li className="border-b border-green mt-3">TV mounting and installation</li>
                  <li className="border-b border-green mt-3">
                    Outlet and small electrical additions
                  </li>
                  <li className="border-b border-green mt-3">Interior paint and touch-ups</li>
                  <li className="border-b border-green mt-3">Leak detection and repair</li>
                  <li className="border-b border-green mt-3">HVAC service and filter change</li>
                  <li className="border-b border-green mt-3">General handyman needs</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="rounded-2xl p-10 xl:p-20 border border-brown">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 flex md:pr-10 py-10 text-green">
            <FadeIn className="-translate-x-7 flex flex-col gap-3 flex-1" vars={{ duration: 1 }}>
              <div>
                <h2 className="light">Seasonal Services</h2>

                <div className="flex flex-col gap-2">
                  <div className="h-25 xl:h-35">
                    <Service2Alt />
                  </div>
                </div>

                <h4 className="mt-4">Timed to the calendar so nothing gets missed</h4>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex items-center text-white">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3 flex-1 bg-green p-10 rounded-2xl"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <ul className="kept-list">
                  <li className="border-b border-tan mt-3">Outdoor furniture setup and cleaning</li>
                  <li className="border-b border-tan mt-3">Seasonal planter rotations</li>
                  <li className="border-b border-tan mt-3">Gutter cleaning</li>
                  <li className="border-b border-tan mt-3">Snow removal</li>
                  <li className="border-b border-tan mt-3">
                    Sprinkler activation and winterization
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 flex md:pr-10 py-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3 flex-1" vars={{ duration: 1 }}>
              <div>
                <h2 className="light">Enhancement Services</h2>

                <div className="flex flex-col gap-2">
                  <div className="h-25 xl:h-35">
                    <Service3 />
                  </div>
                </div>

                <h4 className="mt-4">From thoughtful upgrades to full renovations</h4>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex items-center text-green">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3 flex-1 bg-tan p-10 rounded-2xl"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <ul className="kept-list">
                  <li className="border-b border-green mt-3">
                    Historical millwork and trim restoration
                  </li>
                  <li className="border-b border-green mt-3">Wallcovering installation</li>
                  <li className="border-b border-green mt-3">Hardscape and landscape designs</li>
                  <li className="border-b border-green mt-3">Garage and utility upgrades</li>
                  <li className="border-b border-green mt-3">
                    Smart home and entertainment integration
                  </li>
                  <li className="border-b border-green mt-3">
                    Electrical vehicle charging installation
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="rounded-2xl p-10 xl:p-20 border border-brown">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 flex md:pr-10 py-10 text-green">
            <FadeIn className="-translate-x-7 flex flex-col gap-3 flex-1" vars={{ duration: 1 }}>
              <div>
                <h2 className="light">Prservation Services</h2>

                <div className="flex flex-col gap-2">
                  <div className="h-25 xl:h-35">
                    <Service4Alt />
                  </div>
                </div>

                <h4 className="mt-4">For homes with history worth protecting</h4>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex items-center text-white">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3 flex-1 bg-green p-10 rounded-2xl"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <ul className="kept-list">
                  <li className="border-b border-tan mt-3">
                    Historic window restoration and re-glazing
                  </li>
                  <li className="border-b border-tan mt-3">Plaster repair and restoration</li>
                  <li className="border-b border-tan mt-3">Originial hardwood floor refinishing</li>
                  <li className="border-b border-tan mt-3">Period millwork and trim repair</li>
                  <li className="border-b border-tan mt-3">Masonry and tuckpointing</li>
                  <li className="border-b border-tan mt-3">
                    Historic siding assessment and repair
                  </li>
                  <li className="border-b border-tan mt-3">
                    Storm window installation and maintenance
                  </li>
                  <li className="border-b border-tan mt-3">
                    Weatherization without compromising character
                  </li>
                  <li className="border-b border-tan mt-3">
                    ARB and historic review consultation support
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <How />
    </div>
  );
}
