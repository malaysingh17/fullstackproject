import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from './donor.model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  
  private apiUrl = 'http://localhost:8080/donor/all';

  

  constructor(private http: HttpClient) { }

  getDonors(): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.apiUrl);

    
  }
}
