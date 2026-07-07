import { FadeIn } from "./FadeIn";
import How1 from "./How1";
import How2 from "./How2";
import How3 from "./How3";

export default function How() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center p-6 pt-10 text-green">
      <div className="flex flex-col gap-10 w-full">
        <FadeIn className="-translate-x-7 flex flex-col gap-3" vars={{ duration: 1 }}>
          <h2 className="text-center">How KEPT Works</h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-15">
          <FadeIn className="-translate-x-7 text-center flex-1" vars={{ duration: 1, delay: 0.3 }}>
            <div className="flex items-center flex-col gap-10">
              <div className="h-[200px]">
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
          <FadeIn className="-translate-x-7 text-center flex-1" vars={{ duration: 1, delay: 0.6 }}>
            <div className="flex items-center flex-col gap-10">
              <div className="h-[200px]">
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
          <FadeIn className="-translate-x-7 text-center flex-1" vars={{ duration: 1, delay: 0.9 }}>
            <div className="flex items-center flex-col gap-10">
              <div className="h-[200px]">
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
  );
}
