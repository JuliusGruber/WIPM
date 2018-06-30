import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { from, Observable, of, concat, interval } from 'rxjs';
import {
  filter,
  flatMap,
  scan,
  tap,
  map,
  startWith,
  mapTo,
  takeUntil
} from 'rxjs/operators';
import { GoogleNLPService } from './services/google-nlp.service';
import { TweetModel } from './models/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIPM';
  tweets$: Observable<any>;
  positiveTweets$: Observable<any>;
  neagativeTweets$: Observable<any>;

  overallScore$: Observable<number>;

  showSpinner$: Observable<boolean>;

  constructor(
    private twitterService: TwitterService,
    private languageService: GoogleNLPService
  ) {}

  ngOnInit(): void {
    this.overallScore$ = of(1);

    this.showSpinner(this.twitterService.tokenReceived$);
  }

  private showSpinner(stopStream) {
    this.showSpinner$ = concat(
      interval(100).pipe(
        mapTo(true),
        takeUntil(stopStream)
      ),
      of(false)
    );
  }

  getTweets(searchTerm: string) {
    this.tweets$ = this.twitterService.getTweets(searchTerm).pipe(
      flatMap(arrayValue => from(arrayValue)),
      flatMap(singleTweet => this.languageService.analyzeTweet(singleTweet)),
      scan((tweetsList, tweet, index) => [...tweetsList, tweet], [])
    );

    this.showSpinner(this.tweets$);

    this.positiveTweets$ = this.tweets$.pipe(
      map(arr => arr.filter(el => el.res.documentSentiment.score > 0))
    );

    this.neagativeTweets$ = this.tweets$.pipe(
      map(arr => arr.filter(el => el.res.documentSentiment.score < 0))
    );

    this.overallScore$ = concat(
      of(1),
      this.tweets$.pipe(
        map(arr =>
          arr.map(el => Math.abs(el.res.documentSentiment.score) * 100)
        ),
        map(arr => arr.reduce((acc, cur) => acc + cur, 0) / arr.length)
      )
    );
  }
}
