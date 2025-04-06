export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white border-t border-b border-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center uppercase border-b-2 border-black pb-2 block mx-auto w-fit">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6 font-mono leading-relaxed">
                I&apos;m a{" "}
                <span className="font-bold">Fullstack Developer</span> with a
                strong focus on building clean, performant, and user-first web
                applications. My expertise spans across modern frontend
                frameworks like{" "}
                <span className="font-bold">Nuxt.js, Next.js</span>, and robust
                backend stacks using{" "}
                <span className="font-bold">FastAPI, Django, and Node.js</span>.
              </p>
              <p className="text-lg mb-6 font-mono leading-relaxed">
                My journey began not just with code, but with
                <span className="font-bold"> curiosity</span>—tinkering with
                side projects and building tools to automate my workflow. Since
                then, I&apos;ve developed everything from lightweight CMS
                platforms to dynamic e-commerce sites, optimizing for both UX
                and developer experience.
              </p>
              <p className="text-lg mb-6 font-mono leading-relaxed">
                I thrive at the{" "}
                <span className="font-bold">
                  intersection of design and logic
                </span>
                —where beautiful interfaces meet powerful APIs. I&apos;m also
                passionate about
                <span className="font-bold">
                  {" "}
                  performance, accessibility, and staying lean
                </span>{" "}
                with modern dev tools. Whether I&apos;m debugging a GraphQL
                resolver or crafting a responsive UI, I bring an eye for detail
                and a drive to ship quality products.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-t-2 border-black pt-4">
                <h3 className="font-bold text-xl mb-2 font-mono">EDUCATION</h3>
                <p className="mb-1 font-mono">B.A. in Foreign Language</p>
                <p className="text-gray-600 font-mono">
                  Van Lang University, 2014-2018
                </p>
              </div>
              <div className="border-t-2 border-black pt-4">
                <h3 className="font-bold text-xl mb-2 font-mono">EXPERIENCE</h3>
                <p className="mb-1 font-mono">Fullstack Developer</p>
                <p className="text-gray-600 font-mono">
                  Rizerssoft Solutions Inc., 2022-Present
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 border-2 border-black shadow-sm">
              <h3 className="font-bold text-xl mb-6 font-mono border-b border-black pb-2">
                WHY WORK WITH ME?
              </h3>

              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black p-1.5 text-white flex-shrink-0">
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
                    <h4 className="font-semibold font-mono text-lg mb-1">
                      PROBLEM SOLVER
                    </h4>
                    <p className="text-gray-600 font-mono leading-relaxed">
                      I enjoy tackling complex challenges and finding elegant
                      solutions. My analytical approach allows me to break down
                      problems and develop effective strategies to solve them.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black p-1.5 text-white flex-shrink-0">
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
                    <h4 className="font-semibold font-mono text-lg mb-1">
                      QUALITY-FOCUSED
                    </h4>
                    <p className="text-gray-600 font-mono leading-relaxed">
                      I ensure clean, maintainable code and excellent user
                      experiences. Every project I work on follows best
                      practices for performance, accessibility, and security.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-black p-1.5 text-white flex-shrink-0">
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
                    <h4 className="font-semibold font-mono text-lg mb-1">
                      CONTINUOUS LEARNER
                    </h4>
                    <p className="text-gray-600 font-mono leading-relaxed">
                      I stay updated with the latest technologies and best
                      practices in the rapidly evolving web development
                      landscape, constantly adding new tools to my repertoire.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 border-t border-black pt-6">
                <a
                  href="/cv.pdf"
                  download
                  className="bg-black text-white font-mono py-3 px-6 border-2 border-black hover:bg-gray-900 transition-colors flex items-center justify-center max-w-fit"
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
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
