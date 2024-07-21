package com.springboot.payloads;

public class CompanyDto {

    private int id;
    private String companyName;
    private String profile;
    private String location;
    private int numberOfCandidates;
	private int package1;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getNumberOfCandidates() {
		return numberOfCandidates;
	}
	public void setNumberOfCandidates(int numberOfCandidates) {
		this.numberOfCandidates = numberOfCandidates;
	}
	public int getPackage1() {
		return package1;
	}
	public void setPackage1(int package1) {
		this.package1 = package1;
	}
	@Override
	public String toString() {
		return "CompanyDto [id=" + id + ", companyName=" + companyName + ", profile=" + profile + ", location="
				+ location + ", numberOfCandidates=" + numberOfCandidates + ", package1=" + package1 + "]";
	}
	public CompanyDto(int id, String companyName, String profile, String location, int numberOfCandidates,
			int package1) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.profile = profile;
		this.location = location;
		this.numberOfCandidates = numberOfCandidates;
		this.package1 = package1;
	}
	public CompanyDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

    
    
    // Constructor, getters, setters, and toString methods
}
