import { useParams } from "react-router-dom";
import { projects } from "../constants/index.js";
import Cta from "../assets/components/Cta.jsx";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from URL

  // Find the project that matches the ID
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className=" pt-30 ">
      <h1 className="text-[clamp(3rem,8vw,5rem)] text-right">
        {project.title}
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 ">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-[300px] md:max-h-[600px] object-cover rounded-lg shadow-lg mb-4"
        />
        <div className="mb-4 space-y-4">
          <h2 className="text-2xl font-semibold">
            {project.detailedDescription.heading}
          </h2>

          {project.detailedDescription.paragraphs.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}

          <div>
            <h3 className="text-xl font-medium">Key Features</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {project.detailedDescription.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium ">Technical Details</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {project.detailedDescription.techDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-gray-600 italic">
            {project.detailedDescription.summary}
          </p>
        </div>

        <div className="mb-4">
          <h3 className=" text-xl">Technologies Used</h3>
          <ul className="mt-2">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col mb-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View GitHub Repository
          </a>
        </div>

        <div className="mb-4">
          <p className=" text-gray-500">Year: {project.year}</p>
          <p className="mt-2 text-gray-500">Type: {project.projectType}</p>
        </div>
      </article>
      <Cta />
    </section>
  );
};

export default ProjectDetails;
