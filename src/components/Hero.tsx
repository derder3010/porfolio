"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-24 bg-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div
          className={`w-full md:w-1/2 text-center md:text-left ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4">
            Hi, I&apos;m <span className="text-black">Duy Tran</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono mb-6 bg-gray-100 inline-block px-2 border border-black">
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Web Engineer",
                2000,
                "JavaScript Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 font-mono leading-relaxed">
            Building modern web applications with cutting-edge technologies.
            Passionate about creating elegant, efficient solutions to complex
            problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 font-mono border-2 border-black hover:bg-gray-900 transition-colors"
            >
              GET IN TOUCH
            </a>
            <a
              href="#projects"
              className="bg-white border-2 border-black text-black px-6 py-3 font-mono hover:bg-gray-100 transition-colors"
            >
              VIEW MY WORK
            </a>
          </div>
          <div className="flex mt-8 gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/derder3010"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2 hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/duytduc/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2 hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-black">
            <Image
              src="/duytran.jpg"
              alt="Der Der - Fullstack Developer"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              priority
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center font-mono border border-black p-2 hover:bg-gray-100 transition-colors"
        >
          <span className="mb-2">SCROLL DOWN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex md:hidden justify-center mt-12">
        <a
          href="#about"
          className="flex flex-col items-center font-mono border border-black p-2 hover:bg-gray-100 transition-colors"
        >
          <span className="mb-2">SCROLL DOWN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}
