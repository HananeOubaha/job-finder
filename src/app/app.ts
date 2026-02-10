import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />
    <main class="min-h-screen bg-gray-50">
      <router-outlet />
    </main>
  `,
})
export class App {}
// Amélioration de la lisibilité

// Vérification des types

// Optimisation de performance
