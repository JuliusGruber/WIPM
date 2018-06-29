import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import {from, Observable} from 'rxjs';
import TweetModel = namespace.TweetModel;
import {flatMap, scan} from 'rxjs/operators';
import {GoogleNLPService} from './services/google-nlp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIPM';
  tweets$: Observable<TweetModel[]>;

  constructor(private twitterService: TwitterService, private languageService: GoogleNLPService) {}

  ngOnInit(): void {}

  getTweets(searchTerm: string) {
    this.tweets$ = this.twitterService.getTweets(searchTerm).pipe(
      flatMap(arrayValue => from(arrayValue) ),
      flatMap(singleTweet => this.languageService.analyzeTweet(singleTweet.text)),
      scan((tweetsList, tweet) => [...tweetsList, tweet] , [] )

    );
  }
}
