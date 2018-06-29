import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const encodedBearer =
  'bmlTdWJGS2J6QXkwblIzTTFJNndKY2h5SzprRE16cmhub3d6NXhUSlQyamlhM25ncW9ZZ2FGMUk1QzZmTlRYVGVNUFc1Tzk5eFpEZA==';

export interface TwitterResponse {
  access_token: string;
  token_type: string;
}

@Injectable()
export class TwitterService {
  twitterEndpoint = 'https://api.twitter.com/';

  authToken;

  constructor(private http: HttpClient) {
    this.getAuthToken().subscribe(
      token => (this.authToken = token.access_token)
    );
  }

  getAuthToken() {
    const authEndpoint = `${this.twitterEndpoint}oauth2/token`;

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: encodedBearer,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      })
    };

    return this.http.post<TwitterResponse>(
      authEndpoint,
      'grant_type=client_credentials',
      httpOptions
    );
  }
}
