import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-1.webp";
import { navbarData } from "../../data/navigation/navbarData";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 4000);
    } else {
      setShouldAnimate(false);
    }
  }, [isMenuOpen]);

  // const handleMenuToggle = () => {
  //   setMenuOpen(true);
  //   document.body.classList.add("overflow-hidden");
  // };

  // const handleCloseMenu = () => {
  //   setMenuOpen(false);
  //   document.body.classList.remove("overflow-hidden");
  // };

  return (
    <>
      <header className="h-20 w-full fixed top-0 z-40  backdrop hidden shadow-xl md:block">
        <div className="container h-full">
          <div className="h-full w-full flex items-center justify-between">
            <div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="element-wrapper">
                {isMenuOpen && (
                  <div
                    className={`transition-all duration-500 ease-in ${
                      // shouldAnimate ? ' animate-navbar-items' : ''
                      shouldAnimate ? " transitionDelay" : ""
                    }`}
                  >
                    {navbarData.map(({ id, title, path }, index) => (
                      <Link
                        key={id}
                        className="element navlink font-Inter font-medium text-base text-white px-2"
                        style={{ transitionDelay: `${(index + 1) * 1000}ms` }}
                        to={path}
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {isMenuOpen ? (
                <button
                  id="removeActiveBtn"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="bg-[#C9C9C933]/20 p-[10px] rounded transition-all duration-900 ease-in"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  id="addClassBtn"
                  className="bg-[#C9C9C933]/20 p-[10px] rounded"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 6H20.25"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.75 12H20.25"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.75 18H13.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* For Mobile start  */}
      <header className="py-2 md:py-4 w-full fixed left-0 top-0 z-40  backdrop md:hidden">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* <!-- mobile screen overlay --> */}
            {/* <div className="mobile-overlay transition-all ease-linear duration-500 h-screen w-full bg-black/30 fixed inset-0 opacity-0 invisible z-40 md:hidden"></div> */}

            <div>
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="menu-toggle bg-[#C9C9C933]/20 p-2 rounded"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 12H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 18H13.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* <!-- Mobile menu  --> */}
              {isMenuOpen && (
                // <div className="mobile-menu transition-all ease-linear duration-500 h-screen lg:h-auto w-[241px] lg:w-auto bg-csk lg:bg-transparent fixed z-50 lg:static top-0 p-4 lg:p-0 overflow-y-auto md:overscroll-none shadow lg:shadow-none">
                <div
                  className={`transition-all ease-linear duration-500 h-screen lg:h-auto w-[241px] lg:w-auto bg-csk lg:bg-transparent fixed z-50 lg:static top-0 p-4 lg:p-0 overflow-y-auto md:overscroll-none shadow lg:shadow-none mobile-menu ${isMenuOpen && "show"}`}
                >
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="close-menu bg-[#283A3D] p-1 rounded flex items-center justify-center absolute right-3 mt-[14px] mr-2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 5.99976L17.6673 17.667"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18.0002L17.6673 6.33298"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <ul className="flex flex-col items-center pt-[150px] gap-6">
                    {navbarData.map(({ id, title, path }) => (
                      <li key={id} className="relative">
                        <Link
                          to={path}
                          className="font-Inter font-medium text-base text-light_gray p-[10px]"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col mt-[290px]">
                    <div className="flex items-center justify-center gap-4">
                      <span>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6252 10.0001C18.6212 11.9852 17.8927 13.9005 16.5764 15.3864C15.2602 16.8724 13.4468 17.8268 11.4768 18.0704C11.4328 18.0747 11.3884 18.0699 11.3464 18.0562C11.3044 18.0426 11.2657 18.0204 11.2326 17.991C11.1996 17.9617 11.173 17.9258 11.1545 17.8857C11.1361 17.8456 11.1261 17.8021 11.1252 17.7579V11.8751H13.0002C13.0857 11.8753 13.1703 11.8579 13.2488 11.8241C13.3272 11.7902 13.398 11.7407 13.4565 11.6784C13.5151 11.6162 13.5603 11.5426 13.5893 11.4622C13.6183 11.3818 13.6305 11.2963 13.6252 11.211C13.6114 11.0494 13.5368 10.8991 13.4164 10.7903C13.2961 10.6816 13.1389 10.6225 12.9768 10.6251H11.1252V8.75009C11.1252 8.41857 11.2569 8.10063 11.4913 7.86621C11.7257 7.63179 12.0437 7.50009 12.3752 7.50009H13.6252C13.7107 7.50026 13.7953 7.48289 13.8738 7.44907C13.9522 7.41525 14.023 7.36568 14.0815 7.30344C14.1401 7.2412 14.1853 7.16761 14.2143 7.08722C14.2433 7.00682 14.2555 6.92133 14.2502 6.83603C14.2364 6.67442 14.1618 6.52406 14.0414 6.41532C13.9211 6.30657 13.7639 6.24752 13.6018 6.25009H12.3752C11.7122 6.25009 11.0763 6.51348 10.6074 6.98232C10.1386 7.45116 9.8752 8.08705 9.8752 8.75009V10.6251H8.0002C7.91473 10.6249 7.83013 10.6423 7.75164 10.6761C7.67315 10.7099 7.60243 10.7595 7.54385 10.8217C7.48527 10.884 7.44009 10.9576 7.41108 11.038C7.38207 11.1184 7.36986 11.2038 7.3752 11.2892C7.38903 11.4508 7.46364 11.6011 7.58399 11.7099C7.70434 11.8186 7.86146 11.8777 8.02364 11.8751H9.8752V17.7579C9.87542 17.8017 9.86643 17.8451 9.84881 17.8852C9.83118 17.9253 9.80533 17.9612 9.77291 17.9907C9.7405 18.0202 9.70225 18.0425 9.66065 18.0562C9.61906 18.07 9.57504 18.0748 9.53145 18.0704C5.40645 17.5704 2.21895 13.9845 2.38301 9.6954C2.47511 7.57726 3.39149 5.57902 4.93655 4.1272C6.48162 2.67539 8.53297 1.88501 10.6527 1.92477C12.7725 1.96454 14.7928 2.8313 16.2823 4.34004C17.7718 5.84878 18.6126 7.87999 18.6252 10.0001Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.696 6.07039L17.3366 8.42195C16.8679 13.8829 12.2585 18.1251 6.7507 18.1251C5.61788 18.1251 4.68038 17.9454 3.96945 17.5938C3.39913 17.3048 3.16476 17.0001 3.10226 16.9063C3.05055 16.8278 3.01723 16.7386 3.00478 16.6454C2.99233 16.5522 3.00107 16.4573 3.03036 16.368C3.05964 16.2786 3.10872 16.197 3.17392 16.1293C3.23912 16.0615 3.31878 16.0093 3.40695 15.9766C3.42257 15.9688 5.26632 15.2657 6.46163 13.9141C5.72034 13.3863 5.06878 12.7427 4.53195 12.0079C3.46163 10.5548 2.32882 8.03132 3.00851 4.2657C3.02988 4.15375 3.08108 4.04965 3.15671 3.96439C3.23234 3.87913 3.32959 3.81589 3.4382 3.78132C3.54714 3.74565 3.66381 3.74063 3.77542 3.76681C3.88703 3.79299 3.98929 3.84936 4.07101 3.92976C4.09445 3.96101 6.69601 6.52351 9.8757 7.35164V6.87507C9.87876 6.37954 9.97941 5.88945 10.1719 5.43281C10.3644 4.97617 10.6449 4.56191 10.9975 4.21369C11.35 3.86547 11.7677 3.59011 12.2267 3.40332C12.6857 3.21653 13.177 3.12199 13.6726 3.12507C14.323 3.13435 14.9598 3.31193 15.5212 3.64053C16.0825 3.96912 16.5492 4.43751 16.8757 5.00007H19.2507C19.3741 4.99969 19.4948 5.03583 19.5977 5.10396C19.7006 5.17208 19.781 5.26913 19.8288 5.38289C19.8738 5.49833 19.8853 5.62416 19.8618 5.74583C19.8383 5.86749 19.7808 5.98002 19.696 6.07039Z"
                            fill="white"
                          />
                        </svg>
                      </span>

                      <span>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5006 1.875C9.08953 1.87489 7.70274 2.24229 6.47678 2.94101C5.25083 3.63973 4.22798 4.64569 3.50895 5.85985C2.78992 7.074 2.3995 8.45448 2.37612 9.86538C2.35274 11.2763 2.69721 12.6689 3.37562 13.9062L2.71155 16.25C2.64961 16.4636 2.64612 16.6899 2.70147 16.9052C2.75682 17.1206 2.86897 17.3172 3.02621 17.4744C3.18345 17.6316 3.38002 17.7438 3.59539 17.7991C3.81077 17.8545 4.03705 17.851 4.25062 17.7891L6.59437 17.125C7.68053 17.7203 8.88842 18.0594 10.1257 18.1164C11.363 18.1734 12.5969 17.9467 13.7332 17.4538C14.8695 16.9608 15.878 16.2146 16.6817 15.2721C17.4854 14.3297 18.063 13.216 18.3704 12.0161C18.6777 10.8162 18.7067 9.56199 18.455 8.34922C18.2034 7.13645 17.6778 5.99727 16.9184 5.01874C16.1591 4.04022 15.186 3.24825 14.0737 2.70339C12.9614 2.15852 11.7392 1.87517 10.5006 1.875ZM12.3834 15H12.3756C10.5515 14.9979 8.80287 14.2719 7.51378 12.9813C6.22469 11.6908 5.50062 9.94127 5.50062 8.11719C5.50269 7.37262 5.79991 6.65926 6.32714 6.1335C6.85436 5.60774 7.56855 5.3125 8.31312 5.3125C8.51779 5.31295 8.71872 5.36735 8.89566 5.47022C9.07259 5.57309 9.21928 5.72079 9.32093 5.89844L10.235 7.5C10.3454 7.69181 10.4022 7.90976 10.3994 8.13105C10.3967 8.35233 10.3345 8.56881 10.2194 8.75781L9.66468 9.6875C9.94358 10.1618 10.3389 10.557 10.8131 10.8359L11.7428 10.2812C11.9318 10.1661 12.1483 10.1039 12.3696 10.1012C12.5909 10.0984 12.8088 10.1552 13.0006 10.2656L14.6022 11.1797C14.7798 11.2813 14.9275 11.428 15.0304 11.605C15.1333 11.7819 15.1877 11.9828 15.1881 12.1875C15.1881 12.9321 14.8929 13.6463 14.3671 14.1735C13.8414 14.7007 13.128 14.9979 12.3834 15Z"
                            fill="white"
                          />
                          <path
                            d="M11.1641 12.0859C11.0771 12.1368 10.9793 12.1661 10.8788 12.1716C10.7782 12.177 10.6778 12.1584 10.5859 12.1172C9.60354 11.6818 8.81824 10.8965 8.38282 9.91406C8.34165 9.82216 8.32301 9.72177 8.32845 9.62122C8.33388 9.52067 8.36324 9.42286 8.41407 9.33594L9.14844 8.11719L8.26563 6.5625C7.86011 6.57269 7.47463 6.74098 7.19147 7.03144C6.9083 7.3219 6.74988 7.71154 6.75001 8.11719C6.74898 8.85653 6.89372 9.58882 7.17594 10.2722C7.45816 10.9555 7.87233 11.5766 8.39477 12.0997C8.9172 12.6229 9.53764 13.0379 10.2206 13.3211C10.9036 13.6042 11.6357 13.75 12.375 13.75H12.3828C12.7885 13.7501 13.1781 13.5917 13.4686 13.3085C13.759 13.0254 13.9273 12.6399 13.9375 12.2344L12.3828 11.3516L11.1641 12.0859Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5Z"
                            fill="white"
                          />
                          <path
                            d="M13.9375 2.1875H7.0625C5.90218 2.1875 4.78938 2.64844 3.96891 3.46891C3.14844 4.28938 2.6875 5.40218 2.6875 6.5625V13.4375C2.6875 14.5978 3.14844 15.7106 3.96891 16.5311C4.78938 17.3516 5.90218 17.8125 7.0625 17.8125H13.9375C15.0978 17.8125 16.2106 17.3516 17.0311 16.5311C17.8516 15.7106 18.3125 14.5978 18.3125 13.4375V6.5625C18.3125 5.40218 17.8516 4.28938 17.0311 3.46891C16.2106 2.64844 15.0978 2.1875 13.9375 2.1875ZM10.5 13.75C9.75832 13.75 9.0333 13.5301 8.41661 13.118C7.79993 12.706 7.31928 12.1203 7.03545 11.4351C6.75162 10.7498 6.67736 9.99584 6.82206 9.26841C6.96675 8.54098 7.3239 7.8728 7.84835 7.34835C8.3728 6.8239 9.04098 6.46675 9.76841 6.32206C10.4958 6.17736 11.2498 6.25162 11.9351 6.53545C12.6203 6.81928 13.206 7.29993 13.618 7.91661C14.0301 8.5333 14.25 9.25832 14.25 10C14.25 10.9946 13.8549 11.9484 13.1517 12.6517C12.4484 13.3549 11.4946 13.75 10.5 13.75ZM14.5625 6.875C14.3771 6.875 14.1958 6.82002 14.0417 6.717C13.8875 6.61399 13.7673 6.46757 13.6964 6.29627C13.6254 6.12496 13.6068 5.93646 13.643 5.7546C13.6792 5.57275 13.7685 5.4057 13.8996 5.27459C14.0307 5.14348 14.1977 5.05419 14.3796 5.01801C14.5615 4.98184 14.75 5.00041 14.9213 5.07136C15.0926 5.14232 15.239 5.26248 15.342 5.41665C15.445 5.57082 15.5 5.75208 15.5 5.9375C15.5 6.18614 15.4012 6.4246 15.2254 6.60041C15.0496 6.77623 14.8111 6.875 14.5625 6.875Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="font-Inter text-xs text-light_gray opacity-60 text-center pt-4">
                      Copyright 2023,all rights reserved.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
