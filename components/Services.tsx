import Link from "next/link";
import { FadeIn } from "./FadeIn";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";

export default function Services() {
  return (
    <section className="rounded-2xl bg-green text-white p-10 xl:p-20">
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <FadeIn className="-translate-x-7 md:w-1/2" vars={{ duration: 1 }}>
          <div className="flex flex-col items-start gap-5">
            <h2>Services We Coordinate</h2>
            <p className="text-xl">
              Explore our full range of home services—from preventative maintenance and seasonal
              upkeep to Long-Term Planning —designed to keep your home running smoothly, year-round.
            </p>
            <Link
              className="bg-brown text-light-tan px-4 md:px-6 py-1 rounded-[30px] border-2 border-green transition-all duration-300 hover:bg-green inline-block"
              href="/services"
            >
              View All Services
            </Link>
          </div>
        </FadeIn>
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:w-1/2">
          <FadeIn className="-translate-x-7 sm:w-1/2 p-2.5" vars={{ duration: 1, delay: 0.3 }}>
            <div className="flex items-center flex-col gap-2">
              <div className="h-[100px] xl:h-[140px]">
                <Service1 />
              </div>
              <div className="text-center">
                <p className="text-xl">Essential</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="-translate-x-7 sm:w-1/2 p-2.5" vars={{ duration: 1, delay: 0.6 }}>
            <div className="flex items-center flex-col gap-2">
              <div className="h-[100px] xl:h-[140px]">
                <Service2 />
              </div>
              <div className="text-center">
                <p className="text-xl">Seasonal</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="-translate-x-7 sm:w-1/2 p-2.5" vars={{ duration: 1, delay: 0.9 }}>
            <div className="flex items-center flex-col gap-2">
              <div className="h-[100px] xl:h-[140px]">
                <Service3 />
              </div>
              <div className="text-center">
                <p className="text-xl">Enhancement</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="-translate-x-7 sm:w-1/2 p-2.5" vars={{ duration: 1, delay: 1.2 }}>
            <div className="flex items-center flex-col gap-2">
              <div className="h-[100px] xl:h-[140px]">
                <Service4 />
              </div>
              <div className="text-center">
                <p className="text-xl">Preservation</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
