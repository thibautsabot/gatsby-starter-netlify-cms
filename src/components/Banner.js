import "./banner.css";

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Banner = ({ title }) => {
  return (
    <div role="banner" style={{ position: "relative", display: "flex" }}>
      <StaticImage
        className="banner"
        quality={70}
        src="../img/banner.png"
        alt="banniere banane plantee"
      />
      <h1 className="has-text-weight-bold banner-text">{title}</h1>
    </div>
  );
};

export default Banner;
