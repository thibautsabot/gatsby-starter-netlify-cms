import React from "react";
import logos from "../img/banner_icon.png";

class Banner extends React.Component {
  render() {
    return (
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${require("../img/banner.jpg")})`,
          backgroundPositionY: "30%",
        }}
      >
        <h1
          className="has-text-weight-bold banner-text"
          style={{
            boxShadow: "0.3rem 0 0 #008000, -0.3rem 0 0 #008000",
            color: "whitesmoke",
            padding: "0 1rem",
            marginBottom: "0",
          }}
        >
          {this.props.title}
        </h1>
        <img alt="logos banniere" className="icon-logos" src={logos} />
      </div>
    );
  }
}

export default Banner;
