import React, { Component } from "react";
import HamburgerMenu from "./HamburgerMenu";

export class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { toggle } = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar_container">
          <div className="Navbar_container--left">
            <h1 className="Navbar_container--left--name">
              <span className="text-purple--light">&lt;</span>
              <span id="loivanpham">Loi Van Pham</span>
              <span className="text-purple--light">/&gt;</span>
            </h1>
          </div>
          <div className="Navbar_container--right">
            <ul className="Navbar_container--list">
              <li className="Navbar_container--list--about">
                <a href="#about">about</a>
              </li>
              <li className="Navbar_container--list--portfolio">
                <a href="#portfolio">portfolio</a>
              </li>
              <li className="Navbar_container--list--contact">
                <a href="#contact">contact</a>
              </li>
              <li
                onClick={() => toggle(window.pageYOffset)}
                className="Navbar_container--list--resume"
              >
                <a href="#resume">resume</a>
              </li>
            </ul>
          </div>
          <HamburgerMenu toggleResume={toggle}></HamburgerMenu>
        </div>
      </div>
    );
  }
}

export default Navbar;
