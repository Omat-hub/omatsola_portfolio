import Cta from "../assets/components/Cta";

import Hero from "../assets/components/Hero";
import ShortAbout from "../assets/components/ShortAbout";
import SomeOfMyWorks from "../assets/components/SomeOfMyWorks";

const Home = () => {
  return (
    <section>
      <Hero />
      <ShortAbout />
      <SomeOfMyWorks />
      <Cta />
    </section>
  );
};

export default Home;
