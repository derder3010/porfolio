"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Freelance Fullstack Developer",
      company: "Freelance",
      location: "Remote",
      period: "Present",
      description: [
        "Built and deployed web applications for clients in the F&B and eCommerce sectors, focusing on clean architecture and scalability.",
        "Led small teams of 2–5 developers to deliver fullstack solutions using modern web stacks.",
        "Integrated headless CMS (Directus, Strapi) and third-party APIs to enable dynamic content and fast client handover.",
        "Maintained CI/CD pipelines and handled serverless/backend deployments on platforms like Render and Vercel.",
        "Provided code reviews and technical mentoring to junior developers, promoting best practices in TypeScript, Git, and testing.",
      ],
      technologies: [
        "Next.js",
        "Nuxt 3",
        "Directus",
        "Django",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "Render",
        "Vercel",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Rizerssoft Solutions Inc.",
      location: "Austin, TX",
      period: "Mar 2023 - Present",
      description: [
        "Developed and maintained multiple client web applications with focus on performance and accessibility",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Optimized database queries resulting in 30% faster page load times",
        "Collaborated with design team to create intuitive user interfaces and experiences",
      ],
      technologies: [
        "Next.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "GitHub Actions",
        "Azure",
      ],
    },
    {
      title: "PROJECT HEALTH TRACKING",
      company: "Freelance",
      location: "Remote",
      period: "Jun 2023 - Sep 2023",
      description: [
        "Build the system according to the MVC model.",
        "Analyze medical examination results from PDF files of hospitals.",
        "Use design pattern: adapter, to word with input data, returning results that accurately match the user's request.",
        "Query data from the database to display on the frontend.",
        "Handle data extracted from PDF and save to database.",
      ],
      technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest", "Webpack"],
    },
    {
      title: "Web Development Intern",
      company: "Azoda Technology Joint Stock Company",
      location: "Saigon, Vietnam",
      period: "Jan 2022 - May 2022",
      description: [
        "Assisted in building and maintaining company website and client projects",
        "Implemented responsive designs from Figma mockups",
        "Fixed frontend bugs and implemented small features",
        "Participated in code reviews and team meetings",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ];

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
    <section id="experience" ref={sectionRef} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>

        <div className="relative mt-12">
          {/* Timeline line - fixed positioning */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-8 h-full w-1 bg-primary"></div>

          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className={`relative mb-16 ${
                idx % 2 === 0
                  ? "md:pr-12 md:text-right md:mr-auto"
                  : "md:pl-12 md:ml-auto"
              } md:w-[45%] ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              {/* Timeline dot - fixed for both mobile and desktop */}
              <div
                className={`absolute top-6 bg-primary z-10 w-5 h-5 rounded-full border-4 border-white
                ${
                  idx % 2 === 0 ? "md:right-[-10.5px]" : "md:left-[-10.5px]"
                } left-8 md:left-auto transform md:translate-x-0 -translate-x-1/2`}
              ></div>

              <div
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow
                duration-300 border-l-4 border-primary ml-16 md:ml-0 md:border-l-4 ${
                  idx % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`flex flex-col ${
                    idx % 2 === 0 ? "md:items-end" : "md:items-start"
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-text-light text-sm mb-4">{exp.location}</p>

                  <ul
                    className={`list-disc mb-4 ${
                      idx % 2 === 0
                        ? "md:ml-0 md:mr-5 md:text-right list-inside md:list-outside"
                        : "ml-5"
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className={`mb-2 text-text-light ${
                          idx % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 mt-2 ${
                      idx % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-secondary text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
