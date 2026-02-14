import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApplicationsService } from '../../services/applications.service';
import { AuthService } from '../../services/auth.service';
import { Application } from '../../models/application.model';
import { ApplicationCard } from '../../components/application-card/application-card';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [FormsModule, RouterLink, ApplicationCard],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications implements OnInit {
  private applicationsService = inject(ApplicationsService);
  private authService = inject(AuthService);

  applications = signal<Application[]>([]);
  isLoading = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  selectedStatus = '';
  statuses = ['En attente', 'Entretien', 'Acceptée', 'Refusée'];

  editingId = signal<string | null>(null);

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    const user = this.authService.currentUser();
    if (!user?.id) return;

    this.isLoading.set(true);
    this.applicationsService.getApplicationsByUser(user.id).subscribe({
      next: (apps) => {
        const sorted = apps.sort((a, b) =>
          new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime()
        );
        this.applications.set(sorted);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Erreur lors du chargement des candidatures.');
        this.isLoading.set(false);
      }
    });
  }

  get filteredApplications(): Application[] {
    if (!this.selectedStatus) return this.applications();
    return this.applications().filter(app => app.status === this.selectedStatus);
  }

  getStatusCount(status: string): number {
    return this.applications().filter(app => app.status === status).length;
  }

  get totalApplications(): number {
    return this.applications().length;
  }

  getStatusEmoji(status: string): string {
    switch (status) {
      case 'En attente': return '⏳';
      case 'Entretien': return '🤝';
      case 'Acceptée': return '✅';
      case 'Refusée': return '❌';
      default: return '📋';
    }
  }

  startEdit(app: Application): void {
    this.editingId.set(app.id || null);
  }

  cancelEdit(): void {
    this.editingId.set(null);
  }

  saveEdit(event: { app: Application; status: string; notes: string }): void {
    if (!event.app.id) return;

    this.applicationsService.updateApplication(event.app.id, {
      status: event.status as Application['status'],
      notes: event.notes,
    }).subscribe({
      next: () => {
        this.successMessage.set('Candidature mise à jour !');
        this.editingId.set(null);
        this.loadApplications();
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: () => {
        this.errorMessage.set('Erreur lors de la mise à jour.');
        setTimeout(() => this.errorMessage.set(''), 3000);
      }
    });
  }

  deleteApplication(app: Application): void {
    if (!app.id) return;
    if (!confirm(`Supprimer la candidature pour "${app.title}" ?`)) return;

    this.applicationsService.deleteApplication(app.id).subscribe({
      next: () => {
        this.successMessage.set('Candidature supprimée !');
        this.loadApplications();
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: () => {
        this.errorMessage.set('Erreur lors de la suppression.');
        setTimeout(() => this.errorMessage.set(''), 3000);
      }
    });
  }
}