import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Blog from "../components/Blog.jsx";
import Instagram from "../components/Instagram.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Testimonials />
      <Blog />
      <Instagram />
    </>
  );
}
