import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndSkills from "@/components/AboutAndSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-white text-[17px] md:text-[18px]">
        <Hero />
        <AboutAndSkills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}