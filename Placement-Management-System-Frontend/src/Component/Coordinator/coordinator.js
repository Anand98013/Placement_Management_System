import React from 'react';
import './cordinator.module.css';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <h1 id='mess'>Co-Ordinator</h1>
        <div className="container" id='cordcont'>
          <div className="row" id='row1'>
            <div className="col">
              <div className="card">
                <img src="https://www.statefarmfcu.com/wp-content/uploads/2021/10/Set-Up-Alerts.jpg" className="card-img-top" alt=""/>
                <div className="card-content">
                  <h5 className="card-title">Add the notification</h5>
                  <Link to="/notification" className="custom-btn">Add Notification</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="https://www.rpsgroup.com/imported-media/2021/1_istock-858705938_1600x1000.jpg?width=830&height=533&quality=90" className="card-img-top" alt="..."/>
                <div className="card-content">
                  <h5 className="card-title">View the company details</h5>
                  <Link to="/companydetails" className="custom-btn">Company Details</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id='row2'>
            <div className="col">
              <div className="card">
                <img src="https://www.finereport.com/en/wp-content/uploads/2019/11/2019112801I.jpg" className="card-img-top" alt="..."/>
                <div className="card-content">
                  <h5 className="card-title">Generate report & send to Admin</h5>
                  <Link to="/GenerateReport" className="custom-btn">Generate Report</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="https://contentstatic.techgig.com/photo/74829871.cms" className="card-img-top" alt="..."/>
                <div className="card-content">
                  <h5 className="card-title">Manage & Filter the student database</h5>
                  <Link to="studentdatabase" className="custom-btn">Student Database</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
