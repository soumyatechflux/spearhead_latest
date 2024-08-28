import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import aniket from "./../../../../public/video/HR.mp4" ;
import banneronethumb from "public/images/banner/banner-one-thumb.png";

import star from "public/images/glowing star.gif";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline>
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  Welcome
                  <span className="text-stroke">to</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> Spearhead Creativity!
                  </span>
                </h1>
                {/* <div className="banner__content-inner">
                  <p>
                    We're a dynamic Branding, Marketing, Communications, PR, and Advisory Service Company based in Dubai, UAE.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">18+</h5>
                      <p className="fw-5">years of experience</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        /> */}
         
          {/* <video autoPlay loop muted controls
          className="col-12 col-md-12 banner-one-thumb d-none d-sm-block g-ban-one"
          >
            <source src="/video/video.mp4" className="banner-one-thumb" type="video/mp4" />
          </video> */}


        <Image src={star} alt="Image" className="star" />
        {/* <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:ceo@spearheadcreativity.com">mail : ceo@spearheadcreativity.com</Link>
          <Link href="tel:+971 566121551 ">Call : +971 566121551 </Link>
        </div> */}
        {/* <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/" target="_blank">
            instagram
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            Linkedin
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            facebook
          </Link>
        </div> */}
        <button
        // className="video-frame video-btn"
        // onClick={() => setVideoActive(true)}
        >
          {/* <Image src={videoframe} alt="Image" priority /> */}
          {/* <i className="fa-sharp fa-solid fa-play"></i> */}
        </button>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner" style={{display:'none'}}>
          <div
          // className="video-container"
          // onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
            // aria-label="close video popup"
            // className="close-video-popup"
            // onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
