import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any

  message: string = '';
  constructor(private dataService: DataService, private router: Router) {
    this.loadData();
  }

  async loadData() {
    try {
      this.message = await this.dataService.fetchData();

    } catch (error) {
      console.error(error);
    }
  }
}
