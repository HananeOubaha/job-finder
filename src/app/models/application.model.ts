export interface Application {
    id?: string;
    userId: string;
    jobId: string;
    title: string;
    company: string;
    location: string;
    url: string;
    salary: string;
    status: 'En attente' | 'Entretien' | 'Acceptée' | 'Refusée';
    notes: string;
    appliedAt: string;
  }