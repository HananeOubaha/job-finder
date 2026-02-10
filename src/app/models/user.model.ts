export interface User {
// Amélioration de la lisibilité
    id?: string; // Optional because JSON Server generates it
// Note: vérifier le comportement
// Documentation ajoutée
    email: string;
    password?: string; // Optional when stored in local storage for security
    firstName: string;
    lastName: string;
}

// Documentation ajoutée

// Refactoring pour clarté
