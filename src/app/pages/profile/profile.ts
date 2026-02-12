import { Component, inject, OnInit, signal } from '@angular/core';
// Refactoring pour clarté
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// Nettoyage du code
import { Router } from '@angular/router';
// Refactoring pour clarté
import { AuthService } from '../../services/auth.service';
// Amélioration de la lisibilité

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  profileForm!: FormGroup;
  passwordForm!: FormGroup;

  successMessage = signal<string>('');
  errorMessage = signal<string>('');
  showDeleteConfirm = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  showPasswordSection = signal<boolean>(false);

  ngOnInit(): void {
    const user = this.authService.currentUser();

    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.profileForm = this.fb.group({
      firstName: [user.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [user.lastName, [Validators.required, Validators.minLength(2)]],
      email: [user.email, [Validators.required, Validators.email]],
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get user() {
    return this.authService.currentUser();
  }

  // Helper getters for profile form
  get f() {
    return this.profileForm.controls;
  }

  // Helper getters for password form
  get pf() {
    return this.passwordForm.controls;
  }

  clearMessages(): void {
    this.successMessage.set('');
    this.errorMessage.set('');
  }

  onUpdateProfile(): void {
    if (this.profileForm.invalid || !this.user?.id) return;

    this.clearMessages();
    this.isLoading.set(true);

    const { firstName, lastName, email } = this.profileForm.value;

    // Check if email changed and if it's taken
    if (email !== this.user.email) {
      this.authService.isEmailTaken(email, this.user.id).subscribe({
        next: (taken) => {
          if (taken) {
            this.errorMessage.set('Cet email est déjà utilisé par un autre compte.');
            this.isLoading.set(false);
          } else {
            this.performUpdate({ firstName, lastName, email });
          }
        },
        error: () => {
          this.errorMessage.set('Erreur lors de la vérification de l\'email.');
          this.isLoading.set(false);
        }
      });
    } else {
      this.performUpdate({ firstName, lastName });
    }
  }

  private performUpdate(data: Record<string, string>): void {
    this.authService.updateUser(this.user!.id!, data).subscribe({
      next: () => {
        this.successMessage.set('Profil mis à jour avec succès !');
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Erreur lors de la mise à jour du profil.');
        this.isLoading.set(false);
      }
    });
  }

  onChangePassword(): void {
    if (this.passwordForm.invalid || !this.user?.id) return;

    this.clearMessages();

    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      this.errorMessage.set('Les mots de passe ne correspondent pas.');
      return;
    }

    this.isLoading.set(true);

    this.authService.updateUser(this.user.id, { password: newPassword }).subscribe({
      next: () => {
        this.successMessage.set('Mot de passe modifié avec succès !');
        this.passwordForm.reset();
        this.showPasswordSection.set(false);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Erreur lors du changement de mot de passe.');
        this.isLoading.set(false);
      }
    });
  }

  onDeleteAccount(): void {
    if (!this.user?.id) return;

    this.isLoading.set(true);

    this.authService.deleteAccount(this.user.id).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage.set('Erreur lors de la suppression du compte.');
        this.isLoading.set(false);
      }
    });
  }

  togglePasswordSection(): void {
    this.showPasswordSection.update(v => !v);
    this.clearMessages();
  }

  toggleDeleteConfirm(): void {
    this.showDeleteConfirm.update(v => !v);
    this.clearMessages();
  }
}
// Fix de bug

// Amélioration de la structure

// Ajustement mineur
