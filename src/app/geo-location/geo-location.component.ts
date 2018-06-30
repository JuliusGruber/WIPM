import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {flatMap, switchMap} from 'rxjs/operators';
import {TwitterService} from '../services/twitter.service';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.css']
})
export class GeoLocationComponent implements OnInit {
  private  ipAddress;
  private geoAPIkey = '?access_key=eaf54a1f86d52b98d3111788fd2e802f';
  private geoURL = 'http://api.ipstack.com/';
  private fullgeoURL;
  private geoReturnJson: any;
  private trendingTopics: any;
  private country_name: string;


  constructor(private httpClient: HttpClient, private twitterService: TwitterService) { }

  ngOnInit() {
    this.httpClient.get('https://jsonip.com').pipe(
      switchMap(data => {
      console.log('th data', data);
      this.ipAddress = data;
      console.log('IP address: ' + this.ipAddress['ip']);
      this.fullgeoURL = this.geoURL + this.ipAddress['ip'] + this.geoAPIkey;
      console.log(this.fullgeoURL);
      return  this.httpClient.get(this.fullgeoURL);
    })).subscribe(data => {this.country_name = data['country_name']
      this.twitterService.getTrendingTopics(this.country_name);
    });


    //this.twitterService.getTrendingTopics(this.country_name);









  }

}
