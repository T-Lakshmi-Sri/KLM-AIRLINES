import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineDataService {

  constructor(private http: HttpClient) {
  }

  configUrl = '/travel/getAirportDetails';
  retrieveFareURL = '/travel/getFare';
  statisticsUrl = 'travel/actuator/metrics/http.server.requests';

    getConfig() {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});
    return this.http.get(this.configUrl, {responseType: 'text', headers});
  }

  // Will be implemented once statistics is done
  getStatistics() {
    return this.http.get(this.statisticsUrl);
  }

  retrieveFare(originCode, destCode) {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});
    return this.http.get(this.retrieveFareURL + '/' + originCode + '/' + destCode , {responseType: 'text', headers});
  }
}
