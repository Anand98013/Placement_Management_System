import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-main">
            <div className="row">
              <div className="col-five tab-full footer-about">
                <h4 className="h05">T&P Cell, CUTM PKD</h4>
                <p>
                  Learn the World
                  <br /> Experience the World
                  <br /> Change the World
                </p>
              </div>
              <div className="col-three tab-full footer-social">
                <h4 className="h05">Connect with us.</h4>
                <ul className="list-links">
                  <li>
                    <a href="tel:+917008407928">Phone</a>
                  </li>
                  <li>
                    <a href="mailto:placement@cutm.ac.in">Email</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/school/centurion-university-of-technology-and-management/" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/CUTMIndia" rel="noopener noreferrer">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="col-four tab-full footer-subscribe end">
                <h4 className="h05">Quick Links</h4>
                <ul className="list-links">
                  <a
                    className=""
                    href="./docs/Placement Brochure IIIT Trichy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Our Brochure"
                  >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> &nbsp; Brochure
                  </a>
                  <br />
                  <a
                    className=""
                    href="./docs/IIITT Placement Details - Batch 2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Placement Details"
                  >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> &nbsp; Placement Details
                  </a>
                  <li>
                    <a href="http://www.iiitt.ac.in/" target="_blank" rel="noopener noreferrer">CUTM Paralakhemundi</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-twelve">
                <div className="copyright">
                  <span>© 2024 Centurion University, With love from
                    <a href="BASE_URL"> T&P Cell, CUTM PKD</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="go-top" style={{ "display": "block" }}>
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
