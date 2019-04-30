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

  constructor(private airlineDataService: AirlineDataService, private router: Router) {
  }

  ngOnInit() {
    this.airlineDataService.getStatistics()
      .subscribe((data: any) => {
        if (data) {
          this.statisticData = data;
          this.showTable = true;
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
