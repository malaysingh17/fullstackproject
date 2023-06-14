package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Donor {
	
	public Donor(String id, String name, String city, String bloodGroup, String state, String mobileNo) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.bloodGroup = bloodGroup;
		this.state = state;
		this.mobileNo = mobileNo;
	}
	@Id
	private String id;
	private String name;
	private String city;
	private String bloodGroup;
	private String state;
	private String mobileNo;
	public String getId() {
		return id;
	}
	public Donor() {}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	
	

}
