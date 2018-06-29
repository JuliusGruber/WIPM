import {Component, Input, OnInit} from '@angular/core';
import {TweetModel} from '../models/tweet.model';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {
  @Input() score: number;
  @Input() tweet: TweetModel;


  constructor() { }

  ngOnInit() {
  }

}
