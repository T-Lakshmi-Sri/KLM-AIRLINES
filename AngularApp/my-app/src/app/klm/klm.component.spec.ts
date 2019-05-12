import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {KlmComponent} from './klm.component';
import {MatInputModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {AirlineDataService} from '../airlineData/airline-data.service';
import {FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

describe('KlmComponent', () => {
  let component: KlmComponent;
  let fixture: ComponentFixture<KlmComponent>;
  let airlineDataService = AirlineDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KlmComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, MatAutocompleteModule, MatInputModule, FormsModule],
      providers: [
        KlmComponent,
        {provide: AirlineDataService}
      ]
    })
      .compileComponents();
    component = TestBed.get(KlmComponent);
    airlineDataService = TestBed.get(AirlineDataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should retrieve airline data', () => {
    const originControl = new FormControl('originControl');
    fixture.componentInstance.myOriginControl = originControl;
    const destinationControl = new FormControl('destinationControl');
    fixture.componentInstance.myDestinationControl = destinationControl;
    const airlineData = {
      code: 'YOW',
      name: 'Ottawa International',
      description: 'Ottawa - Ottawa International (YOW), Canada',
      coordinates: {
        latitude: 45.32083,
        longitude: -75.67278
      }
    };
    const airlineService = jasmine.createSpyObj('AirlineDataService', ['getAirLineData']);
    airlineService.getAirLineData.and.returnValue(airlineData);
    component.showAirlineData();
    fixture.detectChanges();
    expect(component.airlineFare).toBeUndefined();
  });
});
