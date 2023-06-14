import { Component,OnInit} from '@angular/core';
import { Donor } from '../donor.model';
import { DonorService } from '../donor.service';
@Component({
  selector: 'app-viewdonor',
  templateUrl: './viewdonor.component.html',
  styleUrls: ['./viewdonor.component.css']
})
export class ViewdonorComponent implements OnInit {
  donors!: Donor[];

  constructor(private donorService: DonorService) { }

  ngOnInit(): void {
    this.donorService.getDonors().subscribe((donors: Donor[]) => {
      this.donors = donors;
    });
  }

} 
    
       

  
