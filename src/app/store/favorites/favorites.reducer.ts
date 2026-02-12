import { createReducer, on } from '@ngrx/store';
// Amélioration de la structure
// Correction de style
// Refactoring pour clarté
// Note: vérifier le comportement
import { Favorite } from '../../models/favorite.model';
import * as FavoritesActions from './favorites.actions';
// Amélioration de la structure

export interface FavoritesState {
  favorites: Favorite[];
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

export const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: null,
  successMessage: null,
};

export const favoritesReducer = createReducer(
  initialState,

  // Load
  on(FavoritesActions.loadFavorites, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(FavoritesActions.loadFavoritesSuccess, (state, { favorites }) => ({
    ...state,
    favorites,
    loading: false,
  })),
  on(FavoritesActions.loadFavoritesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add
  on(FavoritesActions.addFavorite, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
  })),
  on(FavoritesActions.addFavoriteSuccess, (state, { favorite }) => ({
    ...state,
    favorites: [...state.favorites, favorite],
    loading: false,
    successMessage: `"${favorite.title}" ajouté aux favoris !`,
  })),
  on(FavoritesActions.addFavoriteFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(FavoritesActions.addFavoriteDuplicate, (state, { message }) => ({
    ...state,
    loading: false,
    error: message,
  })),

  // Remove
  on(FavoritesActions.removeFavorite, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
  })),
  on(FavoritesActions.removeFavoriteSuccess, (state, { favoriteId }) => ({
    ...state,
    favorites: state.favorites.filter(f => f.id !== favoriteId),
    loading: false,
    successMessage: 'Favori supprimé avec succès !',
  })),
  on(FavoritesActions.removeFavoriteFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Clear
  on(FavoritesActions.clearFavoritesMessage, (state) => ({
    ...state,
    error: null,
    successMessage: null,
  }))
);