import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Resume from "./Resume";

export class App extends Component {
  constructor(props) {
    super();
    this.state = { resumeShowing: false, pageYOffset: 0 };
  }

  componentDidMount() {
    //Scroll causes nav to appear and reappear
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("Navbar")[0].style.top = "0";
      } else {
        document.getElementsByClassName("Navbar")[0].style.top = "-500px";
      }
      prevScrollpos = currentScrollPos;
    };
  }

  toggleResume = (e) => {
    this.setState({ resumeShowing: !this.state.resumeShowing, pageYOffset: e });
  };
  render() {
    let { resumeShowing, pageYOffset } = this.state;

    return (
      <div className="App">
        <Resume
          show={resumeShowing}
          toggle={this.toggleResume}
          yOffset={pageYOffset}
        ></Resume>
        <Navbar toggle={this.toggleResume}></Navbar>
        <About></About>
        <Portfolio></Portfolio>
        <Footer toggle={this.toggleResume}></Footer>
      </div>
    );
  }
}

export default App;
