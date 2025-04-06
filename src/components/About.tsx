"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg mb-6">
              I&apos;m a Fullstack Developer with a strong focus on building
              clean, performant, and user-first web applications. My expertise
              spans across modern frontend frameworks like Nuxt.js, Next.js, and
              robust backend stacks using FastAPI, Django, and Node.js.
            </p>
            <p className="text-lg mb-6">
              My journey began not just with code, but with curiosity—tinkering
              with side projects and building tools to automate my workflow.
              Since then, I&apos;ve developed everything from lightweight CMS
              platforms to dynamic e-commerce sites, optimizing for both UX and
              developer experience.
            </p>
            <p className="text-lg mb-6">
              I thrive at the intersection of design and logic—where beautiful
              interfaces meet powerful APIs. I&apos;m also passionate about
              performance, accessibility, and staying lean with modern dev
              tools. Whether I&apos;m debugging a GraphQL resolver or crafting a
              responsive UI, I bring an eye for detail and a drive to ship
              quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <p className="mb-1">B.A. in Foreign Language</p>
                <p className="text-text-light">
                  Van Lang University, 2014-2018
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Experience</h3>
                <p className="mb-1">Fullstack Developer</p>
                <p className="text-text-light">
                  Rizerssoft Solutions Inc., 2022-Present
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="font-bold text-xl mb-4 text-primary">
                Why Work With Me?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary p-1 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Problem Solver</h4>
                    <p className="text-text-light">
                      I enjoy tackling complex challenges and finding elegant
                      solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary p-1 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality-Focused</h4>
                    <p className="text-text-light">
                      I ensure clean, maintainable code and excellent user
                      experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary p-1 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Continuous Learner</h4>
                    <p className="text-text-light">
                      I stay updated with the latest technologies and best
                      practices.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="/cv.pdf"
                  download
                  className=" bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center max-w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
