import { Injectable, signal } from '@angular/core';
// Optimisation de performance
import { HttpClient } from '@angular/common/http';
// Documentation ajoutée
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/users';
    // Signal to hold the current user state for reactive updates in components (e.g., Navbar)
    currentUser = signal<User | null>(this.getUserFromStorage());

    constructor(private http: HttpClient, private router: Router) { }

    /**
     * Registers a new user.
     * Checks if the email already exists before registering.
     */
    register(user: User): Observable<User> {
        return this.http.get<User[]>(`${this.apiUrl}?email=${user.email}`).pipe(
            switchMap(users => {
                if (users.length > 0) {
                    throw new Error('Email already exists');
                }
                return this.http.post<User>(this.apiUrl, user);
            })
        );
    }

    /**
     * Logs in a user.
     * Verifies email and password against the simulated backend.
     */
    login(email: string, password: string): Observable<User> {
        return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
            map(users => {
                if (users.length === 0) {
                    throw new Error('Invalid email or password');
                }
                const user = users[0];

                // Remove password before storing in local storage for security simulation
                const { password, ...userWithoutPassword } = user;
                this.saveUserToStorage(userWithoutPassword as User);
                this.currentUser.set(userWithoutPassword as User);
                return userWithoutPassword as User;
            })
        );
    }

    /**
     * Logs out the current user.
     * Clears storage and resets the signal.
     */
    logout(): void {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        this.currentUser.set(null);
        this.router.navigate(['/login']);
    }

    private saveUserToStorage(user: User): void {
        // Using localStorage as per requirement (justification: persistent login)
        // Could toggle between local/session based on "Remember me" checkbox if needed
        localStorage.setItem('user', JSON.stringify(user));
    }

    private getUserFromStorage(): User | null {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    isLoggedIn(): Observable<boolean> {
        return of(!!this.currentUser());
    }

    // ...existing code...

    /**
     * Updates user profile in JSON Server and local storage.
     */
    updateUser(userId: string, updatedData: Partial<User>): Observable<User> {
        return this.http.patch<User>(`${this.apiUrl}/${userId}`, updatedData).pipe(
            tap(updatedUser => {
                const { password, ...userWithoutPassword } = updatedUser;
                this.saveUserToStorage(userWithoutPassword as User);
                this.currentUser.set(userWithoutPassword as User);
            })
        );
    }

    /**
     * Checks if an email is already used by another user.
     */
    isEmailTaken(email: string, currentUserId: string): Observable<boolean> {
        return this.http.get<User[]>(`${this.apiUrl}?email=${email}`).pipe(
            map(users => users.some(u => u.id !== currentUserId))
        );
    }
 /**
     * Deletes user account from JSON Server and logs out.
     */
 deleteAccount(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`).pipe(
        tap(() => {
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            this.currentUser.set(null);
        })
    );
}
}

// Note: vérifier le comportement

// Mise à jour composant

// Nettoyage du code
