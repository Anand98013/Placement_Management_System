import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section id="about">

        <div className="row about-wrap">
            <div className="col-full">

                {/* <!-- <div className="about-profile-bg"></div> --> */}

                <div className="intro">
                    <h3 className="animate-this fadeInUp animated">About Us</h3>
                    <p className="lead animate-this">
                        <span>Centurion University Of Technology & Management Paralakhemundi (CUTM PKD),</span>  also known as <span>CUTM</span>, is a multi-sector, private university located in Odisha, India. Accredited with NAAC with ‘A+’ grade, the main campus of CUTM is located at Paralakhemundi (Gajapati district).

                        Centurion University offers over 90+ courses across various fields such as Engineering, Management, Science, Mass Communication and Media, Design, Hotel Management and Pharmacy among various others.
                        
                        <span>Industry partners</span> include <span>Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Academor, Salesforce, and Wipro (TAKE Solutions)</span>.
                        
                        
                    </p>
                    <div className='onesignal-customlink-container'></div>
                </div>

            </div>
           
        </div>
     

    </section>
    )
  }
}
