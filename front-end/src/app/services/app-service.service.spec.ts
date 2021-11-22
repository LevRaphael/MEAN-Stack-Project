import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }
        from '@angular/common/http/testing';
import { AppServiceService } from './app-service.service';
import { HttpClient } from '@angular/common/http';

describe('AppServiceService', () => {
  let service: AppServiceService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test HttpClient getData', async() => {
    const testData = {"test":"API works!"};
    httpClient.get('http://localhost:3000/api/getData')
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

  });

});

