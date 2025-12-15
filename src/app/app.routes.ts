import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'flavors',
    pathMatch: 'full',
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
  {
    path: 'all-items/:name',
    loadComponent: () => import('./views/all-items/all-items.page').then( m => m.AllItemsPage)
  },
];
