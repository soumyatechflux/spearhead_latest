import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/white-logo2.png";
// import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}


const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
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

  const defaultClasses = "primary-navbar secondary--navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-light") {
    logoSrc = logo;
  }


  return (
    <>
      {/* <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} alt="Image" priority style={{height : '50px', width: '100px',marginLeft : 10  }} />
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header> */}

<header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" style={{height : '85px', background:"", borderRadius:"50%"}} />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        {/* <button
                          // aria-label="dropdown menu"
                          // className="navbar__dropdown-label"
                        >
                          <Link href="/" className ="ADS" >Home</Link>
                        </button> */}
                        
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
                      <li className="navbar__item nav-fade">
                        <Link href="about-us" className ="ADS" >About Us</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className={`${"navbar__dropdown-label"} ${"ADS"}`}
                          // className="navbar__dropdown-label"
                          // style={{color: "white"}}
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Core Capabilities</Link>
                          </li>
                          <li>
                            <Link href="service-single">Scope Of Service</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                          // style={{color: "white"}}
                        >
                          Projects
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects">List of Projects</Link>
                          </li>
                          <li>
                            <Link href="project-single">Project Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                          // style={{color: "white"}}
                        >
                          More
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
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
                          {/* <li>
                            <Link href="client-feedback">Testimonials</Link>
                          </li> */}
                          <li>
                            <Link href="contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="client-feedback" className ="ADS" >Testimonials</Link>
                      
                        {/* <ul className="navbar__sub-menu">
                          <li>
                            <Link href="blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="blog-single">Blog Details</Link>
                          </li>
                        </ul> */}
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
