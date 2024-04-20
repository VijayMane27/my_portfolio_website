import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomNavbar from "./components/CustomNavbar";
import AboutSection from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="description" content=" " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
  <CustomNavbar />
  <div className="container mt-24 mx-auto py-4 px-12">
    <Element name="home">
      <HeroSection />
    </Element>
    <Element name="about">
      <AboutSection />
    </Element>
    <Element name="projects">
      <ProjectSection />
    </Element>
    <Element name="contact">
      <EmailSection />
    </Element>
  </div>
</main>
      <Footer />
    </div>
  );
}

