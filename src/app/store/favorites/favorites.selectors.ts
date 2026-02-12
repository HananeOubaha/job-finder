import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.reducer';
// Note: vérifier le comportement
// Amélioration de la structure

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

export const selectAllFavorites = createSelector(
  selectFavoritesState,
  (state) => state.favorites
);

export const selectFavoritesLoading = createSelector(
  selectFavoritesState,
  (state) => state.loading
);

export const selectFavoritesError = createSelector(
  selectFavoritesState,
  (state) => state.error
);

export const selectFavoritesSuccess = createSelector(
  selectFavoritesState,
  (state) => state.successMessage
);

export const selectIsFavorite = (jobId: string) => createSelector(
  selectAllFavorites,
  (favorites) => favorites.some(f => f.jobId === jobId)
);