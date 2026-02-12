import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FavoritesService } from '../../services/favorites.service';
import * as FavoritesActions from './favorites.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class FavoritesEffects {
  private actions$ = inject(Actions);
  private favoritesService = inject(FavoritesService);

  loadFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.loadFavorites),
      switchMap(({ userId }) =>
        this.favoritesService.getFavoritesByUser(userId).pipe(
          map(favorites => FavoritesActions.loadFavoritesSuccess({ favorites })),
          catchError(error => of(FavoritesActions.loadFavoritesFailure({ error: error.message })))
        )
      )
    )
  );

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.addFavorite),
      mergeMap(({ favorite }) =>
        this.favoritesService.checkDuplicate(favorite.userId, favorite.jobId).pipe(
          switchMap(existing => {
            if (existing.length > 0) {
              return of(FavoritesActions.addFavoriteDuplicate({
                message: 'Cette offre est déjà dans vos favoris !'
              }));
            }
            return this.favoritesService.addFavorite(favorite).pipe(
              map(saved => FavoritesActions.addFavoriteSuccess({ favorite: saved })),
              catchError(error => of(FavoritesActions.addFavoriteFailure({ error: error.message })))
            );
          }),
          catchError(error => of(FavoritesActions.addFavoriteFailure({ error: error.message })))
        )
      )
    )
  );

  removeFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.removeFavorite),
      mergeMap(({ favoriteId }) =>
        this.favoritesService.removeFavorite(favoriteId).pipe(
          map(() => FavoritesActions.removeFavoriteSuccess({ favoriteId })),
          catchError(error => of(FavoritesActions.removeFavoriteFailure({ error: error.message })))
        )
      )
    )
  );
}