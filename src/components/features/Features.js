import React, { useState, useLayoutEffect } from "react";
import classnames from "classnames";
import data from "./data";
import "./Features.css";

const FeatureSection = () => {
  // const images = [0, 1, 2, 3, 4];
  // const [visibleImagesMap, setVisibleImagesMap] = useState(
  //   images.reduce((map, image) => {
  //     map[image] = false;
  //     return map;
  //   }, {})
  // );
  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop;
  //     const viewportHeight = window.innerHeight;
  //     console.log("viewportHeight", viewportHeight);
  //     const newVisibleImagesMap = images.reduce((map, image) => {
  //       map[image] = scrollTop >= image * viewportHeight;
  //       return map;
  //     }, {});
  //     console.log("newVisibleImagesMap", newVisibleImagesMap);
  //     setVisibleImagesMap(newVisibleImagesMap);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // }, []);
  useLayoutEffect(() => {
    const handleImage = () => {
      let mainImage = document.querySelector(".main");
      const featureOne = document.getElementById("one");
      const featureTwo = document.getElementById("two");
      const featureThree = document.getElementById("three");
      const featureFour = document.getElementById("four");

      if (
        window.scrollY >= featureOne.offsetTop &&
        window.scrollY < featureTwo.offsetTop
      ) {
        mainImage.style.backgroundImage =
          "url('https://images.pexels.com/photos/586031/pexels-photo-586031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
      }
      if (
        window.scrollY >= featureTwo.offsetTop &&
        window.scrollY < featureThree.offsetTop
      ) {
        mainImage.style.backgroundImage =
          "url('https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
      }
      if (
        window.scrollY >= featureThree.offsetTop &&
        window.scrollY < featureFour.offsetTop
      ) {
        mainImage.style.backgroundImage =
          "url('https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
      }
      if (window.scrollY >= featureFour.offsetTop) {
        mainImage.style.backgroundImage =
          "url('https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
      }
    };

    window.addEventListener("scroll", handleImage);

    return () => window.removeEventListener("scroll", handleImage);
  }, []);

  return (
    <div className="main">
      <section id="one">
        <div class="content">
          <h1 className="title" style={{ paddingTop: "30%" }}>
            Embark invests in and builds teams for SpaceTech.
          </h1>
        </div>
      </section>
      <section id="two">
        <div className="content" style={{ paddingTop: "80vh" }}>
          <h1 className="title">Optimize costs, maximize money raised.</h1>
        </div>
      </section>
      <section id="three" style={{ paddingTop: "90vh" }}>
        <div className="content">
          <h1 className="title">Leverage a framework to quantify Talent.</h1>
        </div>
      </section>
      <section id="four" style={{ paddingTop: "80vh", height: "100vh" }}>
        <div className="content" style={{ marginTop: "7%" }}>
          <h1 className="title">Conduct data-driven hiring decisions.</h1>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;

// <div className="app">
//   <div className="sticky">
//     <div className="frame">
//       {data.map((item, i) => (
//         <>
//           <div
//             className={classnames("image", `image_${item.id}`, {
//               image_visible: visibleImagesMap[item.id],
//             })}
//             key={item.id}
//           >
//             <div className="text-container">
//               <h1 className="title">{item.title}</h1>
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   </div>
// </div>
