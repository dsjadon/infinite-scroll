import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditListContainerComponent } from './components/reddit-list-container/reddit-list-container.component';
import { RedditListItemComponent } from './components/reddit-list-item/reddit-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditListContainerComponent,
    RedditListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
