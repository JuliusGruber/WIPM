import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SentimentRequestModel} from '../models/sentimentRequest.model';

@Injectable()
export class GoogleNLPService {

  private apiKey = 'AIzaSyB_gwDiIaXnzK8zl8toupa3mBNfWDW48Jk';
  private httpString =  'https://language.googleapis.com/v1/documents:analyzeSentiment?key=' + this.apiKey;

  constructor(private httpClient: HttpClient) { }

  analyzeTweet(tweetText:string){
    const sentimentRequest: SentimentRequestModel = {document :{content: tweetText,type: 'PLAIN_TEXT', language: 'en' }, encodingType: 'UTF8'}
    return this.httpClient.post(this.httpString, sentimentRequest);
  }





}
