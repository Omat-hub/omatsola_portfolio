import { Link } from "react-router-dom";

const ShortAbout = () => {
  return (
    <section className="flex flex-col md:flex-row md:min-h-[60vh]  items-center md:items-center justify-end py-30 container-padding bg-gray-300">
      <div className="flex flex-col flex-1 items-start md:items-end justify-center gap-5 max-w-prose">
        <p className="text-base text-justify md:text-left text-pantone leading-relaxed">
          Frontend developer and UI designer focused on crafting
          high-performance, user-centered web interfaces. With a strong grasp of
          design principles and modern frontend technologies, I build
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
  );
};

export default ShortAbout;
