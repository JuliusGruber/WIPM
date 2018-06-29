import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TwitterService } from './services/twitter.service';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
