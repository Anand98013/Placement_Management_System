import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobApplicationCSS from "./JobApplication.module.css";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobRole: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    address: "",
    city: "",
    pincode: "",
    resume: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("jobRole", formData.jobRole);
    formDataToSend.append("tenthPercentage", formData.tenthPercentage);
    formDataToSend.append("twelfthPercentage", formData.twelfthPercentage);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("pincode", formData.pincode);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await axios.post(
        "http://localhost:9090/api/students/addstudent",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Student added:", response.data);
      // Reset the form data after successful submission if needed
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobRole: "",
        tenthPercentage: "",
        twelfthPercentage: "",
        address: "",
        city: "",
        pincode: "",
        resume: null,
      });
      // Show success toast message
      toast.success('Student added successfully!');
    } catch (error) {
      console.error("Error adding student:", error);
      // Show error toast message if student addition fails
      toast.error('Failed to add student. Please try again.');
    }
  };

  return (
    <div className={JobApplicationCSS.jobBody}>
      <h1>Job Application</h1>
      <div className={JobApplicationCSS.container}>
        <div className={JobApplicationCSS.applyBox}>
          <form onSubmit={handleSubmit}>
            <div className={JobApplicationCSS.formContainer}>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="jobRole">Job Role</label>
                <select
                  name="jobRole"
                  id="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Job Role</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="full-stack">Full Stack Web Development</option>
                  <option value="ui-ux">UI & UX Designer</option>
                </select>
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="tenthPercentage">10%</label>
                <input
                  type="text"
                  id="tenthPercentage"
                  name="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={handleChange}
                  placeholder="Enter Your 10%"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="twelfthPercentage">12%</label>
                <input
                  type="text"
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={handleChange}
                  placeholder="Enter your 12%"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  cols="50"
                  rows="4"
                  placeholder="Enter Address"
                  required
                ></textarea>
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter Pincode"
                  required
                />
              </div>
              <div className={JobApplicationCSS.formControl}>
                <label htmlFor="resume">Upload Your CV</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <div className={JobApplicationCSS.formControl}>
              <button type="submit">Apply Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
