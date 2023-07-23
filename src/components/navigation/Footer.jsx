import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footer/footer-logo.png";
import { footerData } from "../../data/navigation/footerData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="pt-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lsm:col-span-12 md:col-span-12 lg:col-span-7">
              <Link to="/">
                <img
                  className="mb-8 w-[157px] md:w-[167px] h-12 md:h-[62px]"
                  src={footerLogo}
                  alt="Footer Logo"
                />
              </Link>
              <p className="font-Inter text-xs md:text-sm text-light_gray">
                Lorem ipsum dolor sit amet consectetur. At scelerisque feugiat
                orci faucibus vel adipiscing ipsum porttitor potenti. Tempus nec
                condimentum mattis nunc sit leo dignissim vulputate.
              </p>
              <div className="flex items-center gap-3 mt-8 md:mt-16">
                <button
                  type=""
                  className="p-2 md:p-[14px] bg-[#264B52] rounded-full"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M10.5 1.875C8.8424 1.875 7.25269 2.53348 6.08058 3.70558C4.90848 4.87769 4.25 6.4674 4.25 8.125C4.25 13.75 10.5 18.125 10.5 18.125C10.5 18.125 16.75 13.75 16.75 8.125C16.75 6.4674 16.0915 4.87769 14.9194 3.70558C13.7473 2.53348 12.1576 1.875 10.5 1.875V1.875ZM10.5 10.625C10.0055 10.625 9.5222 10.4784 9.11107 10.2037C8.69995 9.92897 8.37952 9.53852 8.1903 9.08171C8.00108 8.62489 7.95157 8.12223 8.04804 7.63727C8.1445 7.15232 8.3826 6.70686 8.73223 6.35723C9.08186 6.0076 9.52732 5.7695 10.0123 5.67304C10.4972 5.57657 10.9999 5.62608 11.4567 5.8153C11.9135 6.00452 12.304 6.32495 12.5787 6.73607C12.8534 7.1472 13 7.63055 13 8.125C13 8.78804 12.7366 9.42393 12.2678 9.89277C11.7989 10.3616 11.163 10.625 10.5 10.625Z"
                      fill="white"
                    />
                    <path
                      d="M10.5 10.625C11.8807 10.625 13 9.50571 13 8.125C13 6.74429 11.8807 5.625 10.5 5.625C9.11929 5.625 8 6.74429 8 8.125C8 9.50571 9.11929 10.625 10.5 10.625Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.75 8.125C16.75 13.75 10.5 18.125 10.5 18.125C10.5 18.125 4.25 13.75 4.25 8.125C4.25 6.4674 4.90848 4.87769 6.08058 3.70558C7.25269 2.53348 8.8424 1.875 10.5 1.875C12.1576 1.875 13.7473 2.53348 14.9194 3.70558C16.0915 4.87769 16.75 6.4674 16.75 8.125V8.125Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="font-Inter font-medium text-xs md:text-sm text-light_gray">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
              </div>
            </div>
            <div className="col-span-12   lsm:col-span-6 md:col-span-6 lg:col-span-3">
              <h6 className="font-NotoSerif font-black text-xl text-white mb-10">
                Contacts
              </h6>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <button type="">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M20.6211 8.95C19.5711 4.33 15.5411 2.25 12.0011 2.25H11.9911C8.46107 2.25 4.42107 4.32 3.37107 8.94C2.20107 14.1 5.36107 18.47 8.22107 21.22C9.23479 22.2012 10.5903 22.7498 12.0011 22.75C13.3611 22.75 14.7211 22.24 15.7711 21.22C18.6311 18.47 21.7911 14.11 20.6211 8.95Z"
                        fill="white"
                      />
                      <path
                        d="M12.0021 13.9602C12.4157 13.9602 12.8253 13.8787 13.2075 13.7204C13.5897 13.5621 13.9369 13.33 14.2294 13.0375C14.5219 12.745 14.754 12.3978 14.9123 12.0156C15.0706 11.6334 15.1521 11.2238 15.1521 10.8102C15.1521 10.3965 15.0706 9.98688 14.9123 9.6047C14.754 9.22253 14.5219 8.87527 14.2294 8.58277C13.9369 8.29027 13.5897 8.05824 13.2075 7.89994C12.8253 7.74163 12.4157 7.66016 12.0021 7.66016C11.1666 7.66016 10.3654 7.99203 9.77466 8.58277C9.18392 9.17351 8.85205 9.97472 8.85205 10.8102C8.85205 11.6456 9.18392 12.4468 9.77466 13.0375C10.3654 13.6283 11.1666 13.9602 12.0021 13.9602Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="font-Inter font-medium text-xs md:text-sm text-white">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>

                <div className="flex items-ce gap-3">
                  <button type="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M9.99984 18.3332C14.6023 18.3332 18.3332 14.6023 18.3332 9.99984C18.3332 5.39734 14.6023 1.6665 9.99984 1.6665C5.39734 1.6665 1.6665 5.39734 1.6665 9.99984C1.6665 14.6023 5.39734 18.3332 9.99984 18.3332Z"
                        fill="white"
                      />
                      <path
                        d="M13.0919 13.2764C12.9795 13.2784 12.8691 13.2465 12.7752 13.1848L10.1919 11.6431C9.55019 11.2598 9.0752 10.4181 9.0752 9.67643V6.25977C9.0752 5.9181 9.35853 5.63477 9.7002 5.63477C10.0419 5.63477 10.3252 5.9181 10.3252 6.25977V9.67643C10.3252 9.97643 10.5752 10.4181 10.8335 10.5681L13.4169 12.1098C13.7169 12.2848 13.8085 12.6681 13.6335 12.9681C13.5769 13.0613 13.4974 13.1385 13.4026 13.1925C13.3079 13.2464 13.2009 13.2753 13.0919 13.2764Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="font-Inter font-medium text-xs md:text-sm text-white">
                    Mon-Sat{" "}
                    <span className="text-secondary_color">09:00 - 07:00</span>
                  </p>
                </div>

                <a href="tel:+012-345-6789" className="flex items-center gap-3">
                  <button type="">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.79 14.71L8.52 17.98C8.16 17.66 7.81 17.33 7.47 16.99C6.45877 15.972 5.5261 14.8789 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.09 14.07 11.44 14.41 11.79 14.71Z"
                        fill="white"
                      />
                      <path
                        d="M21.9701 18.83C21.9688 19.2074 21.8834 19.5798 21.7201 19.92C21.5501 20.28 21.3301 20.62 21.0401 20.94C20.5501 21.48 20.0101 21.87 19.4001 22.12C19.3901 22.12 19.3801 22.13 19.3701 22.13C18.7801 22.37 18.1401 22.5 17.4501 22.5C16.4301 22.5 15.3401 22.26 14.1901 21.77C13.0401 21.28 11.8901 20.62 10.7501 19.79C10.3601 19.5 9.9701 19.21 9.6001 18.9L12.8701 15.63C13.1501 15.84 13.4001 16 13.6101 16.11C13.6601 16.13 13.7201 16.16 13.7901 16.19C13.8701 16.22 13.9501 16.23 14.0401 16.23C14.2101 16.23 14.3401 16.17 14.4501 16.06L15.2101 15.31C15.4601 15.06 15.7001 14.87 15.9301 14.75C16.1601 14.61 16.3901 14.54 16.6401 14.54C16.8301 14.54 17.0301 14.58 17.2501 14.67C17.4701 14.76 17.7001 14.89 17.9501 15.06L21.2601 17.41C21.5201 17.59 21.7001 17.8 21.8101 18.05C21.9101 18.3 21.9701 18.55 21.9701 18.83Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="font-Inter font-medium text-xs md:text-sm text-white">
                    +012-345-6789
                  </p>
                </a>
                <a
                  href="mailto:companymail@gmail.com"
                  className="flex items-center gap-3"
                >
                  <button type="">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                        fill="white"
                      />
                      <path
                        d="M11.9991 13.3719C11.1591 13.3719 10.3091 13.1119 9.65907 12.5819L6.52907 10.0819C6.38352 9.95554 6.29238 9.77785 6.27466 9.58591C6.25693 9.39396 6.31399 9.20259 6.43393 9.05169C6.55388 8.90079 6.72745 8.80202 6.91844 8.77598C7.10944 8.74994 7.30311 8.79864 7.45907 8.91192L10.5891 11.4119C11.3491 12.0219 12.6391 12.0219 13.3991 11.4119L16.5291 8.91192C16.8491 8.65192 17.3291 8.70192 17.5791 9.03192C17.8391 9.35192 17.7891 9.83192 17.4591 10.0819L14.3291 12.5819C13.6891 13.1119 12.8391 13.3719 11.9991 13.3719Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <p className="font-Inter font-medium text-xs md:text-sm text-white">
                    companymail@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="col-span-12   lsm:col-span-6 md:col-span-6 lg:col-span-2">
              <h6 className="font-NotoSerif font-black text-xl text-white xl:text-right mb-10">
                Page Link
              </h6>
              <div className="space-y-4 xl:text-right">
                {footerData.map(({ id, title, path }) => (
                  <Link
                  key={id}
                    to={path}
                    className="font-Inter block font-medium text-xs md:text-sm text-white hover:text-secondary_color transition-all duration-300"
                  >
                   {title}
                  </Link>
                ))}

               
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-5 mt-16 pb-5">
            <div className="flex items-center justify-center gap-6">
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7501 10.0002C19.7453 12.3823 18.871 14.6807 17.2916 16.4638C15.7121 18.247 13.536 19.3922 11.172 19.6846C11.1192 19.6898 11.066 19.684 11.0155 19.6676C10.9651 19.6512 10.9186 19.6245 10.879 19.5893C10.8394 19.5541 10.8075 19.5111 10.7853 19.4629C10.7631 19.4148 10.7511 19.3626 10.7501 19.3096V12.2502H13.0001C13.1027 12.2504 13.2042 12.2296 13.2984 12.189C13.3926 12.1484 13.4774 12.0889 13.5477 12.0142C13.618 11.9395 13.6722 11.8512 13.707 11.7548C13.7419 11.6583 13.7565 11.5557 13.7501 11.4533C13.7335 11.2594 13.644 11.079 13.4995 10.9485C13.3551 10.818 13.1666 10.7471 12.972 10.7502H10.7501V8.50021C10.7501 8.10238 10.9081 7.72085 11.1894 7.43955C11.4707 7.15824 11.8523 7.00021 12.2501 7.00021H13.7501C13.8527 7.00041 13.9542 6.97957 14.0484 6.93898C14.1426 6.89839 14.2274 6.83892 14.2977 6.76423C14.368 6.68954 14.4222 6.60123 14.457 6.50476C14.4919 6.40828 14.5065 6.30569 14.5001 6.20333C14.4835 6.0094 14.394 5.82898 14.2495 5.69848C14.1051 5.56798 13.9166 5.49712 13.722 5.50021H12.2501C11.4544 5.50021 10.6914 5.81628 10.1288 6.37889C9.56616 6.94149 9.25009 7.70456 9.25009 8.50021V10.7502H7.00009C6.89753 10.75 6.79602 10.7708 6.70183 10.8114C6.60763 10.852 6.52277 10.9115 6.45248 10.9862C6.38218 11.0609 6.32796 11.1492 6.29315 11.2457C6.25834 11.3421 6.24368 11.4447 6.25009 11.5471C6.26669 11.741 6.35622 11.9214 6.50064 12.0519C6.64506 12.1824 6.8336 12.2533 7.02822 12.2502H9.25009V19.3096C9.25036 19.3621 9.23957 19.4142 9.21842 19.4623C9.19727 19.5104 9.16625 19.5536 9.12735 19.5889C9.08845 19.6243 9.04256 19.6511 8.99264 19.6676C8.94272 19.684 8.8899 19.6898 8.83759 19.6846C3.88759 19.0846 0.0625933 14.7815 0.259468 9.63458C0.369984 7.09281 1.46964 4.69492 3.32372 2.95274C5.17779 1.21056 7.63941 0.262105 10.1831 0.309823C12.7269 0.35754 15.1512 1.39765 16.9386 3.20814C18.726 5.01863 19.735 7.45608 19.7501 10.0002Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0344 7.28446L20.2031 10.1063C19.6406 16.6595 14.1094 21.7501 7.50001 21.7501C6.14063 21.7501 5.01563 21.5345 4.16251 21.1126C3.47813 20.7657 3.19688 20.4001 3.12188 20.2876C3.05983 20.1933 3.01984 20.0863 3.0049 19.9744C2.98996 19.8626 3.00046 19.7488 3.0356 19.6416C3.07074 19.5344 3.12963 19.4364 3.20788 19.3551C3.28612 19.2738 3.3817 19.2112 3.48751 19.172C3.50626 19.1626 5.71876 18.3188 7.15313 16.697C6.26358 16.0636 5.48171 15.2912 4.83751 14.4095C3.55313 12.6657 2.19376 9.63759 3.00938 5.11884C3.03502 4.9845 3.09646 4.85958 3.18722 4.75727C3.27798 4.65496 3.39468 4.57906 3.52501 4.53759C3.65574 4.49478 3.79574 4.48875 3.92967 4.52017C4.0636 4.55159 4.18632 4.61923 4.28438 4.71571C4.31251 4.75321 7.43438 7.82821 11.25 8.82196V8.25009C11.2537 7.65544 11.3745 7.06735 11.6054 6.51938C11.8364 5.97141 12.173 5.4743 12.5961 5.05643C13.0192 4.63857 13.5205 4.30813 14.0713 4.08398C14.6221 3.85984 15.2116 3.74638 15.8063 3.75009C16.5867 3.76122 17.351 3.97432 18.0246 4.36863C18.6982 4.76294 19.2582 5.32502 19.65 6.00009H22.5C22.6481 5.99962 22.793 6.043 22.9164 6.12475C23.0399 6.2065 23.1364 6.32296 23.1938 6.45946C23.2478 6.598 23.2615 6.749 23.2333 6.895C23.2051 7.04099 23.1361 7.17602 23.0344 7.28446Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C10.3067 2.24987 8.64255 2.69074 7.17141 3.52921C5.70026 4.36768 4.47285 5.57483 3.61001 7.03182C2.74717 8.4888 2.27866 10.1454 2.25061 11.8385C2.22255 13.5315 2.63592 15.2027 3.45001 16.6875L2.65313 19.5C2.57879 19.7563 2.57462 20.0278 2.64103 20.2863C2.70745 20.5447 2.84203 20.7806 3.03072 20.9693C3.21941 21.158 3.45529 21.2926 3.71374 21.359C3.97219 21.4254 4.24373 21.4212 4.50001 21.3469L7.31251 20.55C8.6159 21.2644 10.0654 21.6713 11.5501 21.7397C13.0349 21.8081 14.5156 21.5361 15.8791 20.9445C17.2427 20.353 18.4529 19.4575 19.4174 18.3266C20.3818 17.1956 21.0749 15.8592 21.4437 14.4193C21.8125 12.9795 21.8473 11.4744 21.5453 10.0191C21.2433 8.56374 20.6126 7.19672 19.7014 6.02249C18.7901 4.84826 17.6225 3.8979 16.2877 3.24406C14.9529 2.59022 13.4863 2.25021 12 2.25ZM14.2594 18H14.25C12.0611 17.9975 9.96271 17.1262 8.41581 15.5776C6.8689 14.0289 6.00001 11.9295 6.00001 9.74063C6.00249 8.84715 6.35916 7.99111 6.99183 7.3602C7.6245 6.72929 8.48152 6.375 9.37501 6.375C9.62061 6.37554 9.86173 6.44082 10.0741 6.56426C10.2864 6.68771 10.4624 6.86495 10.5844 7.07812L11.6813 9C11.8137 9.23017 11.8819 9.49171 11.8786 9.75725C11.8753 10.0228 11.8006 10.2826 11.6625 10.5094L10.9969 11.625C11.3316 12.1941 11.8059 12.6684 12.375 13.0031L13.4906 12.3375C13.7174 12.1994 13.9772 12.1247 14.2428 12.1214C14.5083 12.1181 14.7698 12.1863 15 12.3187L16.9219 13.4156C17.1351 13.5376 17.3123 13.7136 17.4357 13.926C17.5592 14.1383 17.6245 14.3794 17.625 14.625C17.625 15.5185 17.2707 16.3755 16.6398 17.0082C16.0089 17.6408 15.1529 17.9975 14.2594 18Z"
                    fill="white"
                  />
                  <path
                    d="M12.7969 14.5031C12.6926 14.5641 12.5752 14.5993 12.4545 14.6059C12.3339 14.6124 12.2134 14.59 12.1031 14.5406C10.9242 14.0181 9.98188 13.0758 9.45938 11.8969C9.40998 11.7866 9.38762 11.6661 9.39414 11.5455C9.40066 11.4248 9.43588 11.3074 9.49688 11.2031L10.3781 9.74063L9.31876 7.875C8.83213 7.88723 8.36956 8.08917 8.02976 8.43773C7.68996 8.78628 7.49985 9.25385 7.50001 9.74063C7.49877 10.6278 7.67246 11.5066 8.01113 12.3266C8.34979 13.1466 8.8468 13.8919 9.47372 14.5197C10.1006 15.1474 10.8452 15.6455 11.6647 15.9853C12.4843 16.3251 13.3628 16.5 14.25 16.5H14.2594C14.7462 16.5002 15.2137 16.31 15.5623 15.9702C15.9108 15.6304 16.1128 15.1679 16.125 14.6813L14.2594 13.6219L12.7969 14.5031Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="white"
                  />
                  <path
                    d="M16.125 2.625H7.875C6.48261 2.625 5.14726 3.17812 4.16269 4.16269C3.17812 5.14726 2.625 6.48261 2.625 7.875V16.125C2.625 17.5174 3.17812 18.8527 4.16269 19.8373C5.14726 20.8219 6.48261 21.375 7.875 21.375H16.125C17.5174 21.375 18.8527 20.8219 19.8373 19.8373C20.8219 18.8527 21.375 17.5174 21.375 16.125V7.875C21.375 6.48261 20.8219 5.14726 19.8373 4.16269C18.8527 3.17812 17.5174 2.625 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <p className="font-Inter font-medium text-xs text-light_gray text-center">
              Copyright 2023,all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
