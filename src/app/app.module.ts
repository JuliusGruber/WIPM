import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import { InputComponent } from './input/input.component';
import { WIPMMaterialModule } from './wipm-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleNLPService } from './services/google-nlp.service';
import { TweetOutputListComponent } from './tweet-output-list/tweet-output-list.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';

import { GaugeModule } from 'angular-gauge';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TweetOutputListComponent,
    TweetCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WIPMMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    GaugeModule.forRoot()
  ],
  providers: [TwitterService, GoogleNLPService],
  bootstrap: [AppComponent]
})
export class AppModule {}
