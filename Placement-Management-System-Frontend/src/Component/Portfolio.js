import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section id="placement">
          <div className="section-intro placement-head">
            <h1>Placement Statistics</h1>
          </div>

          <img
            src="./images/placements_2023.jpeg"
            alt="Placement Stats"
            style={{ width: "100%" }}
          />
        </section>

        <div
          style={{ width: "100%", height: "20px", "background-color": "#000" }}
        ></div>
        <section id="recruiters">
          <div className="section-intro placement-head">
            <h1>Our Recruiters</h1>
          </div>

          <img
            src="./images/recruiters_2023.jpg"
            alt="Our Recruiters"
            style={{ width: "100%" }}
          />
        </section>
      </div>
    );
  }
}
