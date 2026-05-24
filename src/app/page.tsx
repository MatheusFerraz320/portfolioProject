import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
