import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

Amplify.configure({
  Interactions: {
    bots: {
      'WeatherSmartBot': {
        'name': 'WeatherSmartBot',
        'alias': '$LATEST',
        'region': 'us-west-2',
      },
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
