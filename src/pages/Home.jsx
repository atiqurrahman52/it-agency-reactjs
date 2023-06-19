import Achieve from "../components/home/Achieve";
import Banner from "../components/home/Banner";
import ItSupport from "../components/home/ItSupport";
import Pricing from "../components/home/Pricing";
import ProfessionalServices from "../components/home/ProfessionalServices";
import RecentWork from "../components/home/RecentWork";
import WorkFlow from "../components/home/WorkFlow";


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
        </div>
    );
};

export default Home;