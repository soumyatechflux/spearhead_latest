import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import logo from "public/images/white-logo.png";
import logo from "public/images/white-logo2.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logo;
  }

   const isActive = (path: string | string[]) => {
    const currentPath = router.pathname;
    return Array.isArray(path)
      ? path.some(p => currentPath.startsWith(p)) // Check if currentPath starts with any of the given paths
      : currentPath === path;
  };

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-12"> */}
                <nav className="navbar p-0">
                  <div className="col-md-4 col-3">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                        <Image className="home-two-logo" src={logoSrc} priority alt="Image"/>
                      </Link>
                  </div>
                  </div>
                 
                  <div className="navbar__menu col-md-4">
                    <ul>
                    <li className="navbar__item navbar__item--has-children nav-fade">
                      {/* <li className="navbar__item navbar__item--has-children nav-fade "> */}
                        <button
                          // aria-label="dropdown menu"
                          // className="navbar__dropdown-label"
                        >
                          {/* <Link href="/" className ="ADS active-tab" >Home</Link> */}
                          <Link href="/" className={`ADS${isActive("/") ? " active-tab" : ""}`} >Home</Link>
                        </button>
                        
                        <ul >
                        {/* className="navbar__sub-menu navbar__sub-menu--lg" * drop down menu in upper ul/}
                          {/* <li>
                            <Link href="/">Creative Agency</Link>
                          </li> */}
                          {/* <li>
                            <Link href="index-light">
                              Creative Agency Light
                            </Link>
                          </li>
                          <li>
                            <Link href="index-two">Digital Agency</Link>
                          </li>
                          <li>
                            <Link href="index-two-light">
                              Digital Agency Light
                            </Link>
                          </li>
                          <li>
                            <Link href="index-three">It Solution</Link>
                          </li>
                          <li>
                            <Link href="index-three-light">
                              It Solution Light
                            </Link>
                          </li>
                          <li>
                            <Link href="index-four">Personal Portfolio</Link>
                          </li>
                          <li>
                            <Link href="index-four-light">
                              Personal Portfolio Light
                            </Link>
                          </li>
                          <li>
                            <Link href="index-five">Interactive Portfolio</Link>
                          </li>
                          <li>
                            <Link href="index-five-light">
                              Interactive Portfolio Light
                            </Link>
                          </li> */}
                        </ul>
                      </li>
                      {/* <li className="navbar__item nav-fade ADS"> */}
                      <li className="navbar__item nav-fade ADS">
                        <button>
                            <Link href="about-us" className={`ADS${isActive("/about-us") ? " active-tab" : ""}`} >
                              {/* <span className ="ADS" style={{marginTop:'0px'}}>
                                <span className ="ADS" style={{paddingRight:'5px',marginTop:'0px'}}>About</span>
                                  Us
                              </span> */}
                              About<span></span>Us
                            </Link>
                          </button>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          // className="navbar__dropdown-label"
                           className={`navbar__dropdown-label${isActive(["/our-services", "/service-single"]) ? " active-tab" : ""}`}
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services" className={`${isActive("/our-services") ? "  sub-active-tab" : ""}`}>Core Capabilities</Link>
                          </li>
                          <li>
                            <Link href="service-single" className={`${isActive("/service-single") ? "  sub-active-tab" : ""}`}>Scope Of  Service</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className={`navbar__dropdown-label${isActive(["/our-projects", "/project-single"]) ? " active-tab" : ""}`}
                        >
                          Projects
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects" className={`${isActive("/our-projects") ? "  sub-active-tab" : ""}`}>List of Projects</Link>
                          </li>
                          <li>
                            <Link href="project-single" className={`${isActive("/project-single") ? "  sub-active-tab" : ""}`}>Project Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className={`navbar__dropdown-label${isActive(["/more-advisaory", "/monymind-investment","/sakal-family-office","/training-and-development"]) ? " active-tab" : ""}`}
                        >
                          More
                        </button>
                        <ul className="navbar__sub-menu">

                          <li>
                            <Link href="more-advisaory"  className={`${isActive("/more-advisaory") ? " sub-active-tab" : ""}`}>Spearhead Creativity Advisory Service</Link>
                          </li>
                          <li>
                            <Link href="monymind-investment">Moneymind Investment</Link>
                          </li>
                          <li>
                            <Link href="sakal-family-office">Sakal Family Office</Link>
                          </li>
                          <li>
                            <Link href="training-and-development">Training & Development</Link>
                          </li>
                          {/* <li>
                            <Link href="faq">FAQ</Link>
                          </li>
                          <li>
                            <Link href="404">Error</Link>
                          </li>
                          <li>
                            <Link href="our-story">Our Journey</Link>
                          </li>
                          <li>
                            <Link href="portfolio">Portfolio</Link>
                          </li>
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              Team
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <Link href="our-teams">Our Teams</Link>
                              </li>
                              <li>
                                <Link href="team-single">Team Details</Link>
                              </li>
                            </ul>
                          </li>
                          
                          <li>
                            <Link href="contact-us">Contact Us</Link>
                          </li> */}
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <button>
                          <Link href="client-feedback" className={`ADS${isActive("/client-feedback") ? " active-tab" : ""}`} >Testimonials</Link>
                          </button>
                          {/* <ul className="navbar__sub-menu">
                          <li>
                              <Link href="client-feedback">Testimonials</Link>
                            </li>
                            <li>
                              <Link href="blog-single">Blog Details</Link>
                            </li>
                          </ul> */}
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-md-flex d-lg-d-md-flex">
                      <Link href="contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>

                    <div className="navbar__options1">
                    <button 
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>

                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              {/* </div> */}
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
      <style jsx>{`
        .active-tab button a .ADS{
          color: #ff7425 !important;
        }
      `}</style>
    </>
  );
};

export default HeaderTwo;
