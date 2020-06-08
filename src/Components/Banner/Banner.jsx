import React, { Component } from "react";
import "./Banner.css";

export class Banner extends Component {
  render() {
    return (
      <div className="bannerConatiner w3-card">
        <div>
          <img
            src="https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/saleBanner/banner2.jpg"
            alt="xaprika-flat-art-sponsor-banner"
            className="bannerImage"
          />
        </div>
      </div>
    );
  }
}

export default Banner;
