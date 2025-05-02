import Cta from "../assets/components/Cta";
import ProjectCard from "../assets/components/ProjectCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      {/* First Section */}
      <section className="grid grid-cols-1 md:grid-cols-6 h-screen md:max-h-[760px] pb-4  container-padding bg-pantone text-offwhite ">
        <h1 className="text-4xl md:text-6xl font-medium flex flex-col items-end justify-end md:col-span-4">
          Crafting seamless front-end experiences with clean code and thoughtful
          design.
        </h1>
        <div className="flex flex-col items-start md:items-end justify-center md:justify-center md:col-span-2">
          <div className="flex flex-col items-end w-full gap-2">
            <p className="mt-4 text-lg  text-right md:text-left">
              Seeking a frontend developer who understands great design? Let’s
              talk.
            </p>

            <div className="flex flex-col text-center flex-wrap justify-between w-full gap-2">
              <a
                href="https://wa.me/qr/4CBTXBLTT4APO1"
                className="  hover:bg-green-300 hover:text-black transition btn"
              >
                Whatsapp
              </a>
              <a
                href="https://github.com/Omat-hubs"
                className="px-6 py-6  hover:bg-red-300 hover:text-black transition btn"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/omatsolayarumen"
                className="px-6 py-6  hover:bg-blue-300 hover:text-black transition  btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col md:flex-row h-[50vh] md:min-h-[60vh]  items-center md:items-center justify-end container-padding ">
        <div className="flex flex-col flex-1 items-start md:items-end justify-center gap-6 max-w-prose">
          <p className="text-xl text-justify md:text-left text-pantone">
            Frontend developer and UI designer focused on crafting
            high-performance, user-centered web interfaces. With a strong grasp
            of design principles and modern frontend technologies, I build
            responsive, accessible, and visually polished digital experiences. I
            bridge the gap between design and development, delivering solutions
            that are both technically sound and thoughtfully designed for
            usability and impact.
          </p>

          <div className="flex justify-center md:justify-start  ">
            <Link to="/about" className=" btn-secondary">
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className=" py-10 container-padding text-pantone">
        <h2 className="text-2xl mb-4 text-right md:text-left ">
          Some Of My Works
        </h2>
        <ProjectCard showAll={false} />
        <div className="grid grid-rows-2 pb-10  items-center justify-center">
          <h2 className="text-2xl">Explore More Of My Works</h2>

          <div>
            <div className="flex justify-center  w-full">
              <Link to="/explore" className="btn-secondary">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </section>
  );
};

export default Home;
