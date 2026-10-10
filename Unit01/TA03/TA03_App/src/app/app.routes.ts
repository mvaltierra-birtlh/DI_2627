// import { DetalleComponent } from './detalle/detalle.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'detalle/:id',
    loadComponent: () => import('./detalle/detalle.component').then((m) => m.DetalleComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
