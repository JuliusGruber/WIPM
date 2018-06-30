import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TweetModel } from '../models/tweet.model';

@Injectable()
export class TwitterService {
  authToken: string;

  constructor(private http: HttpClient) {
    this.getAuthToken().subscribe(token => {
      console.log('Token received!', token);
      this.authToken = JSON.parse(token).access_token;
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
        map(v => JSON.parse(v).statuses)
        // tap(console.log)
      );
  }
}
