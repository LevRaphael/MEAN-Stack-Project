import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AppServiceService} from './services/app-service.service';
import {of, throwError} from 'rxjs';

describe('AppComponent', () => {

  let component: AppComponent;
  let mockAppServiceService: AppServiceService;

  beforeEach(async () => {

    mockAppServiceService = jasmine.createSpyObj<AppServiceService>(['getData']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {provide: AppServiceService, useValue: mockAppServiceService}
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    component = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('should init', () => {
    (mockAppServiceService.getData as jasmine.Spy).and.returnValue(of('MY_TITLE'));
    component.ngOnInit();
    expect(component.title).toEqual('MY_TITLE');
  });

  it('should init but with error', () => {
    (mockAppServiceService.getData as jasmine.Spy).and.returnValue(throwError(() => new Error('test')));
    component.ngOnInit();
    expect(component.title).toBeUndefined();
  });

});
