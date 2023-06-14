import { Component,OnInit } from '@angular/core';
import { Donor } from '../donor.model';
import { DonorService } from '../donor.service';
@Component({
  selector: 'app-updatedonor',
  templateUrl: './updatedonor.component.html',
  styleUrls: ['./updatedonor.component.css']
})
export class UpdatedonorComponent implements OnInit{
  donors!: Donor[];
  selectedDonor!: Donor;
  constructor(private donorService: DonorService) { }
  ngOnInit() {
    this.getDonors();
  }

  getDonors(): void {
    this.donorService.getDonors().subscribe((donors: Donor[]) => this.donors = donors);
  }

  onSelect(donor: Donor): void {
    this.selectedDonor = donor;
  }

  

 
}
