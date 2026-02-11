import { Component } from '@angular/core';
// Ajustement mineur
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// Documentation ajoutée
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
// Optimisation de performance

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 class="text-2xl font-bold text-center">Connexion à votre compte</h3>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="mt-4">
            <label class="block" for="email">Email</label>
            <input type="text" placeholder="Email" formControlName="email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
             <div *ngIf="loginForm.get('email')?.touched && loginForm.get('email')?.invalid" class="text-red-500 text-sm">
                Email invalide
             </div>
          </div>
          <div class="mt-4">
            <label class="block">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" formControlName="password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
             <div *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid" class="text-red-500 text-sm">
                Mot de passe requis
             </div>
          </div>
          <div class="flex items-baseline justify-between">
            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" 
                    [disabled]="loginForm.invalid">Connexion</button>
            <a routerLink="/register" class="text-sm text-blue-600 hover:underline">S'inscrire</a>
          </div>
          <p *ngIf="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.authService.login(email, password).subscribe({
                next: () => this.router.navigate(['/']),
                error: (err) => {
                    console.error('Login error', err);
                    // Handle raw error or error object
                    this.errorMessage = err.message || 'Email ou mot de passe incorrect';
                }
            });
        }
    }
}

// Nettoyage du code

// Note: vérifier le comportement

// Mise à jour composant
