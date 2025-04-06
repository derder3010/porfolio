interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      name: "Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 70 },
        { name: "TDD", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 border-t border-b border-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center uppercase border-b-2 border-black pb-2 block mx-auto w-fit">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 border-2 border-black shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6 font-mono border-b border-black pb-2">
                {category.name.toUpperCase()}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="font-mono">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-3 border border-black">
                      <div
                        className="bg-black h-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 font-mono uppercase border-b-2 border-black pb-2 inline-block">
            My Development Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Plan",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                ),
                description: "Define requirements and architect solutions",
              },
              {
                name: "Design",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                ),
                description: "Create intuitive and elegant interfaces",
              },
              {
                name: "Develop",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
                description: "Build with clean, efficient, scalable code",
              },
              {
                name: "Deploy",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ),
                description: "Test thoroughly and deliver with confidence",
              },
            ].map((step, idx) => (
              <div
                key={step.name}
                className="flex flex-col items-center p-6 bg-white border-2 border-black shadow-sm relative"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white mb-5 border border-black">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 font-mono">
                  {step.name.toUpperCase()}
                </h4>
                <p className="text-gray-600 text-center font-mono">
                  {step.description}
                </p>

                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-white w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
