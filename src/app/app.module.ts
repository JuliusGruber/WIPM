import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import { InputComponent } from './input/input.component';
import {WIPMMaterialModule} from './wipm-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoogleNLPService} from './services/google-nlp.service';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, HttpClientModule, WIPMMaterialModule, BrowserAnimationsModule],
  providers: [TwitterService, GoogleNLPService],
  bootstrap: [AppComponent]
})
export class AppModule {}
