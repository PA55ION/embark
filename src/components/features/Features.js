import React, { useState, useLayoutEffect } from "react";
import classnames from "classnames";
import data from "./data";
import "./Features.css";

const FeatureSection = () => {
  const images = [0, 1, 2, 3, 4];

  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight;
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="sticky">
        <div className="frame">
          {data.map((item, i) => (
            <>
              <div
                className={classnames("image", `image_${item.id}`, {
                  image_visible: visibleImagesMap[item.id],
                })}
                key={item.id}
              >
                <div className="float-text">
                  <h1 className="title">{item.title}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
