package com.example.demo;

import java.util.ArrayList;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class BloodService {
	@Autowired
	DonorRepository donorRepo;
	// for some function i did't define repo so thats why i did not delete this static name.
	private ArrayList <Donor> bloodDoner = new ArrayList<Donor>
	(Arrays.asList(new Donor("1","harshit singh","karwi","A+","uttar pradesh","7081738194"),
			new Donor("2","rohit singh","karwi","B+","uttar pradesh","9519004017" )));
	
	
	 
	 public List<Donor> fetchdonors(){
		 List<Donor> donors= new ArrayList();
		 donorRepo.findAll().forEach(donors::add);
	        return donors;
	 };
	 public void AddDonor(Donor Needy) {
			donorRepo.save(Needy);
			
		}
	public Optional<Donor> getDonorbyid(String id) {
		
		return donorRepo.findById(id);
		  //bloodDoner.stream().filter(search->search.getId().equals(id)).findFirst().get();
	}
	public List<Donor> getDonorbycityname(String city) {
		
		return bloodDoner.stream().filter(search->search.getCity().equals(city)).collect(Collectors.toList()); 
	}
	public Donor getDonorbymobile(String mobileNo) {
		 return  bloodDoner.stream().filter(search->search.getMobileNo().equals(mobileNo)).findAny().get();
	}
	public List<Donor> getDonorbyBloodgroup(String bloodgp) {
		
		return bloodDoner.stream().filter(search->search.getBloodGroup().equals(bloodgp)).collect(Collectors.toList()); 
	}
	public void updateDonor(Donor donor, String id) {
		
		donorRepo.save(donor);
		
	}
	public void deleteDonor(String id) {
		
		donorRepo.deleteById(id);
		
	}
	

}