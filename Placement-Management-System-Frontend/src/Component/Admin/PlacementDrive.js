import React from 'react';
import { NavLink } from "react-router-dom";
import PlacementCSS from './PlacementDrive.module.css'; // Import CSS file for styling

function PlacementDrive() {
  return (
    <div className={PlacementCSS.button_container}>
      <div className={PlacementCSS.card}>
        <NavLink to="/adddrive" className={PlacementCSS.button}>
          Add Drive
        </NavLink>
      </div>
      <div className={PlacementCSS.card}>
        <NavLink to="/viewdrive" className={PlacementCSS.button}>
          View Drive
        </NavLink>
      </div>
    </div>
  )
}

export default PlacementDrive;