import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Choose a KEPT membership — Standard at $99/month or Maintenance at $249/month. Get preventative care, vendor coordination, and a personalized home maintenance plan.",
};
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import How1 from "@/components/How1";
import How2 from "@/components/How2";
import How3 from "@/components/How3";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="min-h-[50vh] flex items-center justify-center p-6 pt-10 text-green">
        <div className="flex flex-col gap-3">
          <FadeIn className="-translate-x-7 flex flex-col gap-3 max-w-7xl" vars={{ duration: 1 }}>
            <h1 className="text-center small">
              We&apos;re a subscription-based maintenance program designed to provide{" "}
              <em className="text-brown">Structural Oversight</em> for a residential properties
            </h1>

            <p className="text-[20px] text-center">
              Membership includes preventative care, service coordination, and forward planning.
            </p>
          </FadeIn>

          <FadeIn className="-translate-x-7 text-center" vars={{ duration: 1, delay: 0.3 }}>
            <Link
              className="bg-brown text-light-tan px-4 md:px-6 py-1 rounded-[30px] border-2 border-green transition-all duration-300 hover:bg-green inline-block"
              href="/about"
            >
              Get Started Now
            </Link>
          </FadeIn>
        </div>
      </div>
      <ImageCarousel
        images={[
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/7jzqnl6pCHu2GV3nQjRIjh/e5059ec0e1169fd1dfb4b5da4da78e76/2023Bathroom1.jpg",
            alt: "",
            width: 300,
            height: 400,
          },
          {
            src: "https://images.ctfassets.net/qwksnpofolz1/yE3a55KLYOPq0U55lNW91/427a3f20665c2bf1c2066bc17a5ea5db/getty-images-N0EX-hLZWhw-unsplash.jpg",
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
        ]}
      />
      <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 flex md:pr-10 py-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3 flex-1" vars={{ duration: 1 }}>
              <div>
                <h2 className="light">
                  Standard Membership <br />
                  $99<em>/month</em>
                </h2>

                <h4>Your start in curated home maintentance</h4>
                <ul className="kept-list kept-list-white">
                  <li className="border-b border-white mt-3">On-Time On-demand Repairs</li>
                  <li className="border-b border-white mt-3">
                    Vendor Coordination &amp; Management
                  </li>
                  <li className="border-b border-white mt-3">
                    Quality Assurance Process Management
                  </li>
                  <li className="border-b border-white mt-3">
                    Access to Vetted, Licensed, Insured Vendors
                  </li>
                  <li className="border-b border-white mt-3">Verifying Scope of Work &amp; Bids</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex items-center text-green">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3 flex-1 bg-tan p-10 rounded-2xl"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div>
                <h2 className="light">
                  Maintenance Membership <br />
                  $249<em>/month</em>
                </h2>
                <h4>Professional Level care-free home maintenance</h4>
                <ul className="kept-list">
                  <li className="border-b border-green mt-3 text-sage opacity-50">
                    On-Time On-demand Repairs
                  </li>
                  <li className="border-b border-green mt-3 text-sage opacity-50">
                    Vendor Coordination &amp; Management
                  </li>
                  <li className="border-b border-green mt-3 text-sage opacity-50">
                    Quality Assurance Process Management
                  </li>
                  <li className="border-b border-green mt-3 text-sage opacity-50">
                    Access to Vetted, Licensed, Insured Vendors
                  </li>
                  <li className="border-b border-green mt-3 text-sage opacity-50">
                    Verifying Scope of Work &amp; Bids
                  </li>
                  <li className="border-b border-green mt-3">Recurring Maintenance Repairs</li>
                  <li className="border-b border-green mt-3">Modern Service Management Platform</li>
                  <li className="border-b border-green mt-3">
                    Personalized Maintenance Plan & Project List
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="min-h-[75vh] flex items-center justify-center p-6 pt-10 text-green">
        <div className="flex flex-col gap-10 w-full">
          <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
            <h2 className="text-center">How KEPT Works</h2>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-15">
            <FadeIn
              className="-translate-x-7 text-center flex-1"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex items-center flex-col gap-10">
                <div className="h-50">
                  <How1 />
                </div>
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  1
                </div>
                <div>
                  <h3 className="big">
                    Set Up Your <br />
                    KEPT App
                  </h3>
                  <p className="text-xl">Your home is organized within the Kept platoform.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              className="-translate-x-7 text-center flex-1"
              vars={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex items-center flex-col gap-10">
                <div className="h-50">
                  <How2 />
                </div>
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  2
                </div>
                <div>
                  <h3 className="big">
                    Initial <br /> Home Review
                  </h3>
                  <p className="text-xl">
                    We assess systems, finishes, equipment, and current conditions.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              className="-translate-x-7 text-center flex-1"
              vars={{ duration: 1, delay: 0.9 }}
            >
              <div className="flex items-center flex-col gap-10">
                <div className="h-50">
                  <How3 />
                </div>
                <div className="number bg-brown rounded-[100px] text-white p-10 w-9 h-9 flex items-center justify-center text-4xl">
                  3
                </div>
                <div>
                  <h3 className="big">
                    Ongoing Maintenance
                    <br />
                    &amp; Planning
                  </h3>
                  <p className="text-xl">
                    Scheduled visits, service coordination, and forward planning are handled
                    proactively.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <Services />
    </div>
  );
}
