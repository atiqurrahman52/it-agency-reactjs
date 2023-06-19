import Achieve from "../components/home/Achieve";
import Banner from "../components/home/Banner";
import ClientSay from "../components/home/ClientSay";
import ItSupport from "../components/home/ItSupport";
import Pricing from "../components/home/Pricing";
import ProfessionalServices from "../components/home/ProfessionalServices";
import RecentWork from "../components/home/RecentWork";
import WorkFlow from "../components/home/WorkFlow";
import Subscribe from "../components/share/Subscribe";
// import Testimonial from "../components/share/Testimonial";


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
            {/* <Testimonial /> */}
            <ClientSay />
            <Subscribe />
        </div>
    );
};

export default Home;