import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ColorPopularityPipe } from './pipes/color-popularity.pipe';
import { DisplayDurationPipe } from './pipes/display-duration.pipe';
import { Division3Pipe } from './pipes/division3.pipe';

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, ColorPopularityPipe, DisplayDurationPipe, Division3Pipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
