import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Favorite } from '../../models/favorite.model';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [DatePipe, TruncatePipe],
  templateUrl: './favorite-card.html',
  styleUrl: './favorite-card.css',
})
export class FavoriteCard {
  @Input({ required: true }) favorite!: Favorite;
  @Output() remove = new EventEmitter<Favorite>();

  onRemove(): void {
    this.remove.emit(this.favorite);
  }
}