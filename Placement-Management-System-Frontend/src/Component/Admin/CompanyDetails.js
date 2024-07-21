import React, { Component } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyCSS from './CompanyDetails.module.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      profile: "",
      location: "",
      numberOfCandidates: 0,
      package1: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, profile, location, numberOfCandidates, package1 } = this.state;
    const companyData = {
      companyName,
      profile,
      location,
      numberOfCandidates,
      package1
    };
    axios.post("http://localhost:9090/api/companys/addcompany", companyData)
      .then(res => {
        console.log(res.data);
        toast.success('Company added successfully!'); 
        this.setState({
          companyName: "",
          profile: "",
          location: "",
          numberOfCandidates: 0,
          package1: 0
        });
      })
      .catch(err => {
        console.error("Error:", err);
        // Show error toast if company addition fails
        toast.error('Failed to add company. Please try again.');
      });
  };

  render() {
    const { companyName, profile, location, numberOfCandidates, package1 } = this.state;

    return (
      <div className={CompanyCSS.companyDetailsBody}>
       <h1>Add Company</h1>
      <div className={CompanyCSS.containerHead}>
        <h1 className={CompanyCSS.title}>Add Company</h1>
        <form onSubmit={this.handleSubmit} className={CompanyCSS.form}>
          <div className={CompanyCSS.formGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className={CompanyCSS.input}
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={CompanyCSS.formGroup}>
            <label htmlFor="profile">Profile</label>
            <input
              type="text"
              className={CompanyCSS.input}
              id="profile"
              name="profile"
              value={profile}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={CompanyCSS.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className={CompanyCSS.input}
              id="location"
              name="location"
              value={location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={CompanyCSS.formGroup}>
            <label htmlFor="numberOfCandidates">Number of Candidates</label>
            <input
              type="number"
              className={CompanyCSS.input}
              id="numberOfCandidates"
              name="numberOfCandidates"
              value={numberOfCandidates}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={CompanyCSS.formGroup}>
            <label htmlFor="package1">Package (in LPA)</label>
            <input
              type="number"
              className={CompanyCSS.input}
              id="package1"
              name="package1"
              value={package1}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className={CompanyCSS.btn}>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Company;
