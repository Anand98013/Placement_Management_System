import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
      <>
      <section id="home">

        <div className="overlay"></div>

        <div className="home-content-table">
          <div className="home-content-tablecell">
            <div className="row">
              <div className="col-twelve overlay-white">

                <h3 className="animate-intro">Learn. Experience. Change.

                </h3>
                <h1 className="animate-intro">
                  Training &  Placement Cell,
                  <br/> Centurion University of Technology & Management
                </h1>

                <div className="more animate-intro">
                  <a className="smoothscroll button stroke" href="#contact">
                    Contact Us
                  </a>
                  <a className="smoothscroll button stroke"
                    href="./docs/CUTM_Campus.pdf" target="_blank" title="View Our Brochure" >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> Brochure
                  </a>
                  <a className="smoothscroll button stroke"
                    href="./docs/IIITT Placement Details - Batch 2023.pdf" target="_blank" title="View Placement Details" >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> Placement Details
                  </a>
                </div>

                <div className="animate-intro">

                </div>

              </div>

            </div>

          </div>

        </div>


        <ul className="home-social-list">
          <li className="animate-intro" title="+91-917008407928">
            <a href="tel:+91917008407928">
              <i className="fa fa-phone-square" style={{ "font-size": "1.15em" }}></i>
            </a>
          </li>
          <li className="animate-intro">
            <a href="mailto:placement@cutm.ac.in">
              <i className="fa fa-envelope" style={{ "font-size": "1.15em" }}></i>
            </a>
          </li>
          <li className="animate-intro">
            <a href="https://www.linkedin.com/school/centurion-university-of-technology-and-management/">
            <i className="fa fa-linkedin" aria-hidden="true" style={{ "font-size": "1.15em" }}></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CUTMIndia">
            <i className="fa fa-twitter" aria-hidden="true" style={{ "font-size": "1.15em" }}></i>
            </a>
          </li>
        </ul>


        <div className="scrolldown">
          <a href="#about" className="scroll-icon smoothscroll">
            Learn More
            <i className="icon-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

      </section>
      </>
    )
  }
}

