import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AirlineDataService} from '../airlineData/airline-data.service';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';


export interface User {
  code: string;
  name: string;
}

@Component({
  selector: 'app-klm',
  templateUrl: './klm.component.html',
  styleUrls: ['./klm.component.scss']
})
export class KlmComponent implements OnInit {

  myControl = new FormControl();
  myDestControl = new FormControl();
  filteredOptions: any[];
  filteredOptions2: any[];
  airlineData: string[] = [];
  initialOptions: any[];
  originCode: string;
  destCode: string;
  airlineFare: string;
  airlineCurrency: string;
  airLineFareData: boolean;

  constructor(private airlineDataService: AirlineDataService, private router: Router ) {

  }
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  ngOnInit() {
    this.filteredOptions = [];
    this.filteredOptions2 = [];
    this.showConfig();
    this.myControl.valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' ? value : value.code),
        map(code => code ? this.oringinfilter(code) : this.filteredOptions.slice())
      ).subscribe(response => {
      this.filteredOptions = response;
    });


    this.filteredOptions = [];
    this.myDestControl.valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' ? value : value.code),
        map(code => code ? this.destfilter(code) : this.filteredOptions2.slice())
      ).subscribe(response => {
      this.filteredOptions2 = response;
    });
  }
  private destfilter(code: string): any[] {
    this.airLineFareData = false;
    const filterValue = code.toLowerCase();
    this.destCode = code;

    return this.initialOptions.filter(option => option.code.toLowerCase().indexOf(filterValue) === 0);
  }

  private oringinfilter(code: string): any[] {
    const filterValue = code.toLowerCase();
    this.airLineFareData = false;
    this.originCode = code;
    return this.initialOptions.filter(option => option.code.toLowerCase().indexOf(filterValue) === 0);
  }

  showConfig() {
    this.filteredOptions = [];
    this.initialOptions = [];
    this.airlineDataService.getConfig()
      .subscribe((data: any) => {
       const airLineDataValue = JSON.parse(data);
       this.filteredOptions = airLineDataValue._embedded.locations ;
       this.filteredOptions2 = airLineDataValue._embedded.locations ;
       this.initialOptions = this.filteredOptions;
      });
  }
  findDeal() {
    if (this.originCode) {
      // validation
    } else {
      alert('Please Select Origin value');
    }

    if (this.destCode) {
      // validation
    } else {
      alert('Please select Destination value');
    }
    if (this.originCode && this.destCode) {
      this.airlineDataService.retrieveFare(this.originCode, this.destCode)
        .subscribe((data: any) => {
          if (data) {
            const airLineFaredata = JSON.parse(data);
            this.airlineFare = airLineFaredata.amount;
            this.airlineCurrency = airLineFaredata.currency;
            this.airLineFareData = true;
          }
        });
    }

  }
  navigateToStatistics() {
    this.router.navigate(['statistics']);
  }
  navigateToSearch() {
    this.router.navigate(['airlines']);
  }
 }
