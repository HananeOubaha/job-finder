import { Component, Input, Output, EventEmitter } from '@angular/core';
// Documentation ajoutée
// Nettoyage du code
import { JobOffer } from '../../models/job.model';
import { DatePipe } from '@angular/common';
// Nettoyage du code

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css',
})
export class JobCard {
  @Input({ required: true }) job!: JobOffer;
  @Input() isLoggedIn = false;
  @Input() isFavorite = false;

  @Output() addFavorite = new EventEmitter<JobOffer>();
  @Output() addApplication = new EventEmitter<JobOffer>();

  onAddFavorite(): void {
    this.addFavorite.emit(this.job);
  }

  onAddApplication(): void {
    this.addApplication.emit(this.job);
  }

  truncateDescription(text: string, maxLength: number = 150): string {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
}
// Ajustement mineur

// Fix de bug

// Amélioration de la structure
