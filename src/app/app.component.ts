import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'Async Programming Demo'

  message: string = '';
  constructor(private dataService: DataService, private router: Router) {
    console.log("Calling load data");
    this.loadData();
    console.log("load data called")
  }

  async loadData() {
    try {
      this.message = await this.dataService.fetchData();   //Await is used to hold the response for a particualr period of time
      console.log("after await");
    } catch (error) {
      console.error(error);
    }
  }
}
