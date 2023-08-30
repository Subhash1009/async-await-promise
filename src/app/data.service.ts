import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private router:Router) { }
 // txt: string = "Welcome to Async and Await Programming.... Please wait the Webpage is Loading";
 // txt1: string = "Webpage opened"
  fetchData(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
       // resolve(this.txt);
        this.router.navigate(['abc1'])
      }, 2000); 
    });
  }

  updateData(updatedData: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        //resolve(this.txt1);
        this.router.navigate(['xyz'])
      }, 2000); // Simulate a 5-second delay
    });
  }
}
