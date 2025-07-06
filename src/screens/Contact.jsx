const Contact = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 md:max-h-[760px] gap-4 pt-30 pb-10 md:pt-50 container-padding">
      {/* Fun Greeting (HOLA AMIGO!) */}
      <h1 className="text-[clamp(2.5rem,8vw,7rem)] md:[writing-mode:vertical-rl]  leading-none">
        HOLA AMIGO!
      </h1>
      {/* Profile Image */}
      <figure className="md:col-span-2 md:row-span-3">
        <img
          src="/images/portfolioimg.jpeg"
          alt="Omatsola Yarumen"
          className="w-full h-full object-cover md:object-contain"
        />
      </figure>

      <div className="">
        {/* Main Call to Action */}
        <header className="text-[clamp(1.1rem,4vw,2rem)] text-justify md:text-left leading-normal  self-end ">
          Have a project or idea in mind? Let’s connect and make it happen!
        </header>

        {/* Contact Info */}
        <address className="text-base not-italic md:col-span-2 md:row-span-2 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 order-4 md:order-3 gap-4 md:gap-0">
          <div className="self-end">
            <p className="font-light">Place a call</p>
            <a href="tel:+2348029614420">+2348029614420</a>
          </div>

          <div className="self-end">
            <p className="font-light">Drop an email</p>
            <a
              href="mailto:yarumenomatsola@gmail.com"
              className="wrap-anywhere"
            >
              yarumenomatsola@gmail.com
            </a>
          </div>

          <div className="md:col-span-2 self-end">
            <p className="font-light">Send a chat</p>
            <div className="flex  text-center flex-wrap justify-between w-full gap-2">
              <a
                href="https://wa.me/qr/4CBTXBLTT4APO1"
                className=" flex-1 px-6 py-3 text-offwhite bg-accent hover:bg-pantone shadow-xl
   transition-all duration-300 ease-in-out"
              >
                Whatsapp
              </a>
              <a
                href="https://github.com/Omat-hubs"
                className="flex-1 px-6 py-3 text-offwhite bg-accent hover:bg-pantone shadow-xl
   transition-all duration-300 ease-in-out"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/omatsolayarumen"
                className="flex-1 px-6 py-3 text-offwhite bg-accent hover:bg-pantone shadow-xl
   transition-all duration-300 ease-in-out"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </address>
      </div>
    </section>
  );
};

export default Contact;
