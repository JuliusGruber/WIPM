import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet-output-list',
  templateUrl: './tweet-output-list.component.html',
  styleUrls: ['./tweet-output-list.component.css']
})
export class TweetOutputListComponent implements OnInit {
  @Input() tweetArray: Array<any>;
  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
