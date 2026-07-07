import { FadeIn } from "@/components/FadeIn";
import ImageCarousel from "@/components/ImageCarousel";
import How from "@/components/How";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="min-h-[30vh] flex items-center justify-center p-6 pt-10 text-green">
        <div className="flex flex-col gap-3">
          <FadeIn className="-translate-x-7 flex flex-col gap-3 max-w-7xl" vars={{ duration: 1 }}>
            <h1 className="text-center small">
              <em className="text-brown">Contact Us</em> at KEPT for more information
            </h1>

            <p className="text-[20px] text-center">
              Did we miss something? Fill out the form below and we can get back with you soon.
            </p>
          </FadeIn>
        </div>
      </div>
      <section className="rounded-2xl p-10 xl:p-20 border border-brown">
        <FadeIn className="-translate-x-7 text-center" vars={{ duration: 1 }}>
          <div className="formhere">
            <ContactForm />
          </div>
        </FadeIn>
      </section>
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

      <How />
    </div>
  );
}
