import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocation, useNavigate } from 'react-router-dom';
import one from "public/images/service/Strategy.png";
import two from "public/images/service/Branding & Creative.png";
import three from "public/images/service/Public Relations (PR).png";
import four from "public/images/service/Content & Digital.png";
import five from "public/images/service/Marketing.png";
import seven from "public/images/service/Advisory Service.png";
import eight from "public/images/service/Hospitality sales representation.png";
import six from "public/images/service/Event.png";
// import { useNavigate } from 'react-router-dom';

const ServiceMain = () => {
  const Strategy1 = useRef(null);
  // const Strategy1 = React.createRef();
  const router = useRouter();
  const hash = router.asPath.split("#")[1];

  // useEffect(() => {
   
  //   if (hash === "strategy" && Strategy1.current) {
  //     const topPosition = Strategy1.current.getBoundingClientRect().top + window.scrollY;
  //     window.scrollTo({
  //       top: topPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, []);
  const serviceData = [
    {
      id: 1,
      title: "Strategy",
      description: `
        - Brand Value Proposition
        - Brand Positioning Platforms
        - Brand Narrative & Content
        - Brand Creative Concept
        - Operation Models`,
      image: one,
    },
    {
      id: 2,
      title: "Branding & Creative",
      description: `
        - Brand Creation
        - Brand Identity
        - Brand Visual Language
        - Visual Communications
        - Brand Voice & Key Messages`,
      image: two,
    },
    {
      id: 3,
      title: "Public Relations (PR)",
      description: `
        - PR Strategy
        - Press Releases
        - Campaign Strategy
        - Media Relations
        - Press Kit`,
      image: three,
    },
    {
      id: 4,
      title: 'Content & Digital',
      description: `
        - Content Design & Creation
        - Website Design & Build
        - Digital Asset Design
        - Social Listening
        - Digital Production
        - Photography & Videography`,
      image: four
    },
    {
      id: 5,
      title: 'Marketing',
      description: `
        - Sales & Marketing Strategy
        - Interim Sales & Marketing Management
        - Communications Strategy
        - Campaign Conceptualization & Implementation`,
      image: five
    },
    {
      id: 6,
      title: 'Events',
      description: `
        - Activation Strategy
        - Activation Ideation
        - Project Management
        - Programming
        - Amplification & Implementation`,
      image: six
    },
    {
      id: 7,
      title: 'Advisory Service',
      description: `
        - Identifying Problems & Opportunities
        - Developing Solutions
        - Providing Strategies to Improve Performance`,
      image: seven
    },
    {
      id: 8,
      title: 'Hospitality Sales Representation',
      description: `
        - Identifying Potential Clients
        - Developing & Maintaining Client Relationships
        - Promoting & Selling Products/Services
        - Negotiating Deals & Contracts
        - Providing Ongoing Customer Support
        - Managing Sales Activities`,
      image: eight
    }

  ];


  return (
    <section className="section service-t">


      {/* first container */}

      <section className="image">
        <div className="container1" >
          <div className={`${"section1"} ${"section3"} ${"section23"}`}>
            <span className="head">1</span>
            <h3>Strategy</h3>
            <p className="zx">- Brand Value Proposition <br />
              - Brand Positioning Platforms<br />
              - Brand Narrative & Content<br />
              - Brand Creative Concept<br />
              - Operation Models</p>
            {/* <button className="round-button" onClick={handleReadMoreClick} > */}
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>

          <div className={`${"section2"} ${"section23"}`}>
            <Image src={one} alt="Example" className="section-image1" />
          </div>
        </div>

        {/* second container */}

        <div className="container1" ref={Strategy1}>
          <div className={`${"section2"}  ${"section23"} ${"section1"}`}>
            <Image src={two} alt="Example" className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">2</span>
            <h3>Branding & Creative</h3>
            <p className="zx">- Brand Creation<br />
              - Brand Identify<br />
              - Brand Visual Language<br />
              - Visual Communications<br />
              - Brand Voice & Key Messages</p>
            {/* <button className="round-button" >
                    Read more
                  </button>     */}
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>
        </div>

        {/* third container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section3"}`}>
            <span className="head">3</span>
            <h3>Public Relations (PR)</h3>
            <p className="zx">- PR Strategy<br />
              - Press Releases<br />
              - Campaign Strategy<br />
              - Media Relations<br />
              - Press Kit</p>
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>

          <div className={`${"section2"} ${"section23"}`}>
            <Image src={three} alt="Example" className="section-image1" />
          </div>
        </div>

        {/* fourth container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image src={four} alt="Example" className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">4</span>
            <h3>Content & Digital</h3>
            <p className="zx">- Cotent Design & Creation<br />
              - Website Design & Build<br />
              - Digtal Asset Design<br />
              - Social Listening<br />
              -Digital Production<br />
              - Photography & Videography</p>
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>
        </div>

        {/* fifth container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section3"}`}>
            <span className="head">5</span>
            <h3>Marketing</h3>
            <p className="zx">- Sales & Marketing Strategy<br />
              - Interin Sales & Marketing Management<br />
              - Communications Strategy<br />
              - Campaign Conceptualisation & Implemetation</p>
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image src={five} alt="Example" className="section-image1" />
          </div>
        </div>

        {/* 6 */}


        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image src={six} alt="Example" className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">6</span>
            <h3>Events</h3>
            <p className="zx">-Activation Strategy<br />
              -Activation Ideation<br />
              -Project Management<br />
              -Programming<br />
              -Amplification & Implementation<br />
            </p>
            {/* <Link
                      href="service-single"
                      className="round-button"
                    >
                     Read more
                    </Link> */}
          </div>
        </div>
      </section>

      {/* 7 */}


      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section3"}`}>
          <span className="head">7</span>
          <h3>Advisory Service</h3>
          <p className="zx">-Identifying problems and opportunities<br />
            - Developing solutions<br />
            - Providing strategies to improve performance</p>
          {/* <Link
            href="service-single"
            className="round-button"
          >
            Read more
          </Link> */}
        </div>

        <div className={`${"section2"} ${"section23"}`}>
          <Image src={seven} alt="Example" className="section-image1" />
        </div>
      </div>



      {/* 8 */}

      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section23"}`}>
          <Image src={eight} alt="Example" className="section-image1" />
        </div>

        <div className={`${"section2"} ${"section3"}`}>
          <span className="head">8</span>
          <h3>Hospitality sales representation</h3>
          <p className="zx">- Identifying potential clients<br />
            - Developing and maintaining relationships with clients<br />
            - Promoting and selling products or services<br />
            - Negotiating deals and contracts<br />
            - Providing ongoing customer support and service<br />
            - Managing sales activities and tracking progress<br />
            towards goals
            - Attending industry events to network and gather<br />
            market intelligence</p>
          {/* <Link
            href="service-single"
            className="round-button"
          >
            Read more
          </Link> */}
        </div>
      </div>

      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>

    </section>
  );
};

export default ServiceMain;



{/* <div className="container">
<div className="row">
  <div className="col-12">
    <div className="service-t__slider-w">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        speed={800}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".next-service-t",
          prevEl: ".prev-service-t",
        }}
        className="service-t__slider"
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      > */}

{/* <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Innovation Roadmapping</Link>
                </h4>
              </div>
             <p>Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, devise actionable plans, and provide ongoing support to ensure successful implementation.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Trend Analysis and Market Research</Link>
                </h4>
              </div>
             <p>Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, consumer behavior, and competitor insights to help you identify opportunities and capture the market.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Creative Strategy Development</Link>
                </h4>
              </div>
             <p>We work closely with you to devise creative strategies that align with your business objectives and target audience. Our team ensures that your brand stands out and engages customers effectively.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Ideation Workshops</Link>
                </h4>
              </div>
             <p>Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.
             </p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Creative Evaluation and Optimization</Link>
                </h4>
              </div>
             <p> We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI.

             </p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Innovation Roadmapping</Link>
                </h4>
              </div>
             <p>Our experts assist you in creating a roadmap for innovation, enabling you to implement new ideas seamlessly. We identify potential bottlenecks, devise actionable plans, and provide ongoing support to ensure successful implementation.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Trend Analysis and Market Research</Link>
                </h4>
              </div>
             <p>Stay ahead of the curve with our comprehensive trend analysis and market research services. We analyze industry trends, consumer behavior, and competitor insights to help you identify opportunities and capture the market.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Creative Strategy Development</Link>
                </h4>
              </div>
             <p>We work closely with you to devise creative strategies that align with your business objectives and target audience. Our team ensures that your brand stands out and engages customers effectively.</p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Ideation Workshopst</Link>
                </h4>
              </div>
             <p> Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.
             </p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-t-single-wrapper">
            <div className="service-t__slider-single">
              <div className="intro">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h4>
                  <Link href="service-single">Creative Evaluation and Optimization</Link>
                </h4>
              </div>
             <p> We conduct rigorous evaluations of your creative campaigns, identifying areas for improvement and optimization. Through data-driven analysis and feedback, we guide you toward achieving maximum impact and ROI.

             </p>
              <div className="cta">
                <Link href="service-single">
                  <i className="icon-arrow-top-right"></i>
                  <span>service details</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>*/}
//       </Swiper>
//     </div>
//   </div>
// </div>
// </div>