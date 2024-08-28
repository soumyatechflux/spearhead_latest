import React, { useState, useEffect } from "react";
import Image from 'next/image'
import icon1 from "public/images/capabilities/Icons.svg";
import icon2 from "public/images/capabilities/Icons two.svg";
import icon3 from "public/images/capabilities/Icons three.svg";
import icon4 from "public/images/capabilities/Icons four.svg";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videoframe from "public/images/video-frame.png";
import Link from "next/link";

const HomeCapabilities = () => {
  const [hover, setHover] = useState(1);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== "undefined") {
        const deviceWidth = window.innerWidth;

        if (deviceWidth > 576) {
          const workImgItems = document.querySelectorAll<HTMLElement>(
            ".work-steps__single"
          );

          workImgItems.forEach((item) => {
            const contentBox = item.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            if (item.children[2] instanceof HTMLElement) {
              item.children[2].style.transform = `translateX(${dx}px)`;
            }
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="section work-steps fade-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header--secondary">
                <div className="row gaper align-items-center">
                  <div className="col-12 ">
                    <div className="section__header text-center text-lg-start mb-0">
                      {/* <span className="sub-title">
                        working steps
                        <i className="fa-solid fa-arrow-right"></i>
                      </span> */}
                      <h2 className="title title-anim" style={{textAlign:"start"}}>
                        CORE CAPABILITIES
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                    <div className="text-center text-lg-start">
                      {/* <p>
                      We're a dynamic Branding, Marketing, Communications, PR, and Advisory Service Company based in Dubai, UAE. With over 18 years of industry expertise, we're your go-to partners for exceptional results.

                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top d-flex justify-content-center" +
                  (hover === 0 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(0)}
              >
                <span>
                  <Image
                    src={icon1}
                    alt="Image"
                    className="capabilities-icon"
                  />
                </span>

                <Link href="our-services">
                  <h5>Strategic Planning</h5>
                  <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{
                      // backgroundImage: "url('/images/work/thumb-one.png')",
                    }}
                  ></div>
                </Link>

              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top d-flex justify-content-center" +
                  (hover === 1 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(1)}
              >
                <span>

                  <Image
                    src={icon4}
                    alt="Image"
                    className="capabilities-icon"

                  />

                </span>
                <Link href="our-services">
                  <h5>Concept Design</h5>
                  <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{
                      // backgroundImage: "url('/images/work/thumb-two.png')",
                    }}
                  ></div>

                </Link>


              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top d-flex justify-content-center" +
                  (hover === 2 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(2)}
              >
                <span>

                  <Image
                    src={icon2}
                    alt="Image"
                    className="capabilities-icon"

                  />
                </span>

                <Link href="our-services">
                  <h5>Asset Development</h5>
                  <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{
                      // backgroundImage: "url('/images/work/thumb-one.png')",
                    }}
                  ></div>
                </Link>

              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top d-flex justify-content-center" +
                  (hover === 3 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(3)}
              >
                <span>
                  <Image
                    src={icon3}
                    alt="Image"
                    className="capabilities-icon"

                  />
                </span>
                <Link href="our-services">
                  <h5>Brand Activations & Engagement</h5>
                  <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{
                      // backgroundImage: "url('/images/work/thumb-four.png')",
                    }}
                  ></div>
                </Link>

              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="video-frame video-btn d-none d-md-flex"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button> */}
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        {/* <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeCapabilities;