import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogTitleComponent } from './blog-title/blog-title.component';
import { LargeNewsComponent } from './large-news/large-news.component';
import { SmallNewsComponent } from './small-news/small-news.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogTitleComponent,
    LargeNewsComponent,
    SmallNewsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
