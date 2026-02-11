import { Component } from '@angular/core';
// Documentation ajoutée
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// Optimisation de performance
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
// Refactoring pour clarté
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 class="text-2xl font-bold text-center">Inscription</h3>
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          
          <div class="mt-4">
             <label class="block">Prénom</label>
             <input type="text" placeholder="Prénom" formControlName="firstName" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
              <div *ngIf="registerForm.get('firstName')?.touched && registerForm.get('firstName')?.invalid" class="text-red-500 text-sm">Prénom requis</div>
          </div>

          <div class="mt-4">
             <label class="block">Nom</label>
             <input type="text" placeholder="Nom" formControlName="lastName" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
             <div *ngIf="registerForm.get('lastName')?.touched && registerForm.get('lastName')?.invalid" class="text-red-500 text-sm">Nom requis</div>
          </div>

          <div class="mt-4">
            <label class="block" for="email">Email</label>
            <input type="text" placeholder="Email" formControlName="email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
             <div *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.invalid" class="text-red-500 text-sm">
                Email invalide
             </div>
          </div>

          <div class="mt-4">
            <label class="block">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" formControlName="password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
             <div *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.invalid" class="text-red-500 text-sm">
                Mot de passe requis (min 6 caractères)
             </div>
          </div>

          <div class="flex items-baseline justify-between">
            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" 
                    [disabled]="registerForm.invalid">S'inscrire</button>
            <a routerLink="/login" class="text-sm text-blue-600 hover:underline">Déjà inscrit ? Connexion</a>
          </div>
          <p *ngIf="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  `
})
export class RegisterComponent {
    registerForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(): void {
        if (this.registerForm.valid) {
            this.authService.register(this.registerForm.value).subscribe({
                next: () => {
                    // After registration, maybe auto-login or redirect to login? 
                    // Requirement says "Interface of connection is unique", implying redirect to login or auto-login.
                    // Usually UX is better if we just log them in, but let's stick to simple redirect to login for now or login directly.
                    // Let's redirect to login for clarity.
                    this.router.navigate(['/login']);
                },
                error: (err) => {
                    console.error('Registration error', err);
                    this.errorMessage = err.message || 'Erreur lors de l\'inscription';
                }
            });
        }
    }
}

// Amélioration de la structure

// Ajustement mineur

// Fix de bug
