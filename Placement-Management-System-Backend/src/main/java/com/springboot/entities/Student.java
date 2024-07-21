package com.springboot.entities;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String firstName;
    private String lastName;
    private String email;
    @Column(name = "position", length = 100)
    private String jobRole;
    
    @Column(name = "10th(%)", length = 50)
    private double tenthPercentage;
    
    @Column(name = "12th(%)", length = 50)
    private double twelfthPercentage;
    
    private String address;
    private String city;
    private String pincode;
    @Lob
    @Column(name = "resume", length = 1000000)
    private byte[] resume;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getJobRole() {
		return jobRole;
	}
	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}
	public double getTenthPercentage() {
		return tenthPercentage;
	}
	public void setTenthPercentage(double tenthPercentage) {
		this.tenthPercentage = tenthPercentage;
	}
	public double getTwelfthPercentage() {
		return twelfthPercentage;
	}
	public void setTwelfthPercentage(double twelfthPercentage) {
		this.twelfthPercentage = twelfthPercentage;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public byte[] getResume() {
		return resume;
	}
	public void setResume(byte[] resume) {
		this.resume = resume;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", jobRole=" + jobRole + ", tenthPercentage=" + tenthPercentage + ", twelfthPercentage="
				+ twelfthPercentage + ", address=" + address + ", city=" + city + ", pincode=" + pincode + ", resume="
				+ Arrays.toString(resume) + "]";
	}
	public Student(int id, String firstName, String lastName, String email, String jobRole, double tenthPercentage,
			double twelfthPercentage, String address, String city, String pincode, byte[] resume) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.jobRole = jobRole;
		this.tenthPercentage = tenthPercentage;
		this.twelfthPercentage = twelfthPercentage;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
		this.resume = resume;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    

    // Constructors, getters, and setters
}
