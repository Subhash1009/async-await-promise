import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

    
  message: string = '';
 

  constructor(private dataService: DataService,private router:Router) {
  this.newData();
  }
  
  async newData() {
  try {
    const updatedMessage = await this.dataService.updateData('New Data');
    this.message=updatedMessage;
  } catch (error) {
  console.error(error);
  }
  }

}
