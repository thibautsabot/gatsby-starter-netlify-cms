import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div
        role="banner"
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${require("../img/banner.png")})`,
          backgroundPositionY: "15%",
        }}
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
    );
  }
}

export default Banner;
