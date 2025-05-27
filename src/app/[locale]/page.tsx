import About from "@/components/about";
// import Contact from "@/components/contact";
import Destinations from "@/components/destinations";
import Features from "@/components/features";
import Hero from "@/components/hero";
// import Newsletter from "@/components/newsletter";
import Offers from "@/components/offers";
import Payment from "@/components/payment";
// import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Destinations />
      <Payment />
      {/* <Offers /> */}
      <Features />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Newsletter /> */}
    </main>
  );
}
