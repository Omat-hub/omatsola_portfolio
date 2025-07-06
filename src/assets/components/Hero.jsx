
const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 h-screen md:max-h-[760px] pb-4  container-padding bg-pantone text-offwhite ">
      <h1 className="text-4xl md:text-[3.6rem] font-medium flex flex-col items-end justify-end md:col-span-4">
        Crafting seamless front-end experiences with clean code and thoughtful
        design.
      </h1>
      <div className="flex flex-col items-start md:items-end justify-center md:justify-center md:col-span-2">
        <div className="flex flex-col items-end w-full gap-2">
          <p className="mt-4 text-base  text-right md:text-left">
            Seeking a frontend developer who understands great design? Let’s
            talk.
          </p>

          <div className="flex flex-col text-center flex-wrap justify-between w-full gap-2">
            <a href="https://wa.me/qr/4CBTXBLTT4APO1" className="btn">
              Whatsapp
            </a>
            <a href="https://github.com/Omat-hubs" className=" btn">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/omatsolayarumen"
              className=" btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
