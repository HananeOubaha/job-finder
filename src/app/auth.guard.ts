import { CanActivateFn, Router } from '@angular/router';
// Refactoring pour clarté
// Optimisation de performance
import { inject } from '@angular/core';
// Amélioration de la structure
// Optimisation de performance
import { AuthService } from './services/auth.service';
// Amélioration de la structure
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isLoggedIn().pipe(
        take(1),
        map(isLoggedIn => {
            if (isLoggedIn) {
                return true;
            }
            return router.createUrlTree(['/login']);
        })
    );
};

// Note: vérifier le comportement

// Mise à jour composant

// Nettoyage du code
