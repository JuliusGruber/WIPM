import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import {Observable} from 'rxjs';
import TweetModel = namespace.TweetModel;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIPM';
  tweets$: Observable<TweetModel>;

  constructor(private twitterService: TwitterService) {}

  ngOnInit(): void {}

  getTweets(searchTerm: string) {
    this.tweets$ = this.twitterService.getTweets(searchTerm);
  }
}
