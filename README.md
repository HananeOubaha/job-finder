# JobFinder

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
<!-- filepath: /c:/Users/safiy/Desktop/JobFinder/README.md -->
# 💼 JobFinder - Application de Recherche d'Emploi

Application Angular permettant de rechercher des offres d'emploi, gérer ses favoris et suivre ses candidatures.

## 🚀 Technologies utilisées

- **Angular 19** (Standalone Components)
- **NgRx** (State Management - Favoris)
- **Tailwind CSS** (Styling)
- **JSON Server** (Backend simulé)
- **API Adzuna** (Offres d'emploi externes)

## 📁 Structure du projet

```
src/app/
├── components/
│   └── job-card/          # Composant enfant (carte d'offre)
├── models/
│   ├── job.model.ts       # Modèle offre d'emploi
│   ├── favorite.model.ts  # Modèle favori
│   ├── application.model.ts # Modèle candidature
│   └── user.model.ts      # Modèle utilisateur
├── pages/
│   ├── search/            # Page recherche d'emplois
│   ├── favorites/         # Page favoris
│   ├── applications/      # Page suivi candidatures
│   └── profile/           # Page profil utilisateur
├── pipes/
│   └── truncate.pipe.ts   # Pipe personnalisé
├── services/
│   ├── auth.service.ts    # Authentification
│   ├── job.service.ts     # API Adzuna
│   ├── favorites.service.ts # CRUD favoris
│   └── applications.service.ts # CRUD candidatures
├── store/
│   └── favorites/         # NgRx (actions, reducer, effects, selectors)
├── login/                 # Page connexion
├── register/              # Page inscription
├── navbar/                # Barre de navigation
└── auth.guard.ts          # Guard authentification
```

## 📋 Fonctionnalités

### 🔐 Authentification
- Inscription / Connexion
- Guard pour protéger les routes
- Gestion de session avec signals

### 🔍 Recherche d'emplois
- Recherche par mot-clé via API Adzuna
- Filtre par localisation (GB, US, FR, DE, CA, AU)
- Filtrage côté client par titre
- Tri par date (récent → ancien)
- Pagination (10 résultats/page)
- Spinner de chargement

### ⭐ Favoris (NgRx)
- Ajout/suppression de favoris
- Anti-doublon
- Indicateur visuel si déjà en favoris
- State management avec NgRx (actions, reducer, effects, selectors)
- Persistance via JSON Server

### 📋 Suivi des candidatures
- Ajout depuis la recherche
- Modification du statut (En attente, Entretien, Acceptée, Refusée)
- Notes personnalisées
- Filtrage par statut
- Statistiques par statut
- Suppression

### 👤 Profil
- Modification des informations personnelles
- Suppression de compte

## ⚙️ Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd JobFinder

# Installer les dépendances
npm install

# Lancer JSON Server (terminal 1)
npx json-server db.json

# Lancer l'application (terminal 2)
ng serve
```

## 🌐 Accès

- **Application** : http://localhost:4200
- **JSON Server** : http://localhost:3000

## 🏗️ Concepts Angular utilisés

- ✅ Standalone Components
- ✅ Signals
- ✅ NgRx (Store, Effects, Selectors)
- ✅ Lazy Loading (loadComponent)
- ✅ Pipe personnalisé (TruncatePipe)
- ✅ Composition parent/child (Search → JobCard)
- ✅ Guards (authGuard)
- ✅ Services + HttpClient
- ✅ Reactive Forms / Template-driven Forms
- ✅ Routing avec paramètres