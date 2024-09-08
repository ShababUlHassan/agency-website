import Link from "next/link";
import HeroSection from "./components/HeroSection";
import TextMarquee from "./components/TextMarquee";
import CountRow from "./components/CountRow";
import Brands from "./components/Brands"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import Portfolio from "./components/Portfolio"
import Blogs from "./components/Blogs"
export default function Home() {
  return (
    <>
      <div className="hero-section flex flex-col items-center pt-[9.6%] ">
        <HeroSection />
        <CountRow />
        <TextMarquee />
      </div>
        <Brands />
        <Portfolio />
        <Services />
        <Testimonial />
        <Blogs />
    </>
  );
}