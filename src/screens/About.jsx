const About = () => {
  return (
    <section className="py-20 md:py-0">
      <article className="grid grid-cols-1 md:grid-cols-6 gap-2 min-h-screen px-4 md:pr-6 md:pl-0 lg:pr-8 lg:pl-0 text-pantone">
        {/* Image side (2/5 columns) */}
       
        <div className="order-1 md:order-2 md:col-span-3 pt-10 md:pt-30">
          <header>
            <h1 className=" text-[clamp(5rem,8vw,8rem)] text-right">About</h1>
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

            <div className="flex flex-row text-center justify-between w-fit  mb-6 md:mb-8">
              <a
                className="btn-secondary text-base font-medium"
                href="/files/OMATSOLA JOHN YARUMEN CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My CV
              </a>
            </div>
          </section>
        </div>

         <aside className="order-2 md:order-1 md:col-span-3 w-full h-auto sticky top-0 self-start">
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
