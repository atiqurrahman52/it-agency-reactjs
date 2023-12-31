import serviceDetails from '../../assets/images/service-detail/service-detail.webp'

const ServiceDescription = ({data}) => {
    console.log("My SIngle Data", data);
    const {serviceName} = data 
   
    return (
        <div>
            <div  className="container">
            <div  className="py-8 md:py-16">
                <h4  className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color mb-2">{serviceName}
                </h4>
                <p  className="font-SpaceGrotesk font-medium textsm md:text-base text-black/60">
                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus
                    eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
                    vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. <br /> <br />
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit,
                    sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
                    risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                    <br /> <br />
                    Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain
                    performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive
                    functionalized intellectual capital and. <br /> <br />
                </p>
                <img  className="rounded-lg mb-4 md:mb-5" src={serviceDetails} alt="" />
                <p
                     className="font-Poppins font-semibold text-base md:text-xl text-[#002B33] border-l-2 border-[#001A14] pl-4 md:pl-6 mb-8">
                    A Pioneer To The Emerging And Effective Web And CMS Development proficiency and upgrades it.
                </p>
                <p  className="font-SpaceGrotesk font-medium text-sm md:text-base text-black/60 mb-4">
                    Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate
                    morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
                    suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu
                    ultricies sed mauris vestibulum.
                </p>
                <h5  className="font-openSans font-extrabold text-2xl text-primary mb-3">Explore our audit & assurance
                    services
                </h5>
                <p  className="font-SpaceGrotesk font-medium textsm md:text-base text-black/60">
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies
                    ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed.
                    Nisl at scelerisque amet nulla purus habitasse. <br /> <br />
                    Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt
                    pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
                    dictum eget nibh tortor commodo cursus. <br /> <br />
                    Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi
                    aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
                    dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a
                    erat. Condimentum lorem posuere gravida enim posuere cursus diam.
                </p>
                <div  className="flex flex-col md:flex-row md:justify-between items-center gap-5 mt-6 md:mt-16">
                    <div
                         className="bg-secondary_color flex items-center justify-center gap-2 w-[164px] h-[60px] rounded-xl">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                    d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.45877 15.472 5.5261 14.3789 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
                                    fill="white" />
                                <path
                                    d="M21.9696 18.33C21.9683 18.7074 21.8829 19.0798 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                                    fill="white" />
                            </svg>
                        </span>
                        <div  className="">
                            <span  className="block font-SpaceGrotesk text-xs text-white">For Query</span>
                            <span  className="block font-NotoSerif font-black text-base text-white">310-437-2766</span>
                        </div>
                    </div>
                    <div>
                        <h6  className="font-NotoSerif font-semibold text-base text-black_color mb-4">Share this post</h6>
                        <div  className="flex gap-2">
                            <a href="#"
                                 className="bg-[#F4F4F4] w-8 md:w-10 h-8 md:h-10  flex items-center justify-center rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M20.9999 7.66008V8.00008C21.0007 9.06616 20.576 10.0885 19.8199 10.84L16.9999 13.67C16.4738 14.1911 15.6261 14.1911 15.1 13.67L15 13.56C14.8094 13.3656 14.8094 13.0544 15 12.86L18.4399 9.42006C18.807 9.03938 19.0083 8.52883 18.9999 8.00008V7.66008C19.0003 7.12705 18.788 6.61589 18.4099 6.2401L17.7599 5.59011C17.3841 5.21207 16.873 4.99969 16.3399 5.00011H15.9999C15.4669 4.99969 14.9558 5.21207 14.58 5.59011L11.14 9.00007C10.9456 9.19064 10.6344 9.19064 10.44 9.00007L10.33 8.89007C9.8089 8.36394 9.8089 7.51623 10.33 6.99009L13.16 4.15012C13.9165 3.40505 14.9382 2.99133 15.9999 3.00014H16.3399C17.4011 2.9993 18.4191 3.42018 19.1699 4.17012L19.8299 4.83012C20.5798 5.5809 21.0007 6.59891 20.9999 7.66008ZM8.64993 13.94L13.9399 8.65008C14.0338 8.55543 14.1616 8.50218 14.2949 8.50218C14.4282 8.50218 14.556 8.55543 14.6499 8.65008L15.3499 9.35007C15.4445 9.44395 15.4978 9.57175 15.4978 9.70507C15.4978 9.83839 15.4445 9.96618 15.3499 10.0601L10.0599 15.35C9.96604 15.4447 9.83824 15.4979 9.70492 15.4979C9.57161 15.4979 9.44381 15.4447 9.34993 15.35L8.64993 14.65C8.55528 14.5561 8.50204 14.4283 8.50204 14.295C8.50204 14.1617 8.55528 14.0339 8.64993 13.94ZM13.5599 15C13.3655 14.8094 13.0543 14.8094 12.8599 15L9.42993 18.41C9.0517 18.7905 8.53645 19.003 7.99995 18.9999H7.65995C7.12691 19.0004 6.61576 18.788 6.23997 18.41L5.58997 17.76C5.21194 17.3842 4.99956 16.873 4.99998 16.34V16C4.99956 15.4669 5.21194 14.9558 5.58997 14.58L9.00993 11.14C9.2005 10.9456 9.2005 10.6345 9.00993 10.44L8.89993 10.33C8.3738 9.80894 7.52609 9.80894 6.99996 10.33L4.17999 13.16C3.42392 13.9116 2.99916 14.9339 3 16V16.35C3.00182 17.4077 3.42249 18.4216 4.16999 19.1699L4.82998 19.8299C5.58076 20.5799 6.59878 21.0008 7.65995 20.9999H7.99995C9.05338 21.0061 10.0667 20.5964 10.8199 19.8599L13.6699 17.01C14.191 16.4838 14.191 15.6361 13.6699 15.11L13.5599 15Z"
                                        fill="#005564" />
                                </svg>
                            </a>
                            <a href="#"
                                 className="bg-[#F4F4F4] w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                        fill="#2231BC" />
                                </svg>
                            </a>
                            <a href="#"
                                 className="bg-[#F4F4F4] w-8 md:w-10 h-8 md:h-10  flex items-center justify-center rounded-full">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.9727 6.7174C20.5083 7.33692 19.9469 7.87733 19.3102 8.31776C19.3102 8.47959 19.3102 8.64142 19.3102 8.81225C19.3153 11.7511 18.1414 14.5691 16.0517 16.6345C13.9619 18.6999 11.1311 19.8399 8.19393 19.7989C6.49587 19.8046 4.81955 19.4169 3.2963 18.6661C3.21416 18.6302 3.16119 18.549 3.1615 18.4593V18.3604C3.1615 18.2313 3.26611 18.1267 3.39515 18.1267C5.0643 18.0716 6.6739 17.4929 7.99622 16.4724C6.48541 16.4419 5.12607 15.5469 4.50048 14.1707C4.46889 14.0956 4.47872 14.0093 4.52645 13.9432C4.57417 13.8771 4.65288 13.8407 4.73413 13.8471C5.1933 13.8932 5.65706 13.8505 6.10008 13.7212C4.43227 13.375 3.17909 11.9904 2.99974 10.2957C2.99337 10.2144 3.0298 10.1357 3.09588 10.0879C3.16195 10.0402 3.24812 10.0303 3.32326 10.062C3.77082 10.2595 4.25397 10.3635 4.74312 10.3676C3.28172 9.40846 2.65049 7.58405 3.20643 5.92622C3.26382 5.76513 3.40169 5.64612 3.56938 5.61294C3.73706 5.57975 3.90984 5.63728 4.0242 5.76439C5.99627 7.86325 8.70592 9.11396 11.5818 9.25279C11.5082 8.95885 11.472 8.65676 11.474 8.35372C11.5009 6.76472 12.4841 5.34921 13.9633 4.76987C15.4424 4.19054 17.1248 4.56203 18.2229 5.71044C18.9713 5.56785 19.6949 5.31645 20.3706 4.96421C20.4201 4.93331 20.4829 4.93331 20.5324 4.96421C20.5633 5.01373 20.5633 5.07652 20.5324 5.12604C20.2051 5.87552 19.6522 6.50412 18.9508 6.92419C19.565 6.85296 20.1684 6.70807 20.7481 6.49264C20.7969 6.45942 20.861 6.45942 20.9098 6.49264C20.9507 6.51134 20.9813 6.54711 20.9934 6.59042C21.0055 6.63373 20.9979 6.68018 20.9727 6.7174Z"
                                        fill="#1DA1F2" />
                                </svg>
                            </a>
                            <a href="#"
                                 className="bg-[#F4F4F4] w-8 md:w-10 h-8 md:h-10  flex items-center justify-center rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                                        fill="#2058CD" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default ServiceDescription;