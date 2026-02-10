import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
// Note: vérifier le comportement
import { provideRouter } from '@angular/router';
// Nettoyage du code
// TODO: optimiser cette section
// Nettoyage du code
// Ajustement mineur

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { favoritesReducer } from './store/favorites/favorites.reducer';
import { FavoritesEffects } from './store/favorites/favorites.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ favorites: favoritesReducer }),
    provideEffects([FavoritesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
// TODO: optimiser cette section

// Amélioration Angular

// Correction de style
