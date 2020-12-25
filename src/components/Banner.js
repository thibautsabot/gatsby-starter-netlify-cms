import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import banner from '../img/banner.png'

class Banner extends React.Component {
  render() {
    return (
      <>
      <p>coucou</p>
      <StaticImage width={100} height={100} src="../img/banner.png" alt='banniere banane plantee' />
      <div
        role="banner"
        // className="full-width-image-container margin-top-0"
        // style={{
        //   backgroundImage: `url(${require("../img/banner.png")})`,
        //   backgroundPositionY: "15%",
        // }}
      >
        <h1
          className="has-text-weight-bold banner-text"
          style={{
            border: "solid 0.2rem white",
            color: "whitesmoke",
            padding: "1rem",
            marginBottom: "0",
          }}
        >
          {this.props.title}
        </h1>
      </div>
      </>
    );
  }
}

export default Banner;
