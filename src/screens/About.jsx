const About = () => {
  return (
    <section className="py-20 md:py-0">
      <article className="grid grid-cols-1 md:grid-cols-6 gap-2 min-h-screen px-2 md:pl-2">
        <div className="md:col-span-3 md:pt-30">
          <header>
            <h1 className=" text-[clamp(5rem,8vw,8rem)]">
              About
            </h1>
          </header>
          {/* Paragraphs */}
          <section>
            <p className="text-base text-justify md:text-left mb-6 md:mb-8 max-w-prose leading-relaxed ">
              I’m Omatsola Yarumen — a frontend developer and a UI designer. I
              believe great digital experiences are not just built — they’re
              crafted with care, intention, and a sense of wonder. My journey
              lives at the intersection of design and code, where an idea
              transforms from a rough sketch into something people can touch,
              feel, and remember. For me, it’s not just about clean layouts or
              perfect animations — it’s about creating moments where users feel
              something: ease, delight, connection. With a strong foundation in
              modern frontend development and thoughtful design principles, I
              shape ideas into polished, high-performance products that don’t
              just work — they resonate.
            </p>
          </section>

          {/* Section Heading */}
          <section className="w-full mb-6 md:mb-8">
            <h2 className="text-2xl mb-2 tracking-tight ">
              What I Bring to Every Project
            </h2>

            {/* List */}
            <ul className="list-none pl-5 text-base mb-6 md:w-[50ch] leading-relaxed ">
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                A blend of design and development skills
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                A passion for creating user-centered experiences
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                A commitment to continuous learning and improvement
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                A collaborative spirit, ready to work with teams and clients
              </li>
            </ul>
          </section>

          <section className="justify-self-end w-full  mb-6 md:mb-8">
            <h2 className="text-2xl tracking-tight">Tools & Tech Stack</h2>
            <p className="text-base text-justify md:text-left mb-2 md:w-[50ch] leading-relaxed">
              As a designer and developer, I leverage a diverse set of tools and
              technologies to create seamless user experiences and efficient
              workflows.
            </p>
            <ul className="list-none pl-5 text-base mb-6 max-w-prose leading-relaxed">
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                Figma
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                Tailwind CSS
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                HTML/CSS
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                JavaScript
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                React
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                Framer Motion
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                Gsap
              </li>
              <li className="mb-2 before:content-['—'] before:mr-2 before:text-lg">
                Git/GitHub
              </li>
            </ul>

            <div className="flex flex-row text-center justify-between w-full  mb-6 md:mb-8">
              <a
                className="border-1 w-full border-gray-500 px-8 py-4 text-base md:text-lg font-medium hover:bg-gray-100 transition text-center"
                href="/files/OMATSOLA JOHN YARUMEN CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My CV
              </a>
              
            </div>
          </section>

          <div className="flex flex-col w-full gap-6 mb-6 md:mb-8">
            <p className=" text-2xl text-left w-full md:w-[30ch]">
              Seeking a frontend developer who understands great design? Let’s
              connect.
            </p>

            <div className="flex flex-row text-center text-base md:text-lg font-medium justify-between">
            <a
                href="#projects"
                className="flex-1 py-8  w-full    hover:bg-green-300 transition bg-gray-100"
              >
                Whatsapp
              </a>
              <a
                href="#projects"
                className="flex-1 py-8  w-full   hover:bg-red-300 transition bg-gray-100"
              >
                Instagram
              </a>
              <a
                href="#projects"
                className="flex-1 py-8  w-full   hover:bg-blue-300 transition  bg-gray-100"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Image side (2/5 columns) */}
        <aside className="md:col-span-3 w-full h-auto sticky top-0 self-start">
          <img
            src="images/2150170514.jpg"
            alt="artist painting paper"
            className="w-full h-1/2 md:h-screen object-cover"
          />
        </aside>
      </article>
    </section>
  );
};

export default About;
