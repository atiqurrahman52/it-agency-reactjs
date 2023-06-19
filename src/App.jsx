import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./components/notFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/"  element={<Home />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/service-details" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
