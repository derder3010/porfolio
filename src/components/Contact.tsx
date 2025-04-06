import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-black">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-mono font-bold mb-12 text-center uppercase border-b-2 border-black pb-2 inline-block mx-auto">
          Get In Touch
        </h2> */}

        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 font-mono uppercase border-b border-black pb-2 inline-block">
              Let&apos;s Talk
            </h3>
            <p className="text-gray-600 mb-8 font-mono">
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you. Feel free to reach out through any of the contact
              methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg font-mono">EMAIL</h4>
                <Link
                  href="mailto:duytrander@gmail.com"
                  className="text-black hover:underline font-mono"
                >
                  duytrander@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg font-mono">LOCATION</h4>
                <p className="text-gray-600 font-mono">TP. Ho Chi Minh, VN</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg font-mono">PHONE</h4>
                <Link
                  href="tel:+84974170766"
                  className="text-black hover:underline font-mono"
                >
                  +84 974 170 766
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg font-mono">LINKEDIN</h4>
                <Link
                  href="https://www.linkedin.com/in/duytduc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline font-mono"
                >
                  linkedin.com/in/duytduc
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-black pt-8">
            <h4 className="font-semibold text-lg mb-4 font-mono uppercase border-b border-black pb-2 inline-block">
              Connect with me
            </h4>

            <div className="flex gap-6">
              <Link
                href="https://github.com/derder3010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-mono">GITHUB</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/duytduc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-mono">LINKEDIN</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
