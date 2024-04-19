import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomNavbar from "./components/CustomNavbar";
import AboutSection from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";

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
        <div class="container mt-24 mx-auto py-4 px-12">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
    </div>
  );
}
