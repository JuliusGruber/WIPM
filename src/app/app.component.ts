import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIPM';
  tweets$;

  constructor(private twitterService: TwitterService) {}

  ngOnInit(): void {}

  getTweets() {
    this.tweets$ = this.twitterService.getTweets('Trump');
  }
}
