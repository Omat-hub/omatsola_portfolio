import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./assets/components/RootLayout";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ShowCase from "./screens/Explore";
import ProjectDetails from "./screens/ProjectDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="show_case" element={<ShowCase />} />
        <Route path="project_details/:id" element={<ProjectDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
