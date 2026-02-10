import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
// Ajustement mineur
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
  { path: 'search', loadComponent: () => import('./pages/search/search').then(m => m.Search) },
  { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites').then(m => m.Favorites), canActivate: [authGuard] },
  { path: 'applications', loadComponent: () => import('./pages/applications/applications').then(m => m.Applications), canActivate: [authGuard] },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.Profile), canActivate: [authGuard] },
  { path: '**', redirectTo: 'search' }
];
// Refactoring pour clarté

// Optimisation RxJS

// Documentation ajoutée
