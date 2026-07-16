import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Builder-Backed Home Maintenance",
  description:
    "KEPT is a subscription-based home maintenance service built by design-build professionals. Preventative care, reliable support, and long-term property planning — all in one trusted system.",
};
import { ScrollVideo } from "@/components/ScrollVideo";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import Services from "@/components/Services";
import How from "@/components/How";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero
        h1={<>Home Maintenance</>}
        h2={
          <>
            Created by <em>Design-Build Professionals</em>
          </>
        }
        p={
          <>
            Kept is a home maintenance service that combines preventative care with reliable support
            — all in one trusted system.
          </>
        }
        button1={{ label: "Get Started", href: "/app-overview" }}
        button2={{ label: "Learn More", href: "/services" }}
        image={{
          src: "https://images.ctfassets.net/qwksnpofolz1/4lG9dlHCQOwZlVVAVIw0AP/8d63b448807fa54e37de443a77715716/KeptHeroImage.jpg",
          alt: "A beautiful white traditional house with a sidewalk, in lush greenery",
          width: 1536,
          height: 1024,
        }}
      />
      <div className="min-h-[50vh] flex items-center justify-center p-6 pt-10 text-green">
        <div className="flex flex-col gap-3">
          <FadeIn className="-translate-x-7 flex flex-col gap-3 max-w-5xl" vars={{ duration: 1 }}>
            <h2 className="text-center">
              Home Ownership <em className="text-brown">Shouldn&apos;t</em> <br />
              Be A Headache
            </h2>

            <p className="text-[20px] text-center">
              Your home requires attention... and dependable support when the unexpected happens.
            </p>
          </FadeIn>
          <FadeIn className="-translate-x-7 max-w-4xl" vars={{ duration: 1, delay: 0.3 }}>
            <div className="flex gap-4">
              <div className="w-1/2 p-4 bg-tan rounded-lg">
                <p>Without structure, maintenance becomes:</p>
                <ul className="kept-list">
                  <li>Inconsistent</li>
                  <li>Vendor Dependent</li>
                  <li>Poorly Documented</li>
                  <li>More Expensive Over Time</li>
                </ul>
              </div>
              <div className="w-1/2 p-4 bg-tan rounded-lg flex flex-col gap-3 justify-center">
                <p>Most homeowners manage maintenance is reactionary.</p>
                <h3>
                  Kept replaces that chaos with a <em className="text-brown">System</em>
                </h3>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="-translate-x-7 text-center" vars={{ duration: 1, delay: 0.3 }}>
            <Link
              className="bg-brown text-light-tan px-4 md:px-6 py-1 rounded-[30px] border-2 border-green transition-all duration-300 hover:bg-green inline-block"
              href="/sign-up"
            >
              Sign Up Now
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
          <div className="md:w-2/3 flex items-center md:pr-10">
            <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
              <div>
                <h2>
                  KEPT is: A <em>Builder-Backed</em> Home Maintentance Program
                </h2>
                <p>
                  We are a subscription-based home maintenance service designed to keep your home
                  running smoothly - without becoming your full-time responsibility
                </p>
                <h4>With KEPT, you receive:</h4>
                <ul className="kept-list kept-list-white">
                  <li>Routine preventative home inspections</li>
                  <li>A single point of contact for service and repairs</li>
                  <li>Organized records of past service and upcoming projects</li>
                  <li>Long-term property planning to anticipate future needs</li>
                </ul>
                <p className="text-sm">
                  Kept is available in select locations across the country, in partnership with
                  trusted local builders and home maintenance professionals. In each geographic
                  area, services are delivered as: Kept by [Local Company Name]
                </p>
                <h4>One program. One system. One accountable partner.</h4>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-1/3 flex items-center md:max-w-none justify-center py-5 md:py-0">
            <FadeIn
              className="-translate-x-7 flex flex-col gap-3"
              vars={{ duration: 1, delay: 0.3 }}
            >
              <ScrollVideo src="/KeptMainVideo.mp4" className="max-w-[400px]" />
            </FadeIn>
          </div>
        </div>
      </section>
      <How />
      <Services />
    </div>
  );
}
