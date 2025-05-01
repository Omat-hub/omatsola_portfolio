import Cta from "../assets/components/Cta";
import ProjectCard from "../assets/components/ProjectCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      {/* First Section */}
      <section className="grid grid-cols-1 md:grid-cols-6 h-screen md:max-h-[760px]   px-2 ">
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
                href="#projects"
                className="px-6 py-6  hover:bg-green-300 transition bg-gray-100"
              >
                Whatsapp
              </a>
              <a
                href="#projects"
                className="px-6 py-6  hover:bg-red-300 transition bg-gray-100"
              >
                Instagram
              </a>
              <a
                href="#projects"
                className="px-6 py-6  hover:bg-blue-300 transition  bg-gray-100"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col md:flex-row h-[50vh] md:min-h-[60vh] px-2 items-center md:items-center justify-end">
        {/* Main content */}
        <div className="flex flex-col flex-1 items-start md:items-end justify-center gap-6 max-w-prose">
          <p className="text-xl text-justify md:text-left">
            Frontend developer and UI designer focused on crafting
            high-performance, user-centered web interfaces. With a strong grasp
            of design principles and modern frontend technologies, I build
            responsive, accessible, and visually polished digital experiences. I
            bridge the gap between design and development, delivering solutions
            that are both technically sound and thoughtfully designed for
            usability and impact.
          </p>

          <div className="flex justify-center md:justify-start  ">
            <Link
              to="/about"
              className="w-full px-12 py-3 border-1 border-gray-500 hover:bg-gray-500 hover:text-white  transition"
            >
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="px-2  py-10 ">
        <h2 className="text-2xl mb-4 text-right md:text-left ">
          Some Of My Works
        </h2>
        <ProjectCard showAll={false} />
        <div className="grid grid-rows-2 pb-10  items-center justify-center">
          <h2 className="text-2xl">Explore More Of My Works</h2>

          <div>
            <div className="flex justify-center  w-full">
              <Link
                to="/explore"
                className="text-center w-full px-12 py-3 border-1 border-gray-500 hover:bg-gray-500 hover:text-white transition"
              >
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
