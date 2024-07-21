import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import TeacherCSS from './Teacher.module.css';

function Teacher() {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={TeacherCSS.home}>
      <div className={TeacherCSS.std}>
        <h1>FACULTY MODULE</h1>

        <div className={TeacherCSS.logoutButton} onClick={handleLogout}>
          Logout
        </div>

        <div className={TeacherCSS.wrapper}>
          <div className={TeacherCSS.card}>
            <img src="https://c7.alamy.com/comp/2FM8PWN/company-text-on-red-round-grungy-texture-stamp-2FM8PWN.jpg" alt="Aj" />
            <div className={TeacherCSS.info}>
              <h1>Company Details</h1>
              <NavLink className={TeacherCSS.btn} to='/company1'>Click here</NavLink>
            </div>
          </div>

          <div className={TeacherCSS.card}>
            <img src="https://ugc.production.linktr.ee/etW9YnSQaS3uJND7VJRp_fEq7oG84qd5znVvD?io=true&size=avatar-v3_0" alt="Aj" />
            <div className={TeacherCSS.info}>
              <h1>Placement Drive Record</h1>
              <NavLink className={TeacherCSS.btn} to='/placementRecord'>Click here</NavLink>
            </div>
          </div>

          <div className={TeacherCSS.card}>
            <img src="https://banner2.cleanpng.com/20180330/icq/kisspng-sql-server-reporting-services-computer-icons-chart-report-5abe98b8c85ec3.8621092915224403768207.jpg" alt="Aj" />
            <div className={TeacherCSS.info}>
              <h1>Download report</h1>
              <NavLink className={TeacherCSS.btn} to='/downloadRecord'>Click here</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
