import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import approch from "public/images/approch-1.png";

gsap.registerPlugin(ScrollTrigger);

const HomeApproch = () => {
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");
    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: { duration: 2 },
          scrollTrigger: { trigger: element },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          { width: 0 },
          { width: target }
        );

        axBarTimeline.from(
          percentValue,
          { textContent: "0%", snap: { textContent: 5 } },
          "<"
        );
      }
    });
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // const ReadMore = ({ text }) => {
  //   const [isReadMore, setIsReadMore] = useState(true);
  //   const toggleReadMore = () => {
  //     setIsReadMore(!isReadMore);
  //   };
    

  //   return (
  //     <p className="text">
  //       {isReadMore ? text.slice(0, 100) : text}
  //       <span onClick={toggleReadMore} className="read-more-btn">
  //         {isReadMore ? "...read more" : " show less"}
  //       </span>
  //     </p>
  //   );
  // };

  interface ReadMoreProps {
    text: string;
  }
  
  const ReadMore: React.FC<ReadMoreProps> = ({ text }) => {
    const [isReadMore, setIsReadMore] = useState(true);
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    // Split the text into paragraphs based on line breaks (\n)
    const paragraphs = text.split('\n');
  
    return (
      <div>
        {isReadMore
          ? paragraphs.slice(0, 1).map((para, index) => <p key={index}>{para}</p>)  // Show first paragraph only when collapsed
          : paragraphs.map((para, index) => <p key={index}>{para}</p>)              // Show all paragraphs when expanded
        }
        <span onClick={toggleReadMore} className="read-more-btn">
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </div>
    );
  };

  return (
    <section className=" offer fade-wrapper light">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <h2 className="title title-anim">Spearhead Approach</h2>
              <div className="paragraph">

                {/* <ReadMore
                  text="Spearhead Creativity delivers truly holistic solutions for growing businesses and large corporations looking to refresh or rejuvenate their communications strategy. Our dedicated consultancy, creative and branding studio work together to amplify our clients’ strengths, identify and ameliorate weaknesses as well as broaden brand horizons with the single aim of creating meaningful value."

                /> */}

            
                  <ReadMore 
                    text={`Spearhead Creativity delivers truly holistic solutions for growing businesses and large corporations looking to refresh or rejuvenate their communications strategy.Our dedicated consultancy, creative and branding studio work together to amplify our clients’ strengths, identify and ameliorate weaknesses as well as broaden brand horizons with the single aim of creating meaningful value.
                    
                  We bring our strategy and your brand to life through content driven creative solutions.Output: visual identity, visual language, collateral design, communication touchpoints.

                  Collaborating with clients for in-market implementation is a critical component of our offering. It represents the moment of truth for the strength of our strategy and the compelling nature of our creativity.
                  
                  Output: ready to use artwork for print, digital, advertisement,media, operational, internal/ external comms, promotional purpoes and events; messaging roll-out, cross-platform campaigns.
                  
                  Our core competency is the art of planning and directing overall corporate marketing, sales,branding and communication strategies to build and sustain brand equity..`}

                  />
             
               

              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 approch-right-side">
            <div className="agency__thumb">
              <Image
              style={{padding:'10px'}}
                src={approch}
                alt="Image"
                className="approch-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApproch;
