import React, { Component } from "react";

export class Resume extends Component {
  render() {
    let { toggle, show, yOffset } = this.props;

    let className = "Resume";
    let renderResumeClass = show ? className : className + "--hidden";

    let resumeStyle = {
      margin: `${Number(yOffset) / 12 + 20}rem auto auto 20%`,
    };
    console.log(resumeStyle);
    return (
      <div style={resumeStyle} className={`Resume ${renderResumeClass}`}>
        <embed
          className="Resume_pdf"
          src="../../assets/Loi-Pham_Resume2020.pdf"
        />
        <div onClick={() => toggle()} className="Resume_button">
          X
        </div>
      </div>
    );
  }
}

export default Resume;
