import { createAction, props } from '@ngrx/store';
import { Favorite } from '../../models/favorite.model';

// Load
export const loadFavorites = createAction(
  '[Favorites] Load Favorites',
  props<{ userId: string }>()
);
export const loadFavoritesSuccess = createAction(
  '[Favorites] Load Favorites Success',
  props<{ favorites: Favorite[] }>()
);
export const loadFavoritesFailure = createAction(
  '[Favorites] Load Favorites Failure',
  props<{ error: string }>()
);

// Add
export const addFavorite = createAction(
  '[Favorites] Add Favorite',
  props<{ favorite: Favorite }>()
);
export const addFavoriteSuccess = createAction(
  '[Favorites] Add Favorite Success',
  props<{ favorite: Favorite }>()
);
export const addFavoriteFailure = createAction(
  '[Favorites] Add Favorite Failure',
  props<{ error: string }>()
);
export const addFavoriteDuplicate = createAction(
  '[Favorites] Add Favorite Duplicate',
  props<{ message: string }>()
);

// Remove
export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ favoriteId: string }>()
);
export const removeFavoriteSuccess = createAction(
  '[Favorites] Remove Favorite Success',
  props<{ favoriteId: string }>()
);
export const removeFavoriteFailure = createAction(
  '[Favorites] Remove Favorite Failure',
  props<{ error: string }>()
);

// Clear messages
export const clearFavoritesMessage = createAction(
  '[Favorites] Clear Message'
);