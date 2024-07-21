package com.springboot.entities;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "company_name", length = 255)
    private String companyName;

    @Column(name = "profile", length = 255)
    private String profile;

    @Column(name = "location", length = 255)
    private String location;

    @Column(name = "number_of_candidates")
    private int numberOfCandidates;
    
    @Column(name = "`package(lpa)`")
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
		return "Company [id=" + id + ", companyName=" + companyName + ", profile=" + profile + ", location=" + location
				+ ", numberOfCandidates=" + numberOfCandidates + ", package1=" + package1 + "]";
	}

	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Company(int id, String companyName, String profile, String location, int numberOfCandidates, int package1) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.profile = profile;
		this.location = location;
		this.numberOfCandidates = numberOfCandidates;
		this.package1 = package1;
	}
    
    

	
    
    

    // Constructor, getters, setters, and toString methods
}
