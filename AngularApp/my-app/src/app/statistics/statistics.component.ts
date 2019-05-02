import {Component, OnInit} from '@angular/core';
import {AirlineDataService} from '../airlineData/airline-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statisticData: any;
  showTable: boolean;
  requestCount: any;
  totalResponseTimeMillis: number;
  maxResponseTimeMillis: number;
  requestCountValues: [];
  requestCount200Values: [];
  request4XXCountValues: [];
  request5XXCountValues: [];
  request200Count: any;
  request4XXCount: any;
  request5XXCount: any;
  avgRequestTime: any;
  minRequestTime: 0;

  constructor(private airlineDataService: AirlineDataService, private router: Router) {
  }

  ngOnInit() {
    this.airlineDataService.getStatistics()
      .subscribe((data: any) => {
        if (data) {
          this.requestCount200Values = [];
          this.request4XXCountValues = [];
          this.request5XXCountValues = [];
          this.statisticData = data;
          this.showTable = true;
          this.requestCount = data.availableTags[4].values.length;
          this.totalResponseTimeMillis = data.measurements[1].value;
          this.maxResponseTimeMillis = data.measurements[2].value;
          this.requestCountValues = data.availableTags[4].values;
          for (let i = 0; i < this.requestCountValues.length; i++) {
            if (this.requestCountValues[i] >= 200 && this.requestCountValues[i] < 400 ) {
              this.requestCount200Values.push(this.requestCountValues[i]);
            }
            if (this.requestCountValues[i] >= 400 && this.requestCountValues[i] < 500 ) {
                this.request4XXCountValues.push(this.requestCountValues[i]);
            }
            if (this.requestCountValues[i] >= 500 ) {
              this.request5XXCountValues.push(this.requestCountValues[i]);
            }
          }
          this.request200Count = this.requestCount200Values.length;
          this.request4XXCount = this.request4XXCountValues.length;
          this.request5XXCount = this.request5XXCountValues.length;
          this.avgRequestTime = this.totalResponseTimeMillis / 2;
        }
      });
  }

  navigateToStatistics() {
    this.router.navigate(['statistics']);
  }

  navigateToSearch() {
    this.router.navigate(['airlines']);
  }

}
