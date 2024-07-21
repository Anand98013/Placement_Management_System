package com.springboot.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "drivesrecord")
public class DriveRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "studentName", length = 255)
    private String studentName;

    @Column(name = "passingYear", length = 255)
    private String passingYear;

    @Column(name = "companyName", length = 255)
    private String companyName;

    @Column(name = "branch")
    private String branch;
    
    @Column(name = "package_lpa") // change from package(lpa) to package_lpa
    private int package1;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getPassingYear() {
		return passingYear;
	}

	public void setPassingYear(String passingYear) {
		this.passingYear = passingYear;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public int getPackage1() {
		return package1;
	}

	public void setPackage1(int package1) {
		this.package1 = package1;
	}

	@Override
	public String toString() {
		return "DriveRecord [id=" + id + ", studentName=" + studentName + ", passingYear=" + passingYear
				+ ", companyName=" + companyName + ", branch=" + branch + ", package1=" + package1 + "]";
	}

	public DriveRecord(int id, String studentName, String passingYear, String companyName, String branch ,
			int package1) {
		super();
		this.id = id;
		this.studentName = studentName;
		this.passingYear = passingYear;
		this.companyName = companyName;
		this.branch = branch;
		this.package1 = package1;
	}

	public DriveRecord() {
		super();
		// TODO Auto-generated constructor stub
	}

	
    
}
