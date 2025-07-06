import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Preloader from "./Preloader";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className=" min-h-screen">
      
      <Header />
      <main className="relative ">
        <Preloader isLoading={loading} />
        <ScrollToTop />
        {!loading && <Outlet />}
      </main>
      <Footer />
    
    </div>
  );
};

export default RootLayout;
