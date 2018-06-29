import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import { InputComponent } from './input/input.component';
import {WIPMMaterialModule} from './wipm-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, HttpClientModule, WIPMMaterialModule, BrowserAnimationsModule],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
