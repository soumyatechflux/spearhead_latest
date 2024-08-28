import React, { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import creative from 'public/images/aboutus/shutterstock_2273961219.jpg';
import experience from 'public/images/experience.png'
// import thumbone from "public/images/agency/thumb-one.png";
// import thumbone from "public/images/agency/ani.png";
// import thumbtwo from "public/images/agency/thumb-two.png";
// import star from "public/images/star.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
// import { FaQuoteLeft } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);
const Agency = () => {
  const [triggerClasses] = useState({
    skillBar: "skill-bar-single",
    scrollAnimation: "scroll_animation",
    imgAnimation: "img-animation",
    listAnimation: "list",
  });

  useEffect(() => {
    // Skill Bar Animations
    const skillBars = document.querySelectorAll(`.${triggerClasses.skillBar}`);
    skillBars.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 75%", // Trigger when the top of the element hits 75% of the viewport
            end: "bottom 25%", // End the trigger when the bottom of the element hits 25% of the viewport
            toggleActions: "play none none none",
          },
        })
          .fromTo(
            skillBarPercent,
            { width: 0 },
            { width: target, duration: 2 }
          )
          .from(
            percentValue,
            {
              textContent: "0%",
              snap: { textContent: 5 },
            },
            "<"
          );
      }
    });
  }, [triggerClasses.skillBar]);

  useEffect(() => {
    // Scroll Animation for 'scroll_animation' class
    gsap.to(`.${triggerClasses.scrollAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.scrollAnimation}`,
        start: "top 75%", // Start animation when the top of the element hits 75% of the viewport
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      y: 0,
      duration: 2
    });
  }, [triggerClasses.scrollAnimation]);

  useEffect(() => {
    // Image Animation
    gsap.to(`.${triggerClasses.imgAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.imgAnimation}`,
        start: "top 75%", // Adjust start position as needed
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      x: 31,
      duration: 4
    });
  }, [triggerClasses.imgAnimation]);

  useEffect(() => {
    // List Items Animation
    gsap.fromTo(
      `.${triggerClasses.listAnimation}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3, // Delay between each list item
        scrollTrigger: {
          trigger: `.${triggerClasses.listAnimation}`, 
          start: "top 80%", 
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [triggerClasses.listAnimation]);
  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper ">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              {/* <Image
                src={experience}
                alt="Image"
                className="thumb-one fade-left "
                priority
              /> */}
                {/* <div  className="thumb-one fade-left" >
                          18+ Years of Experience
                </div> */}

              <Image
                src={creative}
                alt="Image"
                className="thumb-two img-animation "
                priority
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 scroll_animation">
            <div className="agency__content section__content fade-top">
              {/* <span className="sub-title">
                WELCOME Spearhead Creativity
                <i className="fa-solid fa-arrow-right"></i>
              </span> */}
              <span className="sub-title mt-0">About Us<i className="fa-solid fa-arrow-right"></i></span>
              <h2 className="title title-anim">
               Spearhead Creativity
              </h2>
              <div className="paragraph">
                {/* <p>
                  We're a dynamic Branding, Marketing, Communications, PR, and Advisory Service Company based in Dubai, UAE. With over 18 years of industry expertise, we're your go-to partners for exceptional results.
                </p> */}
                <ul>
                  <li className="list">
                  {/* <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    /> */}
                  {/* For over 20 years, Paul Williams has been working with some of the world’s most prestigious brands, helping them achieve commercial success through strategy-driven creativity. This includes implementing household names such as Arabian Business (Arabic and English) and acting as a catalyst of change for the likes of Dubai Tourism, Marriott International, Accor, ADCB, Cartier, Expo2020, Government entities, and Family-run offices. </li>
                  <li className="list">
                    <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    As an award-winning sales professional and senior management professional, Paul has a unique knack for tapping into a brand’s strengths in a way that resonates with stakeholders and external audiences alike</li>
                  <li className="list">
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    During the global pandemic, he identified an almost universal desire for simplicity amid uncertainty, spurring him to establish an independent, boutique agency, Spearhead Creativity. Today, Spearhead Creativity works with upcoming, pivoting, and legacy brands alike, guiding them through the ever-changing new normal via robust brand strategies from inception through to implementation.</li> */}
                  
                  <p className="summary">
                  We believe that the best way to tackle complexity is through intelligent simplicity. 
                  Spearhead Creativity is a boutique agency established during the global pandemic to provide specialist, integrated brand services that put organisations ahead of the pack. 
                  We achieve this by leveraging our extensive in-house experience at every stage of a project life cycle, from inception to execution, as well as our well-honed ability to understand your business goals - and most importantly, help you achieve them through tailored, strategy-driven creativity.
                  </p>
                  {/* <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon more-content"
                    />
                  <span className="more-content">
                  As an award-winning sales professional and senior management professional, Paul has a unique knack for tapping into a brand’s strengths in a way that resonates with stakeholders and external audiences alike
                  </span>
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon more-content"
                    />
                  <span className="more-content">
                  During the global pandemic, he identified an almost universal desire for simplicity amid uncertainty, spurring him to establish an independent, boutique agency, Spearhead Creativity. Today, Spearhead Creativity works with upcoming, pivoting, and legacy brands alike, guiding them through the ever-changing new normal via robust brand strategies from inception through to implementation.
                  </span> */}
                 <Link href="/about-us" className="read-more-btn">
                  Read More
                </Link>
                  </li>

                  <li className="list">
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    18+ Years of Industry Expertise</li>
                  <li className="list">
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    Diverse Sector Experience</li> 
                     <li className="list">
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    Client-Centric Approach</li>
                    <li className="list">
                  <Image
                      src="/images/check.png"
                      alt="Check Icon"
                      width={24} // Set the width
                      height={24} // Set the height
                      className="list-icon"
                    />
                    Award-Winning Team</li>

                </ul>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single d-none">
                  <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  {/* <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div> */}
                  {/* <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Digital Marketing</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="section__content-cta">
                <Link href="about-us" className="button btn-primary">
                  Read More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
           {/* <div className="container"> */}
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 col-xl-8 ceo-message">
                <div className="ceo-quote my-5">
                {/* <i className="fa-solid fa-quote-right"></i> */}
                {/* <FaQuoteLeft /> */}
                <Image
                  src="/images/ceo.png"
                  alt="CEO image"
                  width={200} // Set the width
                  height={200} // Set the height
                  className="CEO-img"
                />

                <h2 className="title ceo-title title-anim" style={{textTransform:'capitalize'}}>
                Message From CEO
                </h2>

              </div>
                <div className="ceo-msg mb-4">
                  <h4>
                  <span className="double-quote">"</span>Our experience with Spearhead Creativity was exceptional. Their team's expertise and dedication ensured a seamless execution of our project.  <span className="double-quote">" </span>   
                  </h4>
                </div>

              <div className="content-cta">
                <h4 className="ceo-name">Paul Williams</h4>
                {/* <p>CEO</p> */}
              </div>
            </div>
          </div>

              {/* </div> */}
      
      
      <Image src={glow_star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
      <Image src={glow_star} alt="Image" className="star-dot-large" priority />
    </section>
  );
};

export default Agency;
