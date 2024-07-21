// import React, { Component } from "react";
// import AdminCSS from "./admin.module.css";
// import { NavLink } from "react-router-dom";

// class Admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   componentDidMount() {
//     // Check if user is logged in
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData) {
//       this.setState({ isLoggedIn: true });
//     }
//   }

//   render() {
//     const { isLoggedIn } = this.state;

//     if (!isLoggedIn) {
//       window.location.href = "/login";
//       return null; 
//     }

//     return (
//       <div className={AdminCSS.root}>
//         <h1 className={AdminCSS.admin_head}>ADMIN</h1>
//         <div className={AdminCSS.card_container}>
//           <div className={AdminCSS.crd1}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://cdn3.vectorstock.com/i/1000x1000/55/47/company-profile-infographic-diagram-template-vector-22725547.jpg"
//                 className={AdminCSS.card_img}
//                 alt="Company Details"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Add Company</h5>
//                 <NavLink className={AdminCSS.btn} to="/companyDetails">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className={AdminCSS.crd2}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9icyUyMHRleHR8ZW58MHx8MHx8fDA%3D"
//                 className={AdminCSS.card_img}
//                 alt="Jobs"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Jobs</h5>
//                 <NavLink className={AdminCSS.btn} to="/forHire">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className={AdminCSS.crd3}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://lh4.googleusercontent.com/proxy/tTniwWHm6CPHbChnzcDCNm5YLtpvZZ8Xf9Y5FKmwU1yayQX3_ftHqrQx0aas2NYAYAXPQQ"
//                 className={AdminCSS.card_img}
//                 alt="Placement Record"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Placement Record</h5>
//                 <NavLink className={AdminCSS.btn} to="/placementDrive">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className={AdminCSS.crd4}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://banner2.cleanpng.com/20180330/icq/kisspng-sql-server-reporting-services-computer-icons-chart-report-5abe98b8c85ec3.8621092915224403768207.jpg"
//                 className={AdminCSS.card_img}
//                 alt="Report"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Report</h5>
//                 <NavLink className={AdminCSS.btn} to="/report">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className={AdminCSS.crd5}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
//                 className={AdminCSS.card_img}
//                 alt="Send Bulk SMS"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Send SMS</h5>
//                 <NavLink className={AdminCSS.btn} to="/bulkSms">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className={AdminCSS.crd5}>
//             <div className={AdminCSS.card}>
//               <img
//                 src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
//                 className={AdminCSS.card_img}
//                 alt="Send Bulk SMS"
//               />
//               <div className={AdminCSS.card_overlay}>
//                 <h5 className={AdminCSS.card_title}>Filter Student</h5>
//                 <NavLink className={AdminCSS.btn} to="/bulkSms">
//                   Click Here
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Admin;


import React from "react";
import AdminCSS from "./admin.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function Admin() {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={AdminCSS.root}>
      <h1 className={AdminCSS.admin_head}>ADMIN</h1>
      <div className={AdminCSS.logoutButton} onClick={handleLogout}>
        Logout
      </div>
      <div className={AdminCSS.card_container}>
          <div className={AdminCSS.crd1}>
            <div className={AdminCSS.card}>
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/55/47/company-profile-infographic-diagram-template-vector-22725547.jpg"
                className={AdminCSS.card_img}
                alt="Company Details"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Add Company</h5>
                <NavLink className={AdminCSS.btn} to="/companyDetails">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>

          <div className={AdminCSS.crd2}>
            <div className={AdminCSS.card}>
              <img
                src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9icyUyMHRleHR8ZW58MHx8MHx8fDA%3D"
                className={AdminCSS.card_img}
                alt="Jobs"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Jobs</h5>
                <NavLink className={AdminCSS.btn} to="/forHire">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>

          <div className={AdminCSS.crd3}>
            <div className={AdminCSS.card}>
              <img
                src="https://lh4.googleusercontent.com/proxy/tTniwWHm6CPHbChnzcDCNm5YLtpvZZ8Xf9Y5FKmwU1yayQX3_ftHqrQx0aas2NYAYAXPQQ"
                className={AdminCSS.card_img}
                alt="Placement Record"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Placement Record</h5>
                <NavLink className={AdminCSS.btn} to="/placementDrive">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>

          <div className={AdminCSS.crd4}>
            <div className={AdminCSS.card}>
              <img
                src="https://banner2.cleanpng.com/20180330/icq/kisspng-sql-server-reporting-services-computer-icons-chart-report-5abe98b8c85ec3.8621092915224403768207.jpg"
                className={AdminCSS.card_img}
                alt="Report"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Report</h5>
                <NavLink className={AdminCSS.btn} to="/report">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>

          <div className={AdminCSS.crd5}>
            <div className={AdminCSS.card}>
              <img
                src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
                className={AdminCSS.card_img}
                alt="Send Bulk SMS"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Send SMS</h5>
                <NavLink className={AdminCSS.btn} to="/bulkSms">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>

          <div className={AdminCSS.crd5}>
            <div className={AdminCSS.card}>
              <img
                src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
                className={AdminCSS.card_img}
                alt="Send Bulk SMS"
              />
              <div className={AdminCSS.card_overlay}>
                <h5 className={AdminCSS.card_title}>Filter Student</h5>
                <NavLink className={AdminCSS.btn} to="/bulkSms">
                  Click Here
                </NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Admin;


