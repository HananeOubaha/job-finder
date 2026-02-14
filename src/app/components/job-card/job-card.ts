import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobOffer } from '../../models/job.model';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [DatePipe, TruncatePipe],
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
}