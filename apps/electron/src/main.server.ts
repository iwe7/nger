import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ServerModule } from './server/server.module';
import { environment } from './environments/environment';
import { platformElectronAppDynamic } from 'nger';
if (environment.production) {
  enableProdMode();
}

platformElectronAppDynamic().bootstrapModule(ServerModule)
  .catch(err => console.log(err));
