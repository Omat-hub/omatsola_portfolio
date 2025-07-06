const Contact = () => {
  return (
    <section className=" items-center py-8  md:pt-20 container-padding  text-black mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-12 gap-8 relative w-full">
      {/* Vertical Headline */}
      <div className="absolute left-4 top-6 md:static md:col-span-1 flex justify-center md:justify-start">
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] hidden md:block md:[writing-mode:vertical-rl] md:rotate-180 leading-none font-bold tracking-tight text-black uppercase">
          HOLA AMIGO!
        </h1>
      </div>

      {/* Image */}
      <figure className="md:col-span-4 order-1 md:order-2 md:-rotate-12 md:-z-3000 w-full">
        <img
          src="/images/portfolioimg.jpeg"
          alt="Omatsola Yarumen"
          className="w-full  mt-15 object-cover h-[450px] md:mt-0 md:h-[520px] rounded-4xl shadow-lg"
        />
      </figure>

      {/* Text & Contact Info */}
      <div className="md:col-span-7 gap-1 order-2 md:order-3">
        <header className="text-[clamp(1.25rem,3vw,2rem)] leading-relaxed tracking-tight font-medium">
          Have a project or idea in mind? Let’s connect and make it happen.
        </header>

        <address className="not-italic grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 text-base font-light tracking-wide">
          <div className="flex flex-col gap-1">
            <p className="uppercase text-gray-500 text-sm">Call</p>
            <a
              href="tel:+2348029614420"
              className="font-medium hover:underline"
            >
              +234 802 961 4420
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="uppercase text-gray-500 text-sm">Email</p>
            <a
              href="mailto:yarumenomatsola@gmail.com"
              className="break-all font-medium hover:underline"
            >
              yarumenomatsola@gmail.com
            </a>
          </div>
          <div className=" sm:col-span-2">
            <p className="uppercase text-gray-500 text-sm mb-3">Social</p>
            <div className="flex flex-col sm:flex-row gap-2 ">
              {[
                {
                  href: "https://wa.me/qr/4CBTXBLTT4APO1",
                  label: "WhatsApp",
                },
                {
                  href: "https://github.com/Omat-hubs",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/omatsolayarumen",
                  label: "LinkedIn",
                },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </address>
      </div>
    </section>
  );
};

export default Contact;
