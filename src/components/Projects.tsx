import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Zump FnB Platform",
      description:
        "A lightweight, user-friendly F&B sales management solution. Zump is designed to be the simplest, most compact, and most convenient platform for managing F&B operations.",
      image: "/zump.png",
      technologies: ["Mobile App", "Web App", "Blog"],
      github: "https://github.com/derder3010/ecommerce-platform",
      demo: "https://zump.vn/",
    },
    {
      title: "Blog Backend API By Gin/Golang",
      description:
        "A REST API backend for a blog platform built with modern technologies and best practices.",
      image: "/gin.jpg",
      technologies: ["Golang", "Gin", "CockroachDB", "Gorm"],
      github: "https://github.com/derder3010/golang-blog-api",
      demo: "https://github.com/derder3010/golang-blog-api",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my skills and projects.",
      image: "/porfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/derder3010/porfolio",
      demo: "https://github.com/derder3010/porfolio",
    },
    {
      title: "Landing Page",
      description:
        "Developed a modern, responsive landing page for a multi-location restaurant chain using Next.js as the frontend framework and Directus as the headless CMS.",
      image: "/fw.png",
      technologies: ["Next.js", "Directus", "Postgres", "Tailwind CSS"],
      github: "https://github.com/derder3010/weather-app",
      demo: "https://fwgroup.vn/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 border-t border-b border-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center uppercase border-b-2 border-black pb-2 block mx-auto w-fit">
          My Projects
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border-2 border-black overflow-hidden group hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="relative w-full aspect-[16/9] border-b border-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 font-mono uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-5 font-mono leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-black text-xs font-mono bg-gray-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black font-mono border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors mb-2"
                      >
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        VIEW DETAIL
                      </Link>
                    )}

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-black font-mono border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors mb-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        CODE
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://github.com/derder3010"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 border-2 border-black hover:bg-gray-900 transition-colors font-mono inline-block"
            >
              VIEW MORE PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
