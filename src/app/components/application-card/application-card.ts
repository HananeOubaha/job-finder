import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Application } from '../../models/application.model';

@Component({
  selector: 'app-application-card',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './application-card.html',
  styleUrl: './application-card.css',
})
export class ApplicationCard {
  @Input({ required: true }) application!: Application;
  @Input() isEditing = false;

  @Output() edit = new EventEmitter<Application>();
  @Output() save = new EventEmitter<{ app: Application; status: string; notes: string }>();
  @Output() cancelEdit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<Application>();

  editStatus = '';
  editNotes = '';
  statuses = ['En attente', 'Entretien', 'Acceptée', 'Refusée'];

  onStartEdit(): void {
    this.editStatus = this.application.status;
    this.editNotes = this.application.notes;
    this.edit.emit(this.application);
  }

  onSave(): void {
    this.save.emit({
      app: this.application,
      status: this.editStatus,
      notes: this.editNotes
    });
  }

  onCancel(): void {
    this.cancelEdit.emit();
  }

  onDelete(): void {
    this.delete.emit(this.application);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'En attente': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Entretien': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Acceptée': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Refusée': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'En attente': return 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'Entretien': return 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155';
      case 'Acceptée': return 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'Refusée': return 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
      default: return 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }
}