import Cta from "../assets/components/Cta.jsx";
import ProjectCard from "../assets/components/ProjectCard.jsx";
import { Link } from "react-router-dom";
import { projects } from "../constants/index.js";

const ShowCase = () => {
  return (
    <section>
      <section className="px-2  py-30 ">
        <h1 className="text-[clamp(5rem,8vw,8rem)] text-right">Explore</h1>
        <ProjectCard showAll={true} />
      </section>
      <Cta />
    </section>
  );
};

export default ShowCase;
