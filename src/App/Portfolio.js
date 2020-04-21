import React, { Component } from "react";

export class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="Portfolio">
        <div className="Portfolio_header">Portfolio</div>
        <div className="Portfolio_boxes">
          <a target="_blank" href="https://gameappv2.herokuapp.com/">
            <div className="Portfolio_box--1">
              <div className="Portfolio_box--1--header">GameApp</div>
              <div className="Portfolio_box--1--image">
                <img src="../../assets/gameapp.png" alt="" />
              </div>
            </div>
          </a>
          <a target="_blank" href="https://netflix-react.herokuapp.com/">
            <div className="Portfolio_box--2">
              <div className="Portfolio_box--2--image">
                <img src="../../assets/netflix.png" alt="" />
              </div>
              <div className="Portfolio_box--2--header">Netflix</div>
            </div>
          </a>
          <a target="_blank" href="https://gameapp-reactv1.herokuapp.com/">
            <div className="Portfolio_box--3">
              <div className="Portfolio_box--3--header">GameDeals</div>

              <div className="Portfolio_box--3--image">
                <img src="../../assets/gamedeals.png" alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
