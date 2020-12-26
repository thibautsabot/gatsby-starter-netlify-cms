import "./banner.css";

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

class Banner extends React.Component {
  render() {
    return (
      <div role="banner" style={{ position: "relative", display: 'flex' }}>
        <StaticImage
          className="banner"
          quality={70}
          src="../img/banner.png"
          alt="banniere banane plantee"
        />
        <h1 className="has-text-weight-bold banner-text">{this.props.title}</h1>
      </div>
    );
  }
}

export default Banner;
