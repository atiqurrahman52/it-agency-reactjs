import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./components/notFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/"  element={<Home />}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
