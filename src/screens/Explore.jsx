import Cta from "../assets/components/Cta.jsx";
import ProjectCard from "../assets/components/ProjectCard.jsx";

const Explore = () => {
  return (
    <section>
      <section className=" py-30 container-padding">
        <h1 className="text-[clamp(5rem,8vw,8rem)] text-right text-pantone ">Explore</h1>
        <ProjectCard showAll={true} />
      </section>
      <Cta />
    </section>
  );
};

export default Explore;
