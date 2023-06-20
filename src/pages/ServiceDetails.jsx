import { useParams } from "react-router-dom";
import ServiceDescription from "../components/serviceDetails/ServiceDescription";
import ServiceDetailsBanner from "../components/serviceDetails/ServiceDetailsBanner";
import { servicesData } from "../data/share/servicesData";
import PricingPlan from "../components/serviceDetails/PricingPlan";
import ClientSay from "../components/serviceDetails/ClientSay";
import Subscribe from "../components/share/Subscribe"

const ServiceDetails = () => {
    const {id} = useParams();
    const singleService = servicesData?.find((item) => item.id === parseInt(id))
    return (
        <div className="">
            <ServiceDetailsBanner />
            <ServiceDescription data={singleService} />
            <PricingPlan />
            <ClientSay />
            <Subscribe />
        </div>
    );
};

export default ServiceDetails;