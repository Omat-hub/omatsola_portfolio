import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const SomeOfMyWorks = () => {
  return (
    <section className=" py-20 container-padding text-pantone">
      <h2 className="text-3xl md:text-5xl mb-3 md:mb-8 text-right ">
        Some Of My Works
      </h2>
      <ProjectCard showAll={false} />

      <div className="flex justify-self-center pt-5  items-center w-full max-w-sm">
        <Link to="/explore" className=" btn-secondary">
          Explore →
        </Link>
      </div>
    </section>
  );
};

export default SomeOfMyWorks;
