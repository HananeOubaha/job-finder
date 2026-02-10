// Modèle brut de l'API Adzuna
export interface Job {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  description: string;
  redirect_url: string;
  created: string;
  salary_min?: number;
  salary_max?: number;
}

export interface AdzunaResponse {
  results: Job[];
  count: number;
}

// Modèle mappé utilisé dans l'app
export interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  date: string;
  url: string;
  salary: string;
}
// Correction de style

// TODO: optimiser cette section
