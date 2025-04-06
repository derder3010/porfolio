import dynamic from "next/dynamic";
import { Suspense } from "react";

// Static components that don't need client-side interactivity initially
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamic imports for components with client-side interactivity
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">Loading...</div>
  ),
});
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Hero />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Skills />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Experience />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
}
