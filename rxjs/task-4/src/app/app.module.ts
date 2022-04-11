import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {TokenInfoService} from "./services/token-info.service";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TokenInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
