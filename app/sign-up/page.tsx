import HeroSign from "@/components/HeroSign";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSign
        h1={<>Sign Up for KEPT Now</>}
        image1={{
          src: "https://images.ctfassets.net/qwksnpofolz1/4R6oIyUGsyY0nJzJN6nBOZ/ad0e0bf940fabb6f341872138297f344/apple-app-store.png",
          alt: "Apple iPhone with the Kept App, Download from Apple store",
          width: 409,
          height: 857,
        }}
        image2={{
          src: "https://images.ctfassets.net/qwksnpofolz1/6k1z6cg61hROmKyasxI58y/8ccbd59dcf6d4754bf1181e9eee26bfd/google-play.png",
          alt: "Samsung Galaxy with the Kept App, Download from Google Play",
          width: 409,
          height: 857,
        }}
        image={{
          src: "https://images.ctfassets.net/qwksnpofolz1/4lG9dlHCQOwZlVVAVIw0AP/8d63b448807fa54e37de443a77715716/KeptHeroImage.jpg",
          alt: "A beautiful white traditional house with a sidewalk, in lush greenery",
          width: 1536,
          height: 1024,
        }}
        h2={
          <>
            Available on <em>App Store</em> and <em>Google Play</em>
          </>
        }
        button1={{ href: "/app-overview" }}
        button2={{ href: "/services" }}
      />
      <Services />
    </div>
  );
}
