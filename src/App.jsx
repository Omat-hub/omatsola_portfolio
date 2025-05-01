import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./assets/components/RootLayout";
import Home from "./screens/Home";
import About from "./screens/About";
import Explore from "./screens/Explore";
import Contact from "./screens/Contact";
import ProjectDetails from "./screens/ProjectDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project_details/:id" element={<ProjectDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
