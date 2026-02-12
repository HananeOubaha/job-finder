import { Component, inject, OnInit } from '@angular/core';
// Nettoyage du code
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
// Amélioration de la structure
import { AuthService } from '../../services/auth.service';
// Ajustement mineur
import { Favorite } from '../../models/favorite.model';
import * as FavoritesActions from '../../store/favorites/favorites.actions';
import { selectAllFavorites, selectFavoritesLoading, selectFavoritesError, selectFavoritesSuccess } from '../../store/favorites/favorites.selectors';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [DatePipe, AsyncPipe, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  private store = inject(Store);
  private authService = inject(AuthService);

  favorites$ = this.store.select(selectAllFavorites);
  loading$ = this.store.select(selectFavoritesLoading);
  error$ = this.store.select(selectFavoritesError);
  success$ = this.store.select(selectFavoritesSuccess);

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (user?.id) {
      this.store.dispatch(FavoritesActions.loadFavorites({ userId: user.id }));
    }
  }

  removeFavorite(favorite: Favorite): void {
    if (favorite.id) {
      this.store.dispatch(FavoritesActions.removeFavorite({ favoriteId: favorite.id }));
    }
  }

  clearMessage(): void {
    this.store.dispatch(FavoritesActions.clearFavoritesMessage());
  }

  truncateDescription(text: string, maxLength: number = 120): string {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
}
// Optimisation RxJS

// Documentation ajoutée

// Refactoring pour clarté
