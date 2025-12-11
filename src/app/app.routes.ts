import { Routes } from '@angular/router';
import { FlavorsPage } from './views/flavors/flavors.page';
import { EmptyFlavorPage } from './views/empty-flavor/empty-flavor.page';
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
  {
    path: 'empty-flavor/:name',
    loadComponent: () => import('./views/empty-flavor/empty-flavor.page').then( m => m.EmptyFlavorPage)
  },
];
