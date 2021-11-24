import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }
        from '@angular/common/http/testing';
import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  let service: AppServiceService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AppServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test HttpClient getData', async() => {
    const testData = {"test":"API works!"};
    service.getData().subscribe(
      value => expect(value).toEqual(testData));
    const req = httpTestingController.expectOne(service.baseUrl + '/api/getData');
    req.flush(testData);
  });
});

