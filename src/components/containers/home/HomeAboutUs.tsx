import React, { useState,useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import creative from './../../../../public/images/aboutus/shutterstock_2273961219.jpg';
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";

interface ReadMoreProps {
  children: React.ReactNode; // Define the type for children
}

const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
  const text = children as string; // Ensure children is treated as a string
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-more-btn">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const HomeAboutUs = () => {
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
      y: 15,
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
      x: 40,
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
            
              <h2 className="title title-anim" style={{textTransform:'capitalize'}}>
               SPEARHEAD CREATIVITY
              </h2>
              {/* <div className="paragraph"> */}
              
                            <div className="paragraph">
                                {/* <ReadMore> */}
                                   <p>We believe that the best way to tackle complexity is through intelligent simplicity. </p> 
                                    <p>Spearhead Creativity is a boutique agency established during the global pandemic to provide specialist, integrated brand services that put organisations ahead of the pack. </p>
                                    <p>We achieve this by leveraging our extensive in-house experience at every stage of a project life cycle, from inception to execution, as well as our well-honed ability to understand your business goals - and most importantly, help you achieve them through tailored, strategy-driven creativity.</p>
                                    <br/>
                                {/* </ReadMore> */}
                            </div>
                        
                 <ul> 
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
                {/* <div className="skill-bar-single">
                  
                </div> */}
                
              </div>
              
            {/* </div> */}
          </div>
        </div>
      </div>
         
      
      <Image src={glow_star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
      <Image src={glow_star} alt="Image" className="star-dot-large" priority />
    </section>
  );
};

export default HomeAboutUs;
