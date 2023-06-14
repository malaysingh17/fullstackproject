package com.example.demo;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controllerforblood {
	@Autowired
	private BloodService BloodList;
	
	@GetMapping("/donor/all")
	public List<Donor> fetchdonors(){
		return BloodList.fetchdonors();
	}
	@PostMapping("/donor/add")
	public void AddDonor(@RequestBody Donor Needy ) {
		 BloodList.AddDonor(Needy);
	}
	
	@RequestMapping("/donor/search/{id}")
	public Optional<Donor> getDonorbyid(@PathVariable String id) {
		return BloodList.getDonorbyid(id);
		}

	@RequestMapping("/donor/searchByCity/{city}")
	public List<Donor> getDonorbycityname(@PathVariable String city) {
		  return 
				BloodList.getDonorbycityname(city);
		}
	

	@RequestMapping("/donor/searchByMobile/{MobileNo}")
	public Donor getDonorbymobile(@PathVariable String MobileNo) {
		  return BloodList.getDonorbymobile(MobileNo);
		}
	
	@RequestMapping("/donor/searchByGroup/{bloodgp}")
	public List<Donor> getDonorbyBloodgroup(@PathVariable String bloodgp) {
		return BloodList.getDonorbyBloodgroup(bloodgp);
		}
	@PostMapping("/donor/update/{id}")
		public void updateDonor(@RequestBody Donor donor,@PathVariable String id) {
		
			 BloodList.updateDonor(donor,id);
		}
		
	@PostMapping("/donor/delete/{id}")
	public void deleteDonor(@PathVariable String id) {
	
		 BloodList.deleteDonor(id);
	}
	

}