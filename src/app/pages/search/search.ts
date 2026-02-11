import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { JobService, JobSearchResult } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
// Amélioration de la structure
import { JobOffer } from '../../models/job.model';
import { Favorite } from '../../models/favorite.model';
import { JobCard } from '../../components/job-card/job-card';
import * as FavoritesActions from '../../store/favorites/favorites.actions';
import { selectAllFavorites, selectFavoritesError, selectFavoritesSuccess } from '../../store/favorites/favorites.selectors';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, JobCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  private jobService = inject(JobService);
  private authService = inject(AuthService);
  private store = inject(Store);

  // Search inputs
  keyword = '';
  location = 'gb';

  // State
  allJobs = signal<JobOffer[]>([]);
  filteredJobs = signal<JobOffer[]>([]);
  isLoading = signal(false);
  hasSearched = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  // Pagination
  currentPage = signal(1);
  itemsPerPage = 10;
  totalResults = signal(0);

  // Auth
  isLoggedIn = this.authService.currentUser;

  // NgRx favorites
  favoriteJobIds = signal<string[]>([]);

  // Location options
  locations = [
    { code: 'gb', label: '🇬🇧 Royaume-Uni' },
    { code: 'us', label: '🇺🇸 États-Unis' },
    { code: 'fr', label: '🇫🇷 France' },
    { code: 'de', label: '🇩🇪 Allemagne' },
    { code: 'ca', label: '🇨🇦 Canada' },
    { code: 'au', label: '🇦🇺 Australie' },
  ];

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (user?.id) {
      // Charger les favoris au démarrage
      this.store.dispatch(FavoritesActions.loadFavorites({ userId: user.id }));
    }

    // Suivre les favoris pour savoir lesquels sont déjà ajoutés
    this.store.select(selectAllFavorites).subscribe(favorites => {
      this.favoriteJobIds.set(favorites.map(f => f.jobId));
    });

    // Suivre les messages de succès NgRx
    this.store.select(selectFavoritesSuccess).subscribe(msg => {
      if (msg) {
        this.successMessage.set(msg);
        setTimeout(() => {
          this.successMessage.set('');
          this.store.dispatch(FavoritesActions.clearFavoritesMessage());
        }, 3000);
      }
    });

    // Suivre les messages d'erreur NgRx
    this.store.select(selectFavoritesError).subscribe(err => {
      if (err) {
        this.errorMessage.set(err);
        setTimeout(() => {
          this.errorMessage.set('');
          this.store.dispatch(FavoritesActions.clearFavoritesMessage());
        }, 3000);
      }
    });
  }

  isJobFavorite(jobId: string): boolean {
    return this.favoriteJobIds().includes(jobId);
  }

  onSearch(): void {
    if (!this.keyword.trim()) return;

    this.isLoading.set(true);
    this.hasSearched.set(true);
    this.errorMessage.set('');
    this.currentPage.set(1);

    this.jobService.searchJobs(this.keyword.trim(), this.location).subscribe({
      next: (result: JobSearchResult) => {
        const filtered = result.jobs.filter(job =>
          job.title.toLowerCase().includes(this.keyword.trim().toLowerCase())
        );

        const sorted = filtered.sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        this.allJobs.set(sorted);
        this.totalResults.set(sorted.length);
        this.updateFilteredJobs();
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Erreur lors de la recherche. Vérifiez votre connexion.');
        this.isLoading.set(false);
      }
    });
  }

  updateFilteredJobs(): void {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredJobs.set(this.allJobs().slice(start, end));
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults() / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage.set(page);
    this.updateFilteredJobs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onAddFavorite(job: JobOffer): void {
    const user = this.authService.currentUser();
    if (!user?.id) return;

    const favorite: Favorite = {
      userId: user.id,
      jobId: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      date: job.date,
      url: job.url,
      salary: job.salary,
      addedAt: new Date().toISOString(),
    };

    this.store.dispatch(FavoritesActions.addFavorite({ favorite }));
  }

  onAddApplication(job: JobOffer): void {
    // Sera branché à l'étape candidatures
    this.successMessage.set(`Candidature pour "${job.title}" suivie !`);
    setTimeout(() => this.successMessage.set(''), 3000);
  }
}
// TODO: optimiser cette section

// Amélioration Angular

// Correction de style
