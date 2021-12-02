import {Component, OnInit} from '@angular/core';
import {AppServiceService} from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: any;

  constructor(private service: AppServiceService) {
  }

  ngOnInit() {
    console.log('TEST NG_INIT')
    this.getDataFromApi();
  }

  getDataFromApi() {
    console.log('TEST getDataFromApi')
    this.service.getData().subscribe(
      {
        next: (response) => {
          console.log('TEST RESPONSE')
          this.title = response
        },
        error: (error) => {
          console.log('TEST ERROR')
          console.error(error)
        }
      })
  }

}
