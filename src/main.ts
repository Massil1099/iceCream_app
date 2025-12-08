import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { IceCreamRepository } from './app/repository/ice-cream-repository';
import { IceCreamRepositoryDummyImpl } from './app/repository/ice-cream-repository-dummy-impl';

bootstrapApplication(AppComponent, {
  providers: [
    { 
      provide : IceCreamRepository , useClass : IceCreamRepositoryDummyImpl},

      {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
