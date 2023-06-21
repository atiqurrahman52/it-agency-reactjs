import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./components/notFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Blog from './pages/Blog'
import BlogDetails from "./pages/BlogDetails";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/"  element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/coming-soon"  element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
