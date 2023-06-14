import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


function nameValidator(control: FormControl): { [s: string]: boolean } | null {
  if (!/^[a-zA-Z ]+$/.test(control.value)) {
    return {invalidName: true};
  }
  if (control.value.length < 3) {
    return {nameTooShort: true};
  }
  return null;
}




@Component({
  selector: 'app-donoradd',
  templateUrl: './donoradd.component.html',
  styleUrls: ['./donoradd.component.css']
})
export class DonoraddComponent implements OnInit {
  donorForm!: FormGroup;

  states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];
  bloodGroups =[
          'A+','A-','B+','B-','AB+','AB-','O+','O-'
  ];


  
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar,private http: HttpClient) { }

  ngOnInit(): void {
    this.donorForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      name: ['', [Validators.required, nameValidator  ]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      mobileNo: ['',[Validators.required]]
    });
  }
  onSubmit() {
    const donorData = this.donorForm.value;
    this.http.post('http://localhost:8080/donor/add', donorData).subscribe(
        ( res: any) => {
        
        console.log('Donor added successfully!',res);

        this.snackBar.open('Donor added successfully', 'Close', { duration: 5000 });
        this.donorForm.reset();
  },
       ( err: any) => {
        console.error('Error:',err);
        this.snackBar.open('Error adding donor', 'Close', { duration: 2500 });
      }
     
    );

    }

  
}
