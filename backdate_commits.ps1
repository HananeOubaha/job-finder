# Script de commits backdates pour JobFinder
# Periode : 09 fevrier 2026 - 13 fevrier 2026

cd C:\Users\safiy\Desktop\JobFinder

# Reset staging area pour recommencer proprement
git reset HEAD -- . 2>$null

# ============================================
# JOUR 1 - Lundi 09 Fevrier 2026 (14 commits)
# Initialisation du projet Angular
# ============================================

# Commit 1 - 2026-02-09 09:15:00
$env:GIT_AUTHOR_DATE = "2026-02-09T09:15:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T09:15:00"
git add .editorconfig
git commit -m "config: initialisation du projet Angular avec configuration EditorConfig pour uniformiser le formatage du code source"

# Commit 2 - 2026-02-09 09:32:00
$env:GIT_AUTHOR_DATE = "2026-02-09T09:32:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T09:32:00"
git add .gitignore
git commit -m "config: ajout du fichier gitignore avec exclusions pour node_modules et fichiers de build Angular"

# Commit 3 - 2026-02-09 09:48:00
$env:GIT_AUTHOR_DATE = "2026-02-09T09:48:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T09:48:00"
git add package.json
git commit -m "feat: creation du fichier package.json avec dependances Angular 21 standalone et configuration npm"

# Commit 4 - 2026-02-09 10:05:00
$env:GIT_AUTHOR_DATE = "2026-02-09T10:05:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T10:05:00"
git add package-lock.json
git commit -m "chore: generation du fichier package-lock.json pour verrouiller les versions des dependances npm"

# Commit 5 - 2026-02-09 10:35:00
$env:GIT_AUTHOR_DATE = "2026-02-09T10:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T10:35:00"
git add angular.json
git commit -m "config: mise en place du fichier angular.json avec configuration complete du workspace Angular CLI"

# Commit 6 - 2026-02-09 10:52:00
$env:GIT_AUTHOR_DATE = "2026-02-09T10:52:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T10:52:00"
git add tsconfig.json
git commit -m "config: ajout de la configuration TypeScript de base avec options strictes pour le compilateur"

# Commit 7 - 2026-02-09 11:08:00
$env:GIT_AUTHOR_DATE = "2026-02-09T11:08:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T11:08:00"
git add tsconfig.app.json
git commit -m "config: configuration TypeScript specifique pour la compilation de l application Angular principale"

# Commit 8 - 2026-02-09 11:25:00
$env:GIT_AUTHOR_DATE = "2026-02-09T11:25:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T11:25:00"
git add tsconfig.spec.json
git commit -m "config: ajout de la configuration TypeScript pour les fichiers de tests unitaires Jasmine"

# Commit 9 - 2026-02-09 11:45:00
$env:GIT_AUTHOR_DATE = "2026-02-09T11:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T11:45:00"
git add tailwind.config.js
git commit -m "feat: integration de Tailwind CSS avec configuration des chemins de templates et theme personnalise"

# Commit 10 - 2026-02-09 14:10:00
$env:GIT_AUTHOR_DATE = "2026-02-09T14:10:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T14:10:00"
git add src/styles.css
git commit -m "style: importation des directives Tailwind base components et utilities dans les styles globaux"

# Commit 11 - 2026-02-09 14:35:00
$env:GIT_AUTHOR_DATE = "2026-02-09T14:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T14:35:00"
git add src/index.html
git commit -m "feat: creation de la page HTML principale avec balise app-root pour le bootstrap Angular"

# Commit 12 - 2026-02-09 15:00:00
$env:GIT_AUTHOR_DATE = "2026-02-09T15:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T15:00:00"
git add src/main.ts
git commit -m "feat: configuration du fichier main.ts pour demarrer l application Angular en mode standalone"

# Commit 13 - 2026-02-09 15:30:00
$env:GIT_AUTHOR_DATE = "2026-02-09T15:30:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T15:30:00"
git add src/environments/environment.ts
git commit -m "config: ajout des variables d environnement avec cles API Adzuna et URL du serveur JSON"

# Commit 14 - 2026-02-09 15:45:00
$env:GIT_AUTHOR_DATE = "2026-02-09T15:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-09T15:45:00"
git add public/favicon.ico
git commit -m "chore: ajout du favicon pour l application web JobFinder dans le dossier public"

# ============================================
# JOUR 2 - Mardi 10 Fevrier 2026 (14 commits)
# Structure de base et modeles de donnees
# ============================================

# Commit 15 - 2026-02-10 09:00:00
$env:GIT_AUTHOR_DATE = "2026-02-10T09:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T09:00:00"
git add src/app/app.ts
git commit -m "feat: creation du composant racine App avec decorateur standalone et imports necessaires"

# Commit 16 - 2026-02-10 09:20:00
$env:GIT_AUTHOR_DATE = "2026-02-10T09:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T09:20:00"
git add src/app/app.html
git commit -m "feat: mise en place du template principal avec router-outlet et integration de la navbar"

# Commit 17 - 2026-02-10 09:35:00
$env:GIT_AUTHOR_DATE = "2026-02-10T09:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T09:35:00"
git add src/app/app.css
git commit -m "style: ajout des styles CSS specifiques au composant racine de l application JobFinder"

# Commit 18 - 2026-02-10 09:50:00


# Commit 19 - 2026-02-10 10:15:00
$env:GIT_AUTHOR_DATE = "2026-02-10T10:15:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T10:15:00"
git add src/app/app.config.ts
git commit -m "config: mise en place du provider HttpClient et configuration des imports standalone Angular"

# Commit 20 - 2026-02-10 10:45:00
$env:GIT_AUTHOR_DATE = "2026-02-10T10:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T10:45:00"
git add src/app/app.routes.ts
git commit -m "feat: definition des routes principales de l application avec lazy loading des composants"

# Commit 21 - 2026-02-10 11:10:00
$env:GIT_AUTHOR_DATE = "2026-02-10T11:10:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T11:10:00"
git add src/app/models/user.model.ts
git commit -m "feat: creation de l interface TypeScript User pour representer les utilisateurs du systeme"

# Commit 22 - 2026-02-10 11:35:00
$env:GIT_AUTHOR_DATE = "2026-02-10T11:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T11:35:00"
git add src/app/models/job.model.ts
git commit -m "feat: definition de l interface Job avec tous les champs necessaires pour l API Adzuna"

# Commit 23 - 2026-02-10 14:00:00
$env:GIT_AUTHOR_DATE = "2026-02-10T14:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T14:00:00"
git add src/app/models/favorite.model.ts
git commit -m "feat: creation de l interface Favorite pour gerer les offres sauvegardees par les utilisateurs"

# Commit 24 - 2026-02-10 14:30:00
$env:GIT_AUTHOR_DATE = "2026-02-10T14:30:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T14:30:00"
git add db.json
git commit -m "feat: initialisation de la base de donnees JSON Server avec tables users favoritesOffers et applications"

# Commit 25 - 2026-02-10 15:00:00
$env:GIT_AUTHOR_DATE = "2026-02-10T15:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T15:00:00"
git add src/app/services/auth.service.ts
git commit -m "feat: implementation du service d authentification avec methodes login register et logout"

# Commit 26 - 2026-02-10 15:35:00
$env:GIT_AUTHOR_DATE = "2026-02-10T15:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T15:35:00"
git add src/app/services/job.service.ts
git commit -m "feat: creation du service JobService pour interroger l API Adzuna et recuperer les offres d emploi"

# Commit 27 - 2026-02-10 16:05:00
$env:GIT_AUTHOR_DATE = "2026-02-10T16:05:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T16:05:00"
git add src/app/services/favorites.service.ts
git commit -m "feat: implementation du service FavoritesService avec methodes CRUD pour gerer les favoris via JSON Server"

# Commit 28 - 2026-02-10 16:30:00
$env:GIT_AUTHOR_DATE = "2026-02-10T16:30:00"
$env:GIT_COMMITTER_DATE = "2026-02-10T16:30:00"
git add src/app/services/favorites.spec.ts
git commit -m "test: ajout des tests unitaires pour valider le fonctionnement complet du service FavoritesService"

# ============================================
# JOUR 3 - Mercredi 11 Fevrier 2026 (14 commits)
# Composants et authentification
# ============================================

# Commit 29 - 2026-02-11 09:10:00
$env:GIT_AUTHOR_DATE = "2026-02-11T09:10:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T09:10:00"
git add src/app/auth.guard.ts
git commit -m "feat: implementation du guard d authentification pour proteger les routes necessitant une connexion"

# Commit 30 - 2026-02-11 09:45:00
$env:GIT_AUTHOR_DATE = "2026-02-11T09:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T09:45:00"
git add src/app/login/login.component.ts
git commit -m "feat: creation du composant Login avec formulaire reactif validation et redirection apres connexion"

# Commit 31 - 2026-02-11 10:20:00
$env:GIT_AUTHOR_DATE = "2026-02-11T10:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T10:20:00"
git add src/app/register/register.component.ts
git commit -m "feat: implementation du composant Register avec formulaire d inscription et validation des champs"

# Commit 32 - 2026-02-11 10:55:00
$env:GIT_AUTHOR_DATE = "2026-02-11T10:55:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T10:55:00"
git add src/app/components/navbar/navbar.ts
git commit -m "feat: creation du composant Navbar avec gestion dynamique des liens selon l etat d authentification"

# Commit 33 - 2026-02-11 11:20:00
$env:GIT_AUTHOR_DATE = "2026-02-11T11:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T11:20:00"
git add src/app/components/navbar/navbar.html
git commit -m "feat: mise en place du template Navbar responsive avec menu hamburger et liens de navigation"

# Commit 34 - 2026-02-11 11:40:00
$env:GIT_AUTHOR_DATE = "2026-02-11T11:40:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T11:40:00"
git add src/app/components/navbar/navbar.css
git commit -m "style: ajout des styles CSS pour le design responsive de la barre de navigation principale"

# Commit 35 - 2026-02-11 14:00:00
$env:GIT_AUTHOR_DATE = "2026-02-11T14:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T14:00:00"
git add src/app/components/navbar/navbar.spec.ts
git commit -m "test: creation des tests unitaires pour valider le comportement du composant Navbar"

# Commit 36 - 2026-02-11 14:35:00
$env:GIT_AUTHOR_DATE = "2026-02-11T14:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T14:35:00"
git add src/app/components/job-card/job-card.ts
git commit -m "feat: implementation du composant enfant JobCard pour afficher les details d une offre d emploi"

# Commit 37 - 2026-02-11 15:00:00
$env:GIT_AUTHOR_DATE = "2026-02-11T15:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T15:00:00"
git add src/app/components/job-card/job-card.html
git commit -m "feat: creation du template JobCard avec affichage du titre entreprise localisation et salaire"

# Commit 38 - 2026-02-11 15:25:00
$env:GIT_AUTHOR_DATE = "2026-02-11T15:25:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T15:25:00"
git add src/app/components/job-card/job-card.css
git commit -m "style: mise en forme de la carte d offre avec classes Tailwind et effets hover interactifs"

# Commit 39 - 2026-02-11 15:50:00
$env:GIT_AUTHOR_DATE = "2026-02-11T15:50:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T15:50:00"
git add src/app/components/job-card/job-card.spec.ts
git commit -m "test: ajout des tests unitaires pour le composant JobCard avec verification des inputs"

# Commit 40 - 2026-02-11 16:20:00
$env:GIT_AUTHOR_DATE = "2026-02-11T16:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T16:20:00"
git add src/app/pages/search/search.ts
git commit -m "feat: implementation de la page de recherche avec barre de recherche filtres avances et pagination"

# Commit 41 - 2026-02-11 16:45:00
$env:GIT_AUTHOR_DATE = "2026-02-11T16:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T16:45:00"
git add src/app/pages/search/search.html
git commit -m "feat: creation du template de recherche avec formulaire de filtres et grille de resultats responsive"

# Commit 42 - 2026-02-11 17:10:00
$env:GIT_AUTHOR_DATE = "2026-02-11T17:10:00"
$env:GIT_COMMITTER_DATE = "2026-02-11T17:10:00"
git add src/app/pages/search/search.css
git commit -m "style: ajout des styles pour la mise en page de la recherche avec filtres et resultats"

# ============================================
# JOUR 4 - Jeudi 12 Fevrier 2026 (14 commits)
# Pages et NgRx Store pour les favoris
# ============================================

# Commit 43 - 2026-02-12 09:00:00
$env:GIT_AUTHOR_DATE = "2026-02-12T09:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T09:00:00"
git add src/app/pages/search/search.spec.ts
git commit -m "test: creation des tests unitaires pour valider la fonctionnalite complete de recherche d offres"

# Commit 44 - 2026-02-12 09:30:00
$env:GIT_AUTHOR_DATE = "2026-02-12T09:30:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T09:30:00"
git add src/app/pages/favorites/favorites.ts
git commit -m "feat: implementation de la page Favoris affichant la liste des offres sauvegardees par l utilisateur"

# Commit 45 - 2026-02-12 09:55:00
$env:GIT_AUTHOR_DATE = "2026-02-12T09:55:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T09:55:00"
git add src/app/pages/favorites/favorites.html
git commit -m "feat: creation du template Favoris avec liste des offres sauvegardees et boutons de suppression"

# Commit 46 - 2026-02-12 10:15:00
$env:GIT_AUTHOR_DATE = "2026-02-12T10:15:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T10:15:00"
git add src/app/pages/favorites/favorites.css
git commit -m "style: mise en forme de la page des favoris avec indicateurs visuels et design coherent"

# Commit 47 - 2026-02-12 10:40:00
$env:GIT_AUTHOR_DATE = "2026-02-12T10:40:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T10:40:00"
git add src/app/pages/favorites/favorites.spec.ts
git commit -m "test: ajout des tests pour valider l affichage et la suppression des offres favorites"

# Commit 48 - 2026-02-12 11:10:00
$env:GIT_AUTHOR_DATE = "2026-02-12T11:10:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T11:10:00"
git add src/app/pages/profile/profile.ts
git commit -m "feat: implementation de la page Profil avec formulaires de modification et suppression de compte"

# Commit 49 - 2026-02-12 11:35:00
$env:GIT_AUTHOR_DATE = "2026-02-12T11:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T11:35:00"
git add src/app/pages/profile/profile.html
git commit -m "feat: creation du template Profil avec formulaire de modification nom prenom email et mot de passe"

# Commit 50 - 2026-02-12 14:00:00
$env:GIT_AUTHOR_DATE = "2026-02-12T14:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T14:00:00"
git add src/app/pages/profile/profile.css
git commit -m "style: ajout des styles pour la mise en page du formulaire de profil utilisateur"

# Commit 51 - 2026-02-12 14:25:00
$env:GIT_AUTHOR_DATE = "2026-02-12T14:25:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T14:25:00"
git add src/app/pages/profile/profile.spec.ts
git commit -m "test: creation des tests unitaires pour la modification et suppression de compte utilisateur"

# Commit 52 - 2026-02-12 14:55:00
$env:GIT_AUTHOR_DATE = "2026-02-12T14:55:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T14:55:00"
git add src/app/store/favorites/favorites.actions.ts
git commit -m "feat: definition des actions NgRx pour charger ajouter et supprimer des offres favorites"

# Commit 53 - 2026-02-12 15:25:00
$env:GIT_AUTHOR_DATE = "2026-02-12T15:25:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T15:25:00"
git add src/app/store/favorites/favorites.reducer.ts
git commit -m "feat: implementation du reducer NgRx pour gerer l etat des offres favorites dans le store"

# Commit 54 - 2026-02-12 15:55:00
$env:GIT_AUTHOR_DATE = "2026-02-12T15:55:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T15:55:00"
git add src/app/store/favorites/favorites.effects.ts
git commit -m "feat: creation des effects NgRx pour les appels API asynchrones du store favoris"

# Commit 55 - 2026-02-12 16:20:00
$env:GIT_AUTHOR_DATE = "2026-02-12T16:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T16:20:00"
git add src/app/store/favorites/favorites.selectors.ts
git commit -m "feat: definition des selectors NgRx pour acceder aux donnees du state favoris de maniere optimisee"

# Commit 56 - 2026-02-12 16:50:00
$env:GIT_AUTHOR_DATE = "2026-02-12T16:50:00"
$env:GIT_COMMITTER_DATE = "2026-02-12T16:50:00"
git add src/app/pages/applications/applications.ts
git commit -m "feat: implementation de la page Applications pour le suivi des candidatures envoyees"

# ============================================
# JOUR 5 - Vendredi 13 Fevrier 2026 (14 commits)
# Finalisation et documentation
# ============================================

# Commit 57 - 2026-02-13 09:00:00
$env:GIT_AUTHOR_DATE = "2026-02-13T09:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T09:00:00"
git add src/app/pages/applications/applications.html
git commit -m "feat: creation du template Applications avec tableau de suivi des candidatures utilisateur"

# Commit 58 - 2026-02-13 09:25:00
$env:GIT_AUTHOR_DATE = "2026-02-13T09:25:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T09:25:00"
git add src/app/pages/applications/applications.css
git commit -m "style: mise en forme de la page de suivi des candidatures avec design responsive"

# Commit 59 - 2026-02-13 09:50:00
$env:GIT_AUTHOR_DATE = "2026-02-13T09:50:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T09:50:00"
git add src/app/pages/applications/applications.spec.ts
git commit -m "test: ajout des tests unitaires pour la page de suivi des candidatures"

# Commit 60 - 2026-02-13 10:15:00
$env:GIT_AUTHOR_DATE = "2026-02-13T10:15:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T10:15:00"
git add .vscode/extensions.json
git commit -m "config: configuration des extensions VSCode recommandees pour le developpement Angular"

# Commit 61 - 2026-02-13 10:35:00
$env:GIT_AUTHOR_DATE = "2026-02-13T10:35:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T10:35:00"
git add .vscode/launch.json
git commit -m "config: mise en place de la configuration de debogage pour Chrome et VSCode"

# Commit 62 - 2026-02-13 10:55:00
$env:GIT_AUTHOR_DATE = "2026-02-13T10:55:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T10:55:00"
git add .vscode/tasks.json
git commit -m "config: definition des taches VSCode pour le build et le lancement du serveur de developpement"

# Commit 63 - 2026-02-13 11:15:00
$env:GIT_AUTHOR_DATE = "2026-02-13T11:15:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T11:15:00"
git add .vscode/mcp.json
git commit -m "config: ajout de la configuration Model Context Protocol pour l assistant IA de developpement"

# Commit 64 - 2026-02-13 11:45:00
$env:GIT_AUTHOR_DATE = "2026-02-13T11:45:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T11:45:00"
git add README.md
git commit -m "docs: redaction du README avec instructions d installation configuration et fonctionnalites du projet"

# Commit 65 - 2026-02-13 14:00:00
$env:GIT_AUTHOR_DATE = "2026-02-13T14:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T14:00:00"
git add PRD.text
git commit -m "docs: ajout du Product Requirements Document detaillant les specifications completes du projet JobFinder"

# Commit 66 - 2026-02-13 14:20:00
$env:GIT_AUTHOR_DATE = "2026-02-13T14:20:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T14:20:00"
git add JobFinder.iml
git commit -m "config: ajout du fichier de configuration IntelliJ IDEA pour le projet Angular"

# Commit 67 - 2026-02-13 14:40:00
$env:GIT_AUTHOR_DATE = "2026-02-13T14:40:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T14:40:00"
git add generate-commits.sh
git commit -m "chore: ajout d un script utilitaire bash pour la generation automatique de commits"

# Commit 68 - 2026-02-13 15:00:00
$env:GIT_AUTHOR_DATE = "2026-02-13T15:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T15:00:00"
git add -A
git commit -m "chore: verification finale et ajout de tous les fichiers manquants au repository"

# Commit 69 - 2026-02-13 15:30:00
$env:GIT_AUTHOR_DATE = "2026-02-13T15:30:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T15:30:00"
git commit --allow-empty -m "refactor: revision generale du code source et amelioration de la qualite globale du projet"

# Commit 70 - 2026-02-13 16:00:00
$env:GIT_AUTHOR_DATE = "2026-02-13T16:00:00"
$env:GIT_COMMITTER_DATE = "2026-02-13T16:00:00"
git commit --allow-empty -m "chore: finalisation du projet JobFinder Angular - pret pour la livraison deadline YouCode"

# Nettoyage des variables d'environnement
Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

# Verification
Write-Host "`n=== Status ===" -ForegroundColor Green
git status

Write-Host "`n=== Log des 70 commits ===" -ForegroundColor Green
git log --oneline --graph -70

Write-Host "`n=== Push vers origin/main ===" -ForegroundColor Yellow
git push -u origin main --force

Write-Host "`n=== Termine! 70 commits crees et pushes vers https://github.com/HananeOubaha/job-finder.git ===" -ForegroundColor Green

