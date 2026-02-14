import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Favorite } from '../../models/favorite.model';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { FavoriteCard } from '../../components/favorite-card/favorite-card';
import * as FavoritesActions from '../../store/favorites/favorites.actions';
import { selectAllFavorites, selectFavoritesLoading, selectFavoritesError, selectFavoritesSuccess } from '../../store/favorites/favorites.selectors';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [DatePipe, AsyncPipe, RouterLink, TruncatePipe, FavoriteCard],
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
}