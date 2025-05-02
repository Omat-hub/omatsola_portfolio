import { Link } from "react-router-dom";
import { projects } from "../../constants/index.js";

const ProjectCard = ({ showAll = false }) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3); // Show only 3 on Home
  return (
    <section className="pb-10">
      <ul className="grid grid-cols-1 gap-6 md:gap-10">
        {displayedProjects.map((project) => (
          <li key={project.id} className=" shadow-lg hover:hover:scale-102 transition-all duration-300 overflow-hidden ">
            <Link
              to={`/project_details/${project.id}`}
              className="grid grid-cols-1 md:grid-cols-6"
            >
              <span className="text-[clamp(3rem,8vw,5rem)] text-left md:text-center leading-16 ">
                0{project.id}
              </span>
              <div className="py-4 md:py-0 md:col-span-2">
                <h2 className="text-xl leading-5 font-semibold pb-2 text-center md:text-left">
                  {project.title}
                </h2>
                <p className="text-base">{project.description}</p>
              </div>
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-110 md:col-span-3"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCard;
