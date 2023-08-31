import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private router:Router) { }
 
  fetchData(): Promise<string> {
    return new Promise<string>(() => {
      setTimeout(() => {
       // resolve(this.txt);
        this.router.navigate(['abc1'])
      }, 5000); 
    });
  }

  updateData(updatedData: string): Promise<string> {
    return new Promise<string>(() => {
      setTimeout(() => {
        //resolve(this.txt1);
        this.router.navigate(['xyz'])
      }, 5000); // Simulate a 5-second delay
    });
  }
}
