// import React, { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import blogthumb from "public/images/offer/blog-thumb.png";
// import star from "public/images/offer/star.png";
// import thumbone from "../../../../public/images/agency/thumb-four.png";
// import str from "public/images/str1.png";
// import str2 from "public/images/str2.png";
// import str3 from "public/images/str3.png";
// import str4 from "public/images/str4.png";
// // import firstimg from "public/images/firstimg.jpg";
// // import fourthimg from "public/images/fourthimg.jpg";
// import one from "public/images/homeoffer/imgOne.jpg"
// import two from "public/images/homeoffer/imgTwo.jpg"
// import three from "public/images/homeoffer/imgThree.jpg"
// import four from "public/images/homeoffer/imgFour.jpg"

// const HomeOffer = () => {
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       const caseStudyItems = document.querySelectorAll(".offer__cta-single");
//       const deviceWidth = window.innerWidth;

//       if (deviceWidth > 576) {
//         caseStudyItems.forEach((item) => {
//           const contentBox = item.getBoundingClientRect();
//           const dx = event.clientX - contentBox.x;
//           const dy = event.clientY - contentBox.y;
//           const thirdChild = item.children[2] as HTMLElement;
//           thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (




//     <section className="section offer fade-wrapper light">
//       {/* <h2 className="title title-anim" style={{padding: "20px", fontSize:"60px" , fontWeight:"500px"}}>Core Capabilities</h2>

// <div className="container2">


//   <div className="box">
//     <div className="content">Strategic Planning    </div>
//     <div className="image"><Image src={str} alt="Image" /></div>
//   </div>
//   <div className="box">
//     <div className="content">Concept Design</div>
//     <div className="image"><Image src={str2} alt="Image" /></div>
//   </div>
  
// </div>

// <div className={`${"container2"} ${"con"}`}>
//   <div className="box">
//     <div className="content">Asset Development</div>
//     <div className="image"><Image src={str3} alt="Image" /></div>
//   </div>
//   <div className="box">
//     <div className="content">Brand Activations & Engagement</div>
//     <div className="image"><Image src={str4} alt="Image" /></div>
//   </div>
// </div> */}

// {/* <div className="container1">
//         <div className={`${"section1"} ${"section3"} ${"section23"}`}>
//           <span className="head">01</span>
//             <h3>Ideation Workshops</h3>
//               <p className="zx">Our interactive and collaborative workshops ignite a spark of creativity among your team. Through thought-provoking exercises and techniques, we empower your team members to generate groundbreaking ideas and unique solutions.</p>
                
//                 <Link
//                       href="service-single"
//                       className="round-button"
//                     >
//                      Read more
//                     </Link>
//         </div>

//           <div className={`${"section2"} ${"section23"}`}>
//               <Image src={thumbone} alt="Example" className="section-image1" />
//           </div>
//       </div> */}






//       <div className="container">
//         <div className="row gaper">
//           <div className="col-12 col-lg-5">
//             <div className="offer__content section__content">
//               <span className="sub-title">
//                 WHAT WE OFFER
//                 <i className="fa-solid fa-arrow-right"></i>
//               </span>
//               <h2 className="title title-anim">
//                 Spearhead Creativity
//               </h2>
//               <div className="paragraph">
//                 <p>
//                   We're a dynamic Branding, Marketing, Communications, PR, and Advisory Service Company based in Dubai, UAE. With over 18 years of industry expertise, we're your go-to partners for exceptional results.

//                 </p>
//               </div>
//               <div className="section__content-cta">
//                 <Link href="our-services" className="btn btn--secondary">
//                   view all services
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
//             <div className="offer__cta">
//               <div className="offer__cta-single fade-top">
//                 <span className="sub-title">
//                   01
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//                 <h2>
//                   <Link href="service-single">
//                   Strategic Planning
//                     <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                   </Link>
//                 </h2>
//                 <div className="offer-thumb-hover d-none d-md-block">
//                   <Image src={one} alt="Image" />
//                 </div>
//               </div>
//               <div className="offer__cta-single fade-top">
//                 <span className="sub-title">
//                   02
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//                 <h2>
//                   <Link href="service-single">
//                   Concept Design
//                     <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                   </Link>
//                 </h2>
//                 <div className="offer-thumb-hover d-none d-md-block">
//                   <Image src={two} alt="Image" />
//                 </div>
//               </div>
//               <div className="offer__cta-single fade-top">
//                 <span className="sub-title">
//                   03
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//                 <h2>
//                   <Link href="service-single">
//                   Asset Development
//                     <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                   </Link>
//                 </h2>
//                 <div className="offer-thumb-hover d-none d-md-block">
//                   <Image src={three} alt="Image" />
//                 </div>
//               </div>
//               <div className="offer__cta-single fade-top">
//                 <span className="sub-title">
//                   04
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//                 <h2>
//                   <Link href="service-single">
//                   Brand Activations & Engagement
//                     <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                   </Link>
//                 </h2>
//                 <div className="offer-thumb-hover d-none d-md-block">
//                   <Image src={four} alt="Image" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Image src={star} alt="Image" className="star" />
//       <div className="lines d-none d-lg-flex">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//     </section>
//   );
// };

// export default HomeOffer;



import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import thumbone from "public/images/agency/thumb-one.png";
import capabilities from "public/images/capabilitie.png";
import thumbtwo from "public/images/agency/thumb-two.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);
const HomeOffer = () => {
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
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper align-items-center">
          
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              {/* <span className="sub-title">
                WELCOME
                <i className="fa-solid fa-arrow-right"></i>
              </span> */}
              <h2 className="title ">
                Core Capabilities
              </h2>
              <div className="paragraph">
                <p>
                We're a dynamic Branding, Marketing, Communications, PR, and Advisory Service Company based in Dubai, UAE. With over 18 years of industry expertise, we're your go-to partners for exceptional results.

                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Strategic Planning</p>
                  </div>
                  {/* <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Concept Design</p>
                  </div>
                  {/* <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Asset Development</p>
                  </div>
                  {/* <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Brand Activations & Engagement</p>
                  </div>
                  {/* <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
              {/* <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image
                src={capabilities}
                alt="Image"
                className="thumb-one fade-left "
                priority
              />
              {/* <Image
                src={thumbtwo}
                alt="Image"
                className="thumb-two fade-right"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority /> */}
    </section>
  );
};

export default HomeOffer;