import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/service/Strategy.png";
import two from "public/images/service/Branding & Creative.png";
import three from "public/images/service/Public Relations (PR).png";
import four from "public/images/service/Content & Digital.png";
import five from "public/images/service/Marketing.png";
import six from "public/images/service/Advisory Service.png";
import seven from "public/images/service/Hospitality sales representation.png";
import eight from "public/images/service/Event.png";
import dot from "public/images/portfolio/dot.png";
import arrow from "public/images/service/arrow.png";


const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section section__header portfolio pb-0 fade-wrapper position-relative">
     
        <div className="container">
           {/* <div className="text-center text-lg-start"> */}
            <h2 className="title title-anim" style={{textAlign:"start"}}>Scope of Services</h2>
            <div className="row cards">
               <div className="card"> 
                  <Image src={one} alt="Image" className="card-img" />
                  <div className="card-body">
                    <h5 className="card-title">Strategy</h5>
                    
                    <Link href="service-single#strategy">
                      <Image
                      src={arrow}
                      alt="-->"
                      className="arrow-img"
                      />
                  </Link>
                  
                  </div>
            </div>
            <div className="card">
              <Image src={two} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Branding & Creative</h5>
                 
                  <Link href="service-single">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                  
                </div>
            </div>
            <div className="card">
              <Image src={three} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Public Relations (PR)</h5>
                  
                    <Link href="service-single">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
            </div>
            <div className="card">
              <Image src={four} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Content & Digital</h5>
                  {/* <p className="card-text">- Cotent Design & Creation<br />
                                            - Website Design & Build<br />
                                            - Digtal Asset Design<br />
                                            </p> */}
                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                  <Link href="service-single">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
              </div>
              <div className="card"> 
                <Image src={five} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                  {/* <p className="card-text">- Sales & Marketing Strategy<br />
                                - Interin Sales & Marketing Management<br />
                                - Communications Strategy<br />
                                </p> */}
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                  <Link href="our-services">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
            </div>
            <div className="card">
              <Image src={eight} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Events</h5>
                  {/* <p className="card-text">-Activation Strategy<br />
                              -Activation Ideation<br />
                              -Project Management<br /></p> */}
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                  <Link href="service-single">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
            </div>
            <div className="card">
              <Image src={six} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Advisory Service</h5>
                  {/* <p className="card-text">-Identifying problems and opportunities<br />
                          - Developing solutions<br />
                          - Providing strategies to improve performance</p> */}
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                  <Link href="service-single">
                    <Image
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
            </div>
            <div className="card"> 
                <Image src={seven} alt="Image" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Hospitality sales representation</h5>
                  {/* <p className="card-text">- Identifying potential clients<br />
                                    - Developing and maintaining relationships with clients<br />
                                    - Promoting and selling products or services</p> */}
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                  <Link href="service-single">
                    <Image
                    style={{marginRight:'16px'}}
                    src={arrow}
                    alt="-->"
                    className="arrow-img"
                    />
                </Link>
                </div>
            </div>
          </div>
          {/* </div>  */}
        </div>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </section>
  );
};

export default PortfolioText;








 {/* <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/* <div className="container-fluid">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
            >
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Strategy</Link>
                </h4>
              </div>
            </div>
          </div> 
           <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
            >
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Branding & Creative</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
            >
              <Link href="portfolio">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Public Relations (PR)</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Content & Digital</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <Link href="portfolio">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <Link href="portfolio">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Advisory Service</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">view all work</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="portfolio">
                <Image src={seven} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Hospitality sales representation</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div> */} 