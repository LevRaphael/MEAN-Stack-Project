import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.title = this.getDataFromApi();
  }

  getDataFromApi() {
    this.service.getData().subscribe(
      (response) => {
      console.log('Response from api', response);
    }, (error) => {
      console.log('Error is', error);
    })
  }
}
