import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <div className="About_left">
          <div className="About_left--circle"></div>
        </div>
        <div className="About_right">
          <div className="About_right--header">
            <div className="About_right--header--background">ABOUT</div>
            <div className="About_right--header--foreground">
              <p>
                Hello! My name is{" "}
                <span className="text-purple--light">Loi Pham</span>.
              </p>
              <p>I develop responsive web apps.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
