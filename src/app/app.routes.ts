import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'flavors',
    pathMatch: 'full',
  },
  {
    path: 'ice-cream',
    loadComponent: () =>
      import('./views/ice-cream/ice-cream.page').then(m => m.IceCreamPage)
  },
  {
    path: 'flavors',
    loadComponent: () =>
      import('./views/flavors/flavors.page').then(m => m.FlavorsPage)
  },
];
