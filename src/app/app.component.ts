import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private twitterService: TwitterService) {}

  ngOnInit(): void {
    this.twitterService.getAuthToken().subscribe(console.log);
  }
}
