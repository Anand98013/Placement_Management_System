package com.springboot.payloads;

public class DriveRecordDto {

    private int id;
    private String studentName;
    private String passingYear;
    private String companyName;
    private String branch;
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
		return "DriveRecordDto [id=" + id + ", studentName=" + studentName + ", passingYear=" + passingYear
				+ ", companyName=" + companyName + ", branch=" + branch + ", package1=" + package1 + "]";
	}
	public DriveRecordDto(int id, String studentName, String passingYear, String companyName, String branch,
			int package1) {
		super();
		this.id = id;
		this.studentName = studentName;
		this.passingYear = passingYear;
		this.companyName = companyName;
		this.branch = branch;
		this.package1 = package1;
	}
	public DriveRecordDto() {
		super();
		// TODO Auto-generated constructor stub
	}
  
	
	
}
