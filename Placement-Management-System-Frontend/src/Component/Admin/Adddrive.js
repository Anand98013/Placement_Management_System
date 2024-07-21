import React, { Component } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddDriveCSS from './AddDrive.module.css';

class AddDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      passingYear: "",
      companyName: "",
      branch: "",
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
    const { studentName, passingYear, companyName, branch, package1 } = this.state;
    const drivedata = {
      studentName,
      passingYear,
      companyName,
      branch,
      package1
    };
  
    axios.post("http://localhost:9090/api/drives/add", drivedata)
      .then(res => {
        console.log(res.data);
        this.setState({
          studentName: "",
          passingYear: "",
          companyName: "",
          branch: "",
          package1: 0
        });
        toast.success('Data added successfully!');
        this.props.history.push("/forHire");
      })
      .catch(err => {
        console.error("Error:", err);
        if (err.response) {
          // Server returned an error response
          toast.error('Error adding data. Please try again.');
        } else if (err.request) {
          // Network error
          toast.error('Network error. Please check your internet connection.');
        } 
      });
  };
  
  

  render() {
    const { studentName, passingYear, companyName, branch, package1 } = this.state;

    return (
      <div className={`${AddDriveCSS.container} mt-5`}>
        <h1 className={`${AddDriveCSS['text-center']} mb-5`} style={{ textAlign: "center" }}>Add Drive Record</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={AddDriveCSS['form-group']}>
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              className={AddDriveCSS['form-control']}
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={AddDriveCSS['form-group']}>
            <label htmlFor="passingYear">Passing Year</label>
            <input
              type="text"
              className={AddDriveCSS['form-control']}
              id="passingYear"
              name="passingYear"
              value={passingYear}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={AddDriveCSS['form-group']}>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className={AddDriveCSS['form-control']}
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={AddDriveCSS['form-group']}>
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              className={AddDriveCSS['form-control']}
              id="branch"
              name="branch"
              value={branch}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={AddDriveCSS['form-group']}>
            <label htmlFor="package1">Package (in LPA)</label>
            <input
              type="number"
              className={AddDriveCSS['form-control']}
              id="package1"
              name="package1"
              value={package1}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className={`${AddDriveCSS.btn} btn-primary`}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddDrive;
