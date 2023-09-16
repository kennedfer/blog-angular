import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export type News = {
  img: string;
  title: string;
  creator: string;
  text: string;
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
