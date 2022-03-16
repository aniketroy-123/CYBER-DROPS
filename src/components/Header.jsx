import React from "react";
import { useScreenFixedProvider } from "../contexts/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import { headerData } from "./common/data";
import logo from "../assets/images/logo.png";
import BlurImg1 from ".././assets/png/nav-top-blur-img.png";

const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-between py-sm-2 position-relative">
        <Desktop>
          <div className="container d-flex justify-content-between container-modify z-index-1">
            <div>
              <img className="cursor-pointer" src={logo} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              {headerData.map((item, index) => (
                <span key={index}>
                  <li
                    className={`mx-3 nav-list-items p-1 d-inline-block ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <a href={`#${item.url}`}>{item.title}</a>
                  </li>
                </span>
              ))}
              <div>
                <ul className="list-unstyled d-flex align-items-center mb-0 ms-4">
                  <li className="svg-icons">
                    <a
                      className="header-svg-hover"
                      href="http://www.opensea.com/"
                      target="_blank"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_155_383)">
                          <path
                            d="M9.375 0C4.19844 0 0 4.19844 0 9.375C0 14.5516 4.19844 18.75 9.375 18.75C14.5516 18.75 18.75 14.5516 18.75 9.375C18.75 4.19844 14.5539 0 9.375 0ZM4.625 9.68984L4.66484 9.62656L7.10469 5.81094C7.11286 5.7984 7.12425 5.78828 7.13767 5.78164C7.15109 5.775 7.16604 5.77209 7.18097 5.77321C7.1959 5.77433 7.21025 5.77943 7.22253 5.78799C7.23481 5.79655 7.24457 5.80826 7.25078 5.82188C7.65703 6.73516 8.01016 7.87109 7.84453 8.57812C7.77578 8.86875 7.58281 9.2625 7.36484 9.62656C7.33688 9.67982 7.30638 9.7317 7.27344 9.78203C7.26555 9.79326 7.25499 9.80235 7.24272 9.80848C7.23045 9.81462 7.21684 9.81761 7.20312 9.81719H4.69766C4.6827 9.81742 4.66796 9.8136 4.65501 9.80612C4.64205 9.79865 4.63136 9.78781 4.62407 9.77475C4.61678 9.76169 4.61316 9.7469 4.6136 9.73195C4.61404 9.717 4.61852 9.70245 4.62656 9.68984H4.625ZM15.4953 11.0023C15.4955 11.019 15.4908 11.0354 15.4818 11.0494C15.4727 11.0635 15.4598 11.0745 15.4445 11.0813C15.2547 11.1617 14.6086 11.4602 14.3398 11.8328C13.6539 12.7875 13.1305 14.1531 11.9586 14.1531H7.07266C6.66013 14.1525 6.25177 14.0706 5.8709 13.9121C5.49004 13.7536 5.14415 13.5216 4.85299 13.2293C4.56184 12.9371 4.33112 12.5903 4.17404 12.2089C4.01695 11.8274 3.93658 11.4188 3.9375 11.0063V10.95C3.9375 10.9047 3.975 10.8672 4.02187 10.8672H6.74453C6.79922 10.8672 6.83828 10.9164 6.83437 10.9703C6.81406 11.1469 6.84766 11.3289 6.93203 11.4937C7.09297 11.8219 7.42891 12.0266 7.79063 12.0266H9.13906V10.9742H7.80469C7.78905 10.9741 7.77376 10.9696 7.76045 10.9614C7.74715 10.9532 7.73633 10.9415 7.72918 10.9276C7.72203 10.9137 7.7188 10.8981 7.71986 10.8825C7.72091 10.8669 7.7262 10.8519 7.73516 10.8391L7.78437 10.7688C7.90937 10.5883 8.08984 10.3109 8.26953 9.99375C8.39141 9.77969 8.51016 9.55156 8.60547 9.32188C8.62422 9.28125 8.63906 9.23828 8.65625 9.19688C8.68203 9.12344 8.70859 9.05469 8.72734 8.98672C8.74574 8.92909 8.76268 8.87099 8.77812 8.8125C8.82266 8.61719 8.84141 8.41094 8.84141 8.19766C8.84141 8.11328 8.83828 8.025 8.83047 7.94219C8.82656 7.85078 8.81484 7.75859 8.80391 7.66719C8.79517 7.5854 8.78266 7.50407 8.76641 7.42344C8.74538 7.30066 8.71984 7.17871 8.68984 7.05781L8.67891 7.01094C8.65547 6.92656 8.63516 6.84687 8.60859 6.76328C8.5342 6.50657 8.44871 6.2532 8.35234 6.00391C8.31877 5.91013 8.28176 5.81762 8.24141 5.72656C8.18516 5.5875 8.12734 5.46172 8.075 5.34375C8.04896 5.29321 8.02446 5.24188 8.00156 5.18984C7.97615 5.1337 7.94932 5.07822 7.92109 5.02344C7.90234 4.98203 7.87969 4.94219 7.86484 4.90469L7.7 4.60156C7.67734 4.56016 7.71484 4.50938 7.76016 4.52266L8.79141 4.80156H8.79922L8.93437 4.84063L9.08438 4.88281L9.13906 4.89766V4.28594C9.13906 3.98984 9.375 3.75 9.66953 3.75C9.73908 3.74981 9.80795 3.7637 9.87199 3.79082C9.93603 3.81794 9.99393 3.85773 10.0422 3.90781C10.1419 4.00842 10.1981 4.14426 10.1984 4.28594V5.19531L10.3086 5.22578C10.3164 5.22969 10.3258 5.23359 10.3328 5.23906C10.3594 5.25781 10.3984 5.2875 10.4477 5.325C10.4867 5.35469 10.5281 5.39219 10.5766 5.43203C10.7308 5.55772 10.8804 5.68906 11.025 5.82578C11.1922 5.98125 11.3797 6.16328 11.5594 6.36562C11.6102 6.42344 11.6586 6.47969 11.7094 6.54219C11.7578 6.60391 11.8125 6.66406 11.8578 6.72344C11.9195 6.80469 11.9828 6.88906 12.0414 6.97656C12.0672 7.01797 12.0992 7.06094 12.1234 7.10234C12.1984 7.21328 12.2625 7.32734 12.3242 7.44219C12.3508 7.49453 12.3766 7.55234 12.3992 7.60859C12.4688 7.7625 12.5234 7.91797 12.557 8.07578C12.5681 8.10928 12.5757 8.14384 12.5797 8.17891V8.18672C12.5906 8.23125 12.5945 8.28047 12.5984 8.33047C12.6204 8.56138 12.5922 8.79432 12.5156 9.01328C12.4914 9.07891 12.4688 9.14609 12.4391 9.21172C12.3805 9.34453 12.3133 9.47969 12.2328 9.60391C12.2063 9.65078 12.1742 9.69922 12.1445 9.74609C12.1109 9.79531 12.075 9.84219 12.0453 9.88672C12.0024 9.94588 11.9573 10.0035 11.9102 10.0594C11.8687 10.1156 11.8273 10.1719 11.7805 10.2227C11.7172 10.2992 11.6555 10.3711 11.5891 10.4398C11.5516 10.4852 11.5109 10.532 11.4672 10.5727C11.4266 10.6195 11.3828 10.6609 11.3453 10.6984C11.2797 10.7641 11.2281 10.8133 11.1828 10.8562L11.0758 10.9516C11.0609 10.9665 11.0406 10.9749 11.0195 10.975H10.1984V12.0266H11.2313C11.4617 12.0266 11.6813 11.9453 11.8594 11.7937C11.9195 11.7414 12.1836 11.5125 12.4969 11.1672C12.5071 11.1554 12.5208 11.1472 12.5359 11.1438L15.3875 10.318C15.4 10.3143 15.4132 10.3137 15.426 10.316C15.4389 10.3183 15.451 10.3236 15.4614 10.3314C15.4719 10.3392 15.4803 10.3493 15.4862 10.3609C15.4921 10.3726 15.4952 10.3854 15.4953 10.3984V11.0023Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_155_383">
                            <rect width="18.75" height="18.75" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="ms-3 svg-icons">
                    <a
                      className="header-svg-hover"
                      href="http://www.discord.com/"
                      target="_blank"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_155_387)">
                          <path
                            d="M16.1225 3.50932C14.9272 2.97026 13.646 2.57182 12.3061 2.34526C12.2942 2.34297 12.2819 2.34445 12.2708 2.34949C12.2597 2.35452 12.2505 2.36288 12.2444 2.37339C12.0804 2.66167 11.8975 3.03745 11.7694 3.33432C10.3484 3.12201 8.90372 3.12201 7.4827 3.33432C7.33999 3.00531 7.17907 2.6845 7.00067 2.37339C6.99462 2.36275 6.98547 2.35421 6.97445 2.3489C6.96342 2.3436 6.95104 2.34178 6.93895 2.3437C5.59989 2.57026 4.31864 2.9687 3.12254 3.50854C3.11225 3.51286 3.10353 3.52022 3.09754 3.52964C0.666294 7.10386 -0.000112809 10.5898 0.327231 14.032C0.328142 14.0404 0.330759 14.0486 0.334922 14.056C0.339086 14.0633 0.344709 14.0698 0.35145 14.0749C1.77051 15.1081 3.35328 15.8951 5.03348 16.4031C5.04519 16.4067 5.05772 16.4067 5.06943 16.403C5.08114 16.3994 5.09148 16.3924 5.09911 16.3828C5.46066 15.8992 5.78106 15.3862 6.05692 14.8492C6.06075 14.8418 6.06295 14.8337 6.06339 14.8255C6.06382 14.8172 6.06248 14.8089 6.05944 14.8012C6.0564 14.7935 6.05175 14.7866 6.04579 14.7808C6.03982 14.7751 6.0327 14.7707 6.02489 14.7679C5.5202 14.5779 5.0312 14.3485 4.56239 14.082C4.55396 14.0772 4.54687 14.0703 4.54173 14.0621C4.53659 14.0539 4.53358 14.0445 4.53296 14.0348C4.53234 14.0252 4.53413 14.0155 4.53818 14.0067C4.54222 13.9978 4.5484 13.9902 4.55614 13.9843C4.65458 13.9117 4.75301 13.8359 4.84676 13.7601C4.8552 13.7533 4.86537 13.749 4.87613 13.7476C4.88688 13.7462 4.89781 13.7478 4.9077 13.7523C7.97567 15.1304 11.2983 15.1304 14.3304 13.7523C14.3403 13.7476 14.3513 13.7457 14.3622 13.747C14.3731 13.7482 14.3835 13.7525 14.3921 13.7593C14.4858 13.8359 14.5835 13.9117 14.6827 13.9843C14.6905 13.99 14.6968 13.9976 14.701 14.0064C14.7051 14.0151 14.7071 14.0247 14.7066 14.0344C14.7062 14.0441 14.7033 14.0535 14.6983 14.0618C14.6933 14.0701 14.6863 14.077 14.678 14.082C14.2108 14.3507 13.7249 14.5781 13.2147 14.7671C13.2069 14.77 13.1998 14.7745 13.1938 14.7803C13.1878 14.7861 13.1832 14.7931 13.1801 14.8009C13.1771 14.8087 13.1758 14.817 13.1762 14.8253C13.1767 14.8336 13.1789 14.8418 13.1827 14.8492C13.464 15.3859 13.7858 15.8968 14.1397 16.382C14.1471 16.3919 14.1573 16.3994 14.1691 16.4033C14.1808 16.4072 14.1935 16.4074 14.2054 16.4039C15.8884 15.8973 17.4738 15.1099 18.8944 14.0749C18.9014 14.0701 18.9072 14.0638 18.9115 14.0566C18.9158 14.0493 18.9185 14.0412 18.9194 14.0328C19.31 10.0531 18.2647 6.59526 16.1468 3.5312C16.1416 3.52124 16.133 3.51348 16.1225 3.50932ZM6.51551 11.9359C5.59208 11.9359 4.83036 11.1007 4.83036 10.0765C4.83036 9.05151 5.57723 8.21714 6.51551 8.21714C7.46083 8.21714 8.21551 9.05854 8.20067 10.0765C8.20067 11.1015 7.45379 11.9359 6.51551 11.9359V11.9359ZM12.746 11.9359C11.8218 11.9359 11.0608 11.1007 11.0608 10.0765C11.0608 9.05151 11.8069 8.21714 12.746 8.21714C13.6913 8.21714 14.446 9.05854 14.4311 10.0765C14.4311 11.1015 13.6921 11.9359 12.746 11.9359V11.9359Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_155_387">
                            <rect
                              width="18.75"
                              height="18.75"
                              fill="white"
                              transform="translate(0.25)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="ms-3 me-3 svg-icons">
                    <a
                      className="header-svg-hover"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3993 4.77898C18.7227 5.07961 17.9958 5.28273 17.2317 5.37455C18.0201 4.9015 18.61 4.15699 18.8912 3.27992C18.1505 3.7211 17.3397 4.03164 16.4943 4.19805C15.9257 3.58937 15.1727 3.18594 14.352 3.05037C13.5314 2.9148 12.6891 3.05469 11.9558 3.44831C11.2226 3.84194 10.6395 4.46728 10.297 5.22724C9.95456 5.98721 9.87191 6.83928 10.0619 7.65117C8.56092 7.57561 7.09256 7.18443 5.75211 6.50303C4.41166 5.82163 3.22908 4.86524 2.28113 3.69592C1.957 4.25655 1.77062 4.90655 1.77062 5.5988C1.77026 6.22198 1.92331 6.83562 2.2162 7.38527C2.50909 7.93491 2.93276 8.40358 3.44962 8.74967C2.8502 8.73055 2.26401 8.56815 1.73983 8.27598V8.32473C1.73977 9.19877 2.0413 10.0459 2.59325 10.7224C3.14521 11.3989 3.91359 11.8631 4.76803 12.0362C4.21197 12.1871 3.62898 12.2094 3.0631 12.1012C3.30417 12.8533 3.77375 13.5109 4.40611 13.9821C5.03847 14.4533 5.80194 14.7144 6.58965 14.7289C5.25247 15.7814 3.60106 16.3523 1.90109 16.3498C1.59995 16.3499 1.29907 16.3322 1 16.297C2.72557 17.4094 4.73427 17.9998 6.78574 17.9975C13.7303 17.9975 17.5266 12.2304 17.5266 7.22867C17.5266 7.06617 17.5226 6.90205 17.5153 6.73955C18.2537 6.20409 18.8912 5.54102 19.3977 4.78142L19.3993 4.77898Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="ms-2">
                    <button className="py-2 px-3 fs-sm br-r-8 fw-500 border-0 brown-btn">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Desktop>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column text-center ">
                <ul className="p-0">
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a className="nav-link fs-2 text-white text-decoration-none">
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-2 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#story"
                        className="nav-link fs-2 text-white text-decoration-none "
                      >
                        About
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="pt-3 pt-sm-3 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#upgrader"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Team
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-2  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="pt-3 pt-sm-3 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Roadmap
                      </a>
                    </span>
                  </li>

                  <li className="nav-item btn-img mt-3  mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <button className="brown-btn py-2 px-3 fs-sm br-r-8 fw-500 d-sm-none border-0">
                        Connect Wallet
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="navbar h-86 navbar-expand-lg navbar-light p-2 p-sm-3 w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <img className="nav-logo cursor-pointer" src={logo} alt="logo" />

              <div className="d-flex align-items-center">
                <ul className="list-unstyled d-flex align-items-center mb-0 mx-4 ">
                  <li className="svg-icons">
                    <a
                      className="header-svg-hover"
                      href="http://www.opensea.com/"
                      target="_blank"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_155_383)">
                          <path
                            d="M9.375 0C4.19844 0 0 4.19844 0 9.375C0 14.5516 4.19844 18.75 9.375 18.75C14.5516 18.75 18.75 14.5516 18.75 9.375C18.75 4.19844 14.5539 0 9.375 0ZM4.625 9.68984L4.66484 9.62656L7.10469 5.81094C7.11286 5.7984 7.12425 5.78828 7.13767 5.78164C7.15109 5.775 7.16604 5.77209 7.18097 5.77321C7.1959 5.77433 7.21025 5.77943 7.22253 5.78799C7.23481 5.79655 7.24457 5.80826 7.25078 5.82188C7.65703 6.73516 8.01016 7.87109 7.84453 8.57812C7.77578 8.86875 7.58281 9.2625 7.36484 9.62656C7.33688 9.67982 7.30638 9.7317 7.27344 9.78203C7.26555 9.79326 7.25499 9.80235 7.24272 9.80848C7.23045 9.81462 7.21684 9.81761 7.20312 9.81719H4.69766C4.6827 9.81742 4.66796 9.8136 4.65501 9.80612C4.64205 9.79865 4.63136 9.78781 4.62407 9.77475C4.61678 9.76169 4.61316 9.7469 4.6136 9.73195C4.61404 9.717 4.61852 9.70245 4.62656 9.68984H4.625ZM15.4953 11.0023C15.4955 11.019 15.4908 11.0354 15.4818 11.0494C15.4727 11.0635 15.4598 11.0745 15.4445 11.0813C15.2547 11.1617 14.6086 11.4602 14.3398 11.8328C13.6539 12.7875 13.1305 14.1531 11.9586 14.1531H7.07266C6.66013 14.1525 6.25177 14.0706 5.8709 13.9121C5.49004 13.7536 5.14415 13.5216 4.85299 13.2293C4.56184 12.9371 4.33112 12.5903 4.17404 12.2089C4.01695 11.8274 3.93658 11.4188 3.9375 11.0063V10.95C3.9375 10.9047 3.975 10.8672 4.02187 10.8672H6.74453C6.79922 10.8672 6.83828 10.9164 6.83437 10.9703C6.81406 11.1469 6.84766 11.3289 6.93203 11.4937C7.09297 11.8219 7.42891 12.0266 7.79063 12.0266H9.13906V10.9742H7.80469C7.78905 10.9741 7.77376 10.9696 7.76045 10.9614C7.74715 10.9532 7.73633 10.9415 7.72918 10.9276C7.72203 10.9137 7.7188 10.8981 7.71986 10.8825C7.72091 10.8669 7.7262 10.8519 7.73516 10.8391L7.78437 10.7688C7.90937 10.5883 8.08984 10.3109 8.26953 9.99375C8.39141 9.77969 8.51016 9.55156 8.60547 9.32188C8.62422 9.28125 8.63906 9.23828 8.65625 9.19688C8.68203 9.12344 8.70859 9.05469 8.72734 8.98672C8.74574 8.92909 8.76268 8.87099 8.77812 8.8125C8.82266 8.61719 8.84141 8.41094 8.84141 8.19766C8.84141 8.11328 8.83828 8.025 8.83047 7.94219C8.82656 7.85078 8.81484 7.75859 8.80391 7.66719C8.79517 7.5854 8.78266 7.50407 8.76641 7.42344C8.74538 7.30066 8.71984 7.17871 8.68984 7.05781L8.67891 7.01094C8.65547 6.92656 8.63516 6.84687 8.60859 6.76328C8.5342 6.50657 8.44871 6.2532 8.35234 6.00391C8.31877 5.91013 8.28176 5.81762 8.24141 5.72656C8.18516 5.5875 8.12734 5.46172 8.075 5.34375C8.04896 5.29321 8.02446 5.24188 8.00156 5.18984C7.97615 5.1337 7.94932 5.07822 7.92109 5.02344C7.90234 4.98203 7.87969 4.94219 7.86484 4.90469L7.7 4.60156C7.67734 4.56016 7.71484 4.50938 7.76016 4.52266L8.79141 4.80156H8.79922L8.93437 4.84063L9.08438 4.88281L9.13906 4.89766V4.28594C9.13906 3.98984 9.375 3.75 9.66953 3.75C9.73908 3.74981 9.80795 3.7637 9.87199 3.79082C9.93603 3.81794 9.99393 3.85773 10.0422 3.90781C10.1419 4.00842 10.1981 4.14426 10.1984 4.28594V5.19531L10.3086 5.22578C10.3164 5.22969 10.3258 5.23359 10.3328 5.23906C10.3594 5.25781 10.3984 5.2875 10.4477 5.325C10.4867 5.35469 10.5281 5.39219 10.5766 5.43203C10.7308 5.55772 10.8804 5.68906 11.025 5.82578C11.1922 5.98125 11.3797 6.16328 11.5594 6.36562C11.6102 6.42344 11.6586 6.47969 11.7094 6.54219C11.7578 6.60391 11.8125 6.66406 11.8578 6.72344C11.9195 6.80469 11.9828 6.88906 12.0414 6.97656C12.0672 7.01797 12.0992 7.06094 12.1234 7.10234C12.1984 7.21328 12.2625 7.32734 12.3242 7.44219C12.3508 7.49453 12.3766 7.55234 12.3992 7.60859C12.4688 7.7625 12.5234 7.91797 12.557 8.07578C12.5681 8.10928 12.5757 8.14384 12.5797 8.17891V8.18672C12.5906 8.23125 12.5945 8.28047 12.5984 8.33047C12.6204 8.56138 12.5922 8.79432 12.5156 9.01328C12.4914 9.07891 12.4688 9.14609 12.4391 9.21172C12.3805 9.34453 12.3133 9.47969 12.2328 9.60391C12.2063 9.65078 12.1742 9.69922 12.1445 9.74609C12.1109 9.79531 12.075 9.84219 12.0453 9.88672C12.0024 9.94588 11.9573 10.0035 11.9102 10.0594C11.8687 10.1156 11.8273 10.1719 11.7805 10.2227C11.7172 10.2992 11.6555 10.3711 11.5891 10.4398C11.5516 10.4852 11.5109 10.532 11.4672 10.5727C11.4266 10.6195 11.3828 10.6609 11.3453 10.6984C11.2797 10.7641 11.2281 10.8133 11.1828 10.8562L11.0758 10.9516C11.0609 10.9665 11.0406 10.9749 11.0195 10.975H10.1984V12.0266H11.2313C11.4617 12.0266 11.6813 11.9453 11.8594 11.7937C11.9195 11.7414 12.1836 11.5125 12.4969 11.1672C12.5071 11.1554 12.5208 11.1472 12.5359 11.1438L15.3875 10.318C15.4 10.3143 15.4132 10.3137 15.426 10.316C15.4389 10.3183 15.451 10.3236 15.4614 10.3314C15.4719 10.3392 15.4803 10.3493 15.4862 10.3609C15.4921 10.3726 15.4952 10.3854 15.4953 10.3984V11.0023Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_155_383">
                            <rect width="18.75" height="18.75" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="ms-3 svg-icons">
                    <a
                      className="header-svg-hover"
                      href="http://www.discord.com/"
                      target="_blank"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_155_387)">
                          <path
                            d="M16.1225 3.50932C14.9272 2.97026 13.646 2.57182 12.3061 2.34526C12.2942 2.34297 12.2819 2.34445 12.2708 2.34949C12.2597 2.35452 12.2505 2.36288 12.2444 2.37339C12.0804 2.66167 11.8975 3.03745 11.7694 3.33432C10.3484 3.12201 8.90372 3.12201 7.4827 3.33432C7.33999 3.00531 7.17907 2.6845 7.00067 2.37339C6.99462 2.36275 6.98547 2.35421 6.97445 2.3489C6.96342 2.3436 6.95104 2.34178 6.93895 2.3437C5.59989 2.57026 4.31864 2.9687 3.12254 3.50854C3.11225 3.51286 3.10353 3.52022 3.09754 3.52964C0.666294 7.10386 -0.000112809 10.5898 0.327231 14.032C0.328142 14.0404 0.330759 14.0486 0.334922 14.056C0.339086 14.0633 0.344709 14.0698 0.35145 14.0749C1.77051 15.1081 3.35328 15.8951 5.03348 16.4031C5.04519 16.4067 5.05772 16.4067 5.06943 16.403C5.08114 16.3994 5.09148 16.3924 5.09911 16.3828C5.46066 15.8992 5.78106 15.3862 6.05692 14.8492C6.06075 14.8418 6.06295 14.8337 6.06339 14.8255C6.06382 14.8172 6.06248 14.8089 6.05944 14.8012C6.0564 14.7935 6.05175 14.7866 6.04579 14.7808C6.03982 14.7751 6.0327 14.7707 6.02489 14.7679C5.5202 14.5779 5.0312 14.3485 4.56239 14.082C4.55396 14.0772 4.54687 14.0703 4.54173 14.0621C4.53659 14.0539 4.53358 14.0445 4.53296 14.0348C4.53234 14.0252 4.53413 14.0155 4.53818 14.0067C4.54222 13.9978 4.5484 13.9902 4.55614 13.9843C4.65458 13.9117 4.75301 13.8359 4.84676 13.7601C4.8552 13.7533 4.86537 13.749 4.87613 13.7476C4.88688 13.7462 4.89781 13.7478 4.9077 13.7523C7.97567 15.1304 11.2983 15.1304 14.3304 13.7523C14.3403 13.7476 14.3513 13.7457 14.3622 13.747C14.3731 13.7482 14.3835 13.7525 14.3921 13.7593C14.4858 13.8359 14.5835 13.9117 14.6827 13.9843C14.6905 13.99 14.6968 13.9976 14.701 14.0064C14.7051 14.0151 14.7071 14.0247 14.7066 14.0344C14.7062 14.0441 14.7033 14.0535 14.6983 14.0618C14.6933 14.0701 14.6863 14.077 14.678 14.082C14.2108 14.3507 13.7249 14.5781 13.2147 14.7671C13.2069 14.77 13.1998 14.7745 13.1938 14.7803C13.1878 14.7861 13.1832 14.7931 13.1801 14.8009C13.1771 14.8087 13.1758 14.817 13.1762 14.8253C13.1767 14.8336 13.1789 14.8418 13.1827 14.8492C13.464 15.3859 13.7858 15.8968 14.1397 16.382C14.1471 16.3919 14.1573 16.3994 14.1691 16.4033C14.1808 16.4072 14.1935 16.4074 14.2054 16.4039C15.8884 15.8973 17.4738 15.1099 18.8944 14.0749C18.9014 14.0701 18.9072 14.0638 18.9115 14.0566C18.9158 14.0493 18.9185 14.0412 18.9194 14.0328C19.31 10.0531 18.2647 6.59526 16.1468 3.5312C16.1416 3.52124 16.133 3.51348 16.1225 3.50932ZM6.51551 11.9359C5.59208 11.9359 4.83036 11.1007 4.83036 10.0765C4.83036 9.05151 5.57723 8.21714 6.51551 8.21714C7.46083 8.21714 8.21551 9.05854 8.20067 10.0765C8.20067 11.1015 7.45379 11.9359 6.51551 11.9359V11.9359ZM12.746 11.9359C11.8218 11.9359 11.0608 11.1007 11.0608 10.0765C11.0608 9.05151 11.8069 8.21714 12.746 8.21714C13.6913 8.21714 14.446 9.05854 14.4311 10.0765C14.4311 11.1015 13.6921 11.9359 12.746 11.9359V11.9359Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_155_387">
                            <rect
                              width="18.75"
                              height="18.75"
                              fill="white"
                              transform="translate(0.25)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="ms-3 me-3 svg-icons">
                    <a
                      className="header-svg-hover"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3993 4.77898C18.7227 5.07961 17.9958 5.28273 17.2317 5.37455C18.0201 4.9015 18.61 4.15699 18.8912 3.27992C18.1505 3.7211 17.3397 4.03164 16.4943 4.19805C15.9257 3.58937 15.1727 3.18594 14.352 3.05037C13.5314 2.9148 12.6891 3.05469 11.9558 3.44831C11.2226 3.84194 10.6395 4.46728 10.297 5.22724C9.95456 5.98721 9.87191 6.83928 10.0619 7.65117C8.56092 7.57561 7.09256 7.18443 5.75211 6.50303C4.41166 5.82163 3.22908 4.86524 2.28113 3.69592C1.957 4.25655 1.77062 4.90655 1.77062 5.5988C1.77026 6.22198 1.92331 6.83562 2.2162 7.38527C2.50909 7.93491 2.93276 8.40358 3.44962 8.74967C2.8502 8.73055 2.26401 8.56815 1.73983 8.27598V8.32473C1.73977 9.19877 2.0413 10.0459 2.59325 10.7224C3.14521 11.3989 3.91359 11.8631 4.76803 12.0362C4.21197 12.1871 3.62898 12.2094 3.0631 12.1012C3.30417 12.8533 3.77375 13.5109 4.40611 13.9821C5.03847 14.4533 5.80194 14.7144 6.58965 14.7289C5.25247 15.7814 3.60106 16.3523 1.90109 16.3498C1.59995 16.3499 1.29907 16.3322 1 16.297C2.72557 17.4094 4.73427 17.9998 6.78574 17.9975C13.7303 17.9975 17.5266 12.2304 17.5266 7.22867C17.5266 7.06617 17.5226 6.90205 17.5153 6.73955C18.2537 6.20409 18.8912 5.54102 19.3977 4.78142L19.3993 4.77898Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="d-none d-sm-block ms-3">
                    <button className="bg-skin py-2 px-3 fs-sm br-r-8 text-white fw-500 border-0">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
                <div
                  className={`${
                    showOverlay ? "animate" : ""
                  } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
        <div className="position-absolute blur-img-1 d-none d-md-block">
          <img src={BlurImg1} alt="Blur-img-1" />
        </div>
      </section>
    </>
  );
};

export default Header;
