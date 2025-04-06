interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
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
      location: "TP. Ho Chi Minh, VN",
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
      location: "TP. Ho Chi Minh, VN",
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

  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 border-t border-b border-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center uppercase border-b-2 border-black pb-2 block mx-auto w-fit">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="mb-12 border-l-4 border-black pl-6 relative"
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-white border-4 border-black rounded-full -ml-[10px]"></div>

              <div className="bg-white p-6 border border-black shadow-sm">
                <div className="flex justify-between items-start flex-wrap mb-4">
                  <div>
                    <h3 className="text-xl font-mono font-bold">{exp.title}</h3>
                    <p className="font-mono font-medium">{exp.company}</p>
                    <p className="text-gray-600 font-mono text-sm">
                      {exp.location}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-gray-100 border border-black mt-1">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc ml-5 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2 font-mono">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-mono text-sm mb-2 font-semibold">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white border border-black text-xs font-mono"
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
