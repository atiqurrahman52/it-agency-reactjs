

const ServiceDetailsBanner = () => {
    return (
        <div className="service_detail_header bg-center bg-cover bg-no-repeat mt-20">
        <div className="container">
            <div className="py-10">
                <div className="hidden md:block">
                    <button type="" className="border border-white rounded p-2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 3C9.275 3 4 6.075 4 10V22C4 25.925 9.275 29 16 29C22.725 29 28 25.925 28 22V10C28 6.075 22.725 3 16 3ZM26 16C26 17.2 25.0125 18.425 23.3 19.3625C21.3625 20.425 18.775 21 16 21C13.225 21 10.6375 20.425 8.7 19.3625C6.9875 18.425 6 17.2 6 16V13.925C8.1375 15.7875 11.775 17 16 17C20.225 17 23.8625 15.7875 26 13.925V16ZM23.3 25.3625C21.3625 26.425 18.775 27 16 27C13.225 27 10.6375 26.425 8.7 25.3625C6.9875 24.425 6 23.2 6 22V19.925C8.1375 21.7875 11.775 23 16 23C20.225 23 23.8625 21.7875 26 19.925V22C26 23.2 25.0125 24.425 23.3 25.3625Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center  md:hidden">
                    <button type="" className="border border-white rounded p-1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 3C9.275 3 4 6.075 4 10V22C4 25.925 9.275 29 16 29C22.725 29 28 25.925 28 22V10C28 6.075 22.725 3 16 3ZM26 16C26 17.2 25.0125 18.425 23.3 19.3625C21.3625 20.425 18.775 21 16 21C13.225 21 10.6375 20.425 8.7 19.3625C6.9875 18.425 6 17.2 6 16V13.925C8.1375 15.7875 11.775 17 16 17C20.225 17 23.8625 15.7875 26 13.925V16ZM23.3 25.3625C21.3625 26.425 18.775 27 16 27C13.225 27 10.6375 26.425 8.7 25.3625C6.9875 24.425 6 23.2 6 22V19.925C8.1375 21.7875 11.775 23 16 23C20.225 23 23.8625 21.7875 26 19.925V22C26 23.2 25.0125 24.425 23.3 25.3625Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="font-SpaceGrotesk text-lg text-white mt-6 hidden md:block">
                    <h3 className="font-NotoSerif font-black text-2xl md:text-[40px] text-white mb-4">Data center<span
                            className="text-secondary_color">.</span> </h3>
                    <div className="flex items-center gap-1">
                        <span>Service</span>
                        <i className="ph ph-caret-right"></i>
                        <span>Data Center</span>
                    </div>
                </div>
                <div className="flex justify-center md:hidden">
                    <div className="font-SpaceGrotesk text-lg text-white mt-6">
                        <h3 className="font-NotoSerif font-black text-2xl md:text-[40px] text-white mb-4 text-center">
                            Data center<span className="text-secondary_color">.</span> </h3>
                        <div className="flex items-center justify-center gap-1">
                            <span>Service</span>
                            <i className="ph ph-caret-right"></i>
                            <span>Data Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetailsBanner;