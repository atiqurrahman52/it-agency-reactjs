// import { workFlowData } from "../../data/home/workFlowData";


const WorkFlow = () => {
    return (
        <div className="container">
        <div className="py-16">
          <h5 className="font-Inter font-medium text-sm md:text-base text-secondary_color text-center mb-2">Work flow</h5>
          <h4 className="font-NotoSerif font-extrabold text-2xl md:text-[32px] text-black_color text-center mb-16">Process we
            follow</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {/* {
                workFlowData.map(({id,icon,title}) => (
                    <div key={id} className="flex flex-col justify-center items-center relative">
              <span className="p-4 bg-white rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-8">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.075 22.125C11.9511 22.0819 11.8199 22.064 11.689 22.0722C11.5582 22.0804 11.4302 22.1146 11.3127 22.1727C11.1952 22.2309 11.0904 22.3119 11.0045 22.411C10.9187 22.5101 10.8534 22.6254 10.8125 22.75C9.9875 25.2125 7.325 25.975 5.7875 26.2125C6.025 24.675 6.7875 22.0125 9.25 21.1875C9.38484 21.1548 9.5114 21.0944 9.62165 21.0102C9.73189 20.926 9.8234 20.8198 9.89037 20.6983C9.95733 20.5767 9.99828 20.4426 10.0106 20.3045C10.0229 20.1663 10.0064 20.027 9.96199 19.8956C9.9176 19.7641 9.84634 19.6434 9.75275 19.541C9.65916 19.4386 9.54528 19.3567 9.41836 19.3007C9.29143 19.2447 9.15424 19.2157 9.01551 19.2156C8.87677 19.2154 8.73953 19.2442 8.6125 19.3C6.5625 19.975 5.0625 21.6 4.2625 23.9875C3.90803 25.0614 3.71427 26.1819 3.6875 27.3125C3.6875 27.5777 3.79286 27.832 3.98039 28.0196C4.16793 28.2071 4.42228 28.3125 4.6875 28.3125C5.81811 28.2857 6.93856 28.0919 8.0125 27.7375C10.4 26.9375 12.025 25.4375 12.7 23.3875C12.7431 23.2636 12.761 23.1324 12.7528 23.0015C12.7446 22.8706 12.7104 22.7427 12.6522 22.6252C12.594 22.5076 12.513 22.4029 12.4139 22.317C12.3148 22.2311 12.1996 22.1658 12.075 22.125Z"
                    fill="#005564" />
                  <path
                    d="M28.45 5.22505C28.3914 4.8015 28.1961 4.40868 27.8937 4.10633C27.5914 3.80398 27.1985 3.60865 26.775 3.55005C25.3625 3.33755 21.7 3.23755 18.125 6.81255L17 7.92505H9.3375C8.80796 7.92866 8.3009 8.13956 7.925 8.51255L3.8875 12.5625C3.63148 12.8172 3.44966 13.1367 3.36157 13.4869C3.27348 13.837 3.28244 14.2046 3.3875 14.55C3.49174 14.898 3.68876 15.211 3.95743 15.4554C4.2261 15.6999 4.55627 15.8666 4.9125 15.9375L9.85 16.925L15.075 22.15L16.0625 27.0875C16.1335 27.4438 16.3002 27.7739 16.5446 28.0426C16.789 28.3113 17.102 28.5083 17.45 28.6125C17.6358 28.6721 17.8299 28.7016 18.025 28.7C18.2879 28.7024 18.5485 28.6516 18.7913 28.5506C19.034 28.4496 19.2538 28.3006 19.4375 28.1125L23.4875 24.075C23.8605 23.6991 24.0714 23.1921 24.075 22.6625V15L25.1875 13.875C28.7625 10.3 28.6625 6.63755 28.45 5.22505ZM9.3375 9.92505H15L10.0125 14.9125L5.3 13.975L9.3375 9.92505ZM22.075 22.6625L18.025 26.7L17.0875 21.9875L22.075 17V22.6625Z"
                    fill="#005564" />
                </svg>
  
              </span>
              <h6 className="font-NotoSerif font-black text-xl text-[#08192B] mb-3">Ideate</h6>
              <span className="font-Inter font-bold text-base text-secondary_color mb-3">01.</span>
              <p className="font-SpaceGrotesk text-base text-black/60 text-center">
                Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.
              </p>
              <div className="xl:block hidden absolute top-9 -right-[35%]">
  
                <svg className="myLine" width="152" height="22" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path   d="M1 14.7031C1 14.7031 32.5273 31.7875 65.7841 9.6746C99.0408 -12.4383 151 14.7031 151 14.7031"
                    stroke="#D4E5F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="4 8" />
                </svg>
  
              </div>
            </div>
                ))
            } */}
             <div className="flex flex-col justify-center items-center relative">
            <span className="p-4 bg-white rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.075 22.125C11.9511 22.0819 11.8199 22.064 11.689 22.0722C11.5582 22.0804 11.4302 22.1146 11.3127 22.1727C11.1952 22.2309 11.0904 22.3119 11.0045 22.411C10.9187 22.5101 10.8534 22.6254 10.8125 22.75C9.9875 25.2125 7.325 25.975 5.7875 26.2125C6.025 24.675 6.7875 22.0125 9.25 21.1875C9.38484 21.1548 9.5114 21.0944 9.62165 21.0102C9.73189 20.926 9.8234 20.8198 9.89037 20.6983C9.95733 20.5767 9.99828 20.4426 10.0106 20.3045C10.0229 20.1663 10.0064 20.027 9.96199 19.8956C9.9176 19.7641 9.84634 19.6434 9.75275 19.541C9.65916 19.4386 9.54528 19.3567 9.41836 19.3007C9.29143 19.2447 9.15424 19.2157 9.01551 19.2156C8.87677 19.2154 8.73953 19.2442 8.6125 19.3C6.5625 19.975 5.0625 21.6 4.2625 23.9875C3.90803 25.0614 3.71427 26.1819 3.6875 27.3125C3.6875 27.5777 3.79286 27.832 3.98039 28.0196C4.16793 28.2071 4.42228 28.3125 4.6875 28.3125C5.81811 28.2857 6.93856 28.0919 8.0125 27.7375C10.4 26.9375 12.025 25.4375 12.7 23.3875C12.7431 23.2636 12.761 23.1324 12.7528 23.0015C12.7446 22.8706 12.7104 22.7427 12.6522 22.6252C12.594 22.5076 12.513 22.4029 12.4139 22.317C12.3148 22.2311 12.1996 22.1658 12.075 22.125Z"
                  fill="#005564" />
                <path
                  d="M28.45 5.22505C28.3914 4.8015 28.1961 4.40868 27.8937 4.10633C27.5914 3.80398 27.1985 3.60865 26.775 3.55005C25.3625 3.33755 21.7 3.23755 18.125 6.81255L17 7.92505H9.3375C8.80796 7.92866 8.3009 8.13956 7.925 8.51255L3.8875 12.5625C3.63148 12.8172 3.44966 13.1367 3.36157 13.4869C3.27348 13.837 3.28244 14.2046 3.3875 14.55C3.49174 14.898 3.68876 15.211 3.95743 15.4554C4.2261 15.6999 4.55627 15.8666 4.9125 15.9375L9.85 16.925L15.075 22.15L16.0625 27.0875C16.1335 27.4438 16.3002 27.7739 16.5446 28.0426C16.789 28.3113 17.102 28.5083 17.45 28.6125C17.6358 28.6721 17.8299 28.7016 18.025 28.7C18.2879 28.7024 18.5485 28.6516 18.7913 28.5506C19.034 28.4496 19.2538 28.3006 19.4375 28.1125L23.4875 24.075C23.8605 23.6991 24.0714 23.1921 24.075 22.6625V15L25.1875 13.875C28.7625 10.3 28.6625 6.63755 28.45 5.22505ZM9.3375 9.92505H15L10.0125 14.9125L5.3 13.975L9.3375 9.92505ZM22.075 22.6625L18.025 26.7L17.0875 21.9875L22.075 17V22.6625Z"
                  fill="#005564" />
              </svg>

            </span>
            <h6 className="font-NotoSerif font-black text-xl text-[#08192B] mb-3">Ideate</h6>
            <span className="font-Inter font-bold text-base text-secondary_color mb-3">01.</span>
            <p className="font-SpaceGrotesk text-base text-black/60 text-center">
              Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.
            </p>
            <div className="xl:block hidden absolute top-9 -right-[35%]">

              <svg className="myLine" width="152" height="22" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path   d="M1 14.7031C1 14.7031 32.5273 31.7875 65.7841 9.6746C99.0408 -12.4383 151 14.7031 151 14.7031"
                  stroke="#D4E5F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="4 8" />
              </svg>

            </div>
          </div>
  
            <div className="flex flex-col justify-center items-center relative">
              <span className="p-4  bg-white rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-8">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.4001 9.92501C26.2808 9.98127 26.1737 10.0606 26.0852 10.1584C25.9967 10.2562 25.9283 10.3706 25.8842 10.4949C25.84 10.6192 25.8209 10.751 25.8279 10.8828C25.835 11.0145 25.868 11.1436 25.9251 11.2625C27.0942 13.7102 27.3177 16.5036 26.5526 19.1061C25.7875 21.7086 24.0877 23.9366 21.7799 25.3621C19.472 26.7876 16.7188 27.3101 14.0492 26.8293C11.3796 26.3484 8.98173 24.898 7.31635 22.7568C5.65097 20.6156 4.83548 17.9346 5.02654 15.2287C5.21761 12.5228 6.40174 9.98295 8.35148 8.09701C10.3012 6.21107 12.8791 5.11206 15.5898 5.0111C18.3005 4.91013 20.953 5.81433 23.0376 7.55001L20.1876 10.4C18.7698 9.35462 17.0099 8.88223 15.2592 9.07709C13.5084 9.27195 11.8955 10.1197 10.7422 11.4513C9.58895 12.7828 8.98011 14.5003 9.03717 16.2609C9.09424 18.0215 9.81302 19.6959 11.0501 20.95C12.0533 21.9528 13.3374 22.6272 14.7324 22.8839C16.1274 23.1405 17.5675 22.9673 18.8618 22.3872C20.1562 21.8071 21.2438 20.8475 21.9806 19.6355C22.7174 18.4234 23.0685 17.0161 22.9876 15.6C22.9812 15.4692 22.9489 15.3409 22.8925 15.2226C22.8361 15.1044 22.7567 14.9986 22.659 14.9113C22.5612 14.8241 22.4471 14.7572 22.3233 14.7144C22.1994 14.6717 22.0683 14.6541 21.9376 14.6625C21.8062 14.6689 21.6774 14.7012 21.5585 14.7574C21.4396 14.8137 21.333 14.8929 21.2448 14.9904C21.1565 15.0879 21.0884 15.2019 21.0443 15.3258C21.0001 15.4498 20.9809 15.5811 20.9876 15.7125C21.0419 16.6392 20.8371 17.5628 20.3962 18.3797C19.9553 19.1966 19.2956 19.8746 18.4911 20.3379C17.6867 20.8011 16.7691 21.0312 15.8413 21.0024C14.9134 20.9737 14.0119 20.6872 13.2376 20.175L16.2376 17.175L20.9501 12.4625L28.7126 4.71251C28.8721 4.51821 28.9536 4.27155 28.9412 4.0205C28.9289 3.76944 28.8236 3.53195 28.6459 3.35422C28.4682 3.17648 28.2307 3.07121 27.9796 3.05888C27.7286 3.04655 27.4819 3.12805 27.2876 3.28751L24.4626 6.12501C21.9749 3.99554 18.7751 2.88338 15.5029 3.01084C12.2307 3.13829 9.12717 4.49598 6.81261 6.81251C5.60393 8.01782 4.64496 9.44977 3.99064 11.0263C3.33632 12.6029 2.99951 14.2931 2.99951 16C2.99951 17.707 3.33632 19.3971 3.99064 20.9737C4.64496 22.5502 5.60393 23.9822 6.81261 25.1875C8.01792 26.3962 9.44987 27.3552 11.0264 28.0095C12.603 28.6638 14.2932 29.0006 16.0001 29.0006C17.7071 29.0006 19.3972 28.6638 20.9738 28.0095C22.5503 27.3552 23.9823 26.3962 25.1876 25.1875C27.0889 23.2885 28.3549 20.847 28.8116 18.1988C29.2682 15.5507 28.893 12.8261 27.7376 10.4C27.6814 10.2807 27.602 10.1736 27.5042 10.0851C27.4064 9.99655 27.2921 9.92823 27.1677 9.88408C27.0434 9.83993 26.9116 9.82081 26.7798 9.82784C26.6481 9.83486 26.519 9.86789 26.4001 9.92501Z"
                    fill="#005766" />
                </svg>
  
  
              </span>
              <h6 className="font-NotoSerif font-black text-xl text-[#08192B] mb-3">Fixing Target</h6>
              <span className="font-Inter font-bold text-base text-secondary_color mb-3">02.</span>
              <p className="font-SpaceGrotesk text-base text-black/60 text-center">
                Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.
              </p>
              <div className="xl:block hidden absolute top-9 -right-[45%]">
  
                <svg className="myLine" width="152" height="22" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 14.7031C1 14.7031 32.5273 31.7875 65.7841 9.6746C99.0408 -12.4383 151 14.7031 151 14.7031"
                    stroke="#D4E5F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="4 8" />
                </svg>
  
              </div>
            </div>
  
  
            <div className="flex flex-col justify-center items-center relative">
              <span className="p-4  bg-white rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-8">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M30.6914 14.6328L30.691 14.6332L26.1916 19.6326C26.1915 19.6327 26.1914 19.6328 26.1913 19.6329C26.103 19.7282 25.9962 19.8045 25.8773 19.8568C25.7583 19.9093 25.6299 19.9367 25.5 19.9375C25.4999 19.9375 25.4997 19.9375 25.4996 19.9375L17 19.9375H16.9375V20V28C16.9375 28.2486 16.8387 28.4871 16.6629 28.6629C16.4871 28.8387 16.2486 28.9375 16 28.9375C15.7514 28.9375 15.5129 28.8387 15.3371 28.6629C15.1613 28.4871 15.0625 28.2486 15.0625 28V20V19.9375H15H5C4.48614 19.9375 3.99333 19.7334 3.62998 19.37C3.26663 19.0067 3.0625 18.5139 3.0625 18V10C3.0625 9.48614 3.26663 8.99333 3.62998 8.62998C3.99333 8.26663 4.48614 8.0625 5 8.0625H15H15.0625V8V4C15.0625 3.75136 15.1613 3.5129 15.3371 3.33709C15.5129 3.16127 15.7514 3.0625 16 3.0625C16.2486 3.0625 16.4871 3.16127 16.6629 3.33709C16.8387 3.5129 16.9375 3.75136 16.9375 4V8V8.0625H17H25.4998C25.6298 8.06327 25.7583 8.09072 25.8773 8.14315C25.9962 8.19555 26.1031 8.27178 26.1913 8.36713C26.1914 8.36723 26.1915 8.36733 26.1916 8.36744L30.691 13.3668L30.6914 13.3672C30.8495 13.54 30.9372 13.7658 30.9372 14C30.9372 14.2342 30.8495 14.46 30.6914 14.6328Z"
                    fill="#005564" stroke="#005564" strokeWidth="0.125" />
                </svg>
              </span>
              <h6 className="font-NotoSerif font-black text-xl text-[#08192B] mb-3">Work on it</h6>
              <span className="font-Inter font-bold text-base text-secondary_color mb-3">03.</span>
              <p className="font-SpaceGrotesk text-base text-black/60 text-center">
                Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.
              </p>
  
            </div>
  
  
          </div>
        </div>
  
      </div>
    );
};

export default WorkFlow;