import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <section className="grid grid-rows-2 py-20  px-2  items-center justify-center bg-amber-500">
      <div>
        <h2 className="text-4xl">Let’s Build Something Great.</h2>
        <p className="text-lg w-full md:w-[40ch]  text-justify ">
          I'm open to collaborations, freelance gigs or just a good chat — let's
          connect.
        </p>
      </div>

      <div>
        <div className="flex justify-center ">
          <Link
            to="/contact"
            className="text-center w-full px-12 py-3 border-1 border-gray-500 hover:bg-gray-500 hover:text-white transition"
          >
            Contact Me →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
