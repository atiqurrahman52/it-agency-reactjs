import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not-found/404.webp'
const NotFound = () => {
    return (
        <div className="not_found h-screen bg-cover bg-center bg-no-repeat mt-16">
            <div className="container">
               <div className="mx-auto max-w-[666px]">
                <img  src={notFound} alt="" />
               <div className="mt-20 md:mt-11 flex flex-col justify-center items-center">
                <h3 className="font-NotoSerif font-extrabold text-[32px] md:text-[40px] text-black_color">Page Not Found</h3>
                <p className="font-Inter font-medium text-sm md:text-base text-primary mb-14"> It’s Seem that this was lost. sorry...</p>
                <Link to="/" className="bg-secondary_color w-[186px] h-12 flex justify-center items-center text-white font-Inter font-medium text-base gap-2">
                    <i className="ph ph-arrow-u-up-left"></i>
                    <span>Back to home</span>
                </Link>
               </div>
               </div>
            </div>
        </div>
    );
};

export default NotFound;