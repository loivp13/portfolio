import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div id="contact" className="Footer">
        <div
          onClick={() => this.props.toggle(window.pageYOffset)}
          className="Footer_circle"
        >
          Resume
        </div>

        <div className="Footer_contact">
          <div className="Footer_contact--contact">Contact</div>
          <div className="Footer_contact--container">
            <div className="Footer_contact--linkedin">
              <a href="https://www.linkedin.com/in/loi-pham-aa33b577/">
                <img src="../../assets/icons-3.png" alt="" />
              </a>
            </div>
            <div className="Footer_contact--github">
              <a href="https://github.com/loivp13">
                {" "}
                <img src="../../assets/githubSVG.png" alt="" />
              </a>
            </div>
            <div className="Footer_contact--email">
              <a href="">
                <img src="../../assets/icons8_envelope_80px.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="Footer_image">
          <img src="../../assets/website_footer_image.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Footer;
