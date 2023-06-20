import Achieve from "../components/home/Achieve";
import Banner from "../components/home/Banner";
import ClientSay from "../components/home/ClientSay";
import ItSupport from "../components/home/ItSupport";
import OurClients from "../components/home/OurClients";
import Pricing from "../components/home/Pricing";
import ProfessionalServices from "../components/home/ProfessionalServices";
import RecentWork from "../components/home/RecentWork";
import WorkFlow from "../components/home/WorkFlow";
import Subscribe from "../components/share/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkFlow />
      <ProfessionalServices />
      <Achieve />
      <ItSupport />
      <RecentWork />
      <Pricing />
      <ClientSay />
      <Subscribe />
      <OurClients />
    </div>
  );
};

export default Home;
