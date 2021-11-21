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

  ngOnInit() {
     this.getDataFromApi();
  }

  getDataFromApi() {
   this.service.getData().subscribe(
      (response) => {
      this.title = response;
      return response;
    }, (error) => {
      return error
    })
  }
}
