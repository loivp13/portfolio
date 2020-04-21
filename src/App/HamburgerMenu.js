import React, { Component } from "react";

export class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleButton = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let toggle = this.props.toggleResume;

    let openClass = "HamburgerMenu";
    let renderClass = this.state.isOpen
      ? (openClass += "--show")
      : (openClass += "--hidden");

    let renderButton = this.state.isOpen ? (
      <div onClick={this.toggleButton} className="HamburgerMenu--close"></div>
    ) : (
      <div onClick={this.toggleButton} className="HamburgerMenu--open"></div>
    );

    return (
      <div className="HamburgerMenu">
        {renderButton}
        <div className={`${renderClass} HamburgerMenu_container`}>
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li onClick={() => toggle(window.pageYOffset)}>
              <a href="#resume">resume</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
