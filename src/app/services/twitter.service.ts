import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TweetModel } from '../models/tweet.model';

@Injectable()
export class TwitterService {
  authToken: string;

  tokenReceived$ = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.getAuthToken().subscribe(token => {
      console.log('Token received!', token);
      this.authToken = JSON.parse(token).access_token;
      this.tokenReceived$.next(true);
    });
  }

  private getAuthToken() {
    return this.http.get<string>(
      'https://us-central1-wipm-2b676.cloudfunctions.net/getAuthToken'
    );
  }

  getTweets(text: string): Observable<TweetModel[]> {
    if (!this.authToken) {
      console.error('No Auth token!!!');
      return;
    }

    return this.http
      .get<string>(
        'https://us-central1-wipm-2b676.cloudfunctions.net/getTweets',
        {
          params: {
            token: this.authToken,
            text: text
          }
        }
      )
      .pipe(
        map(v => JSON.parse(v)),
        map(v => (v.statuses ? v.statuses : v))
      );
  }

  getTrendingTopics(countryName: string): Observable<any> {
    console.log('twitter service getTrendingTopics() called with: ' + countryName);
    if (!this.authToken) {
      console.error('No Auth token!!!');
      return;
    }
    return this.http
      .get<string>(
        'https://us-central1-wipm-2b676.cloudfunctions.net/getTrends',
        {
          params: {
            token: this.authToken
            //text: text
          }
        }
      )
      .pipe(
        map(v => JSON.parse(v).statuses)
        // tap(console.log)
      );
  }
}
