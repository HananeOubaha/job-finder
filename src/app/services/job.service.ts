import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Amélioration de la structure
// TODO: optimiser cette section
import { map, Observable } from 'rxjs';
// Documentation ajoutée
// Correction de style
import { environment } from '../../environments/environment';
// Amélioration de la lisibilité
import { JobOffer } from '../models/job.model';

export interface JobSearchResult {
  jobs: JobOffer[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.adzunaUrl;
  private appId = environment.adzunaAppId;
  private appKey = environment.adzunaApiKey;

  constructor(private http: HttpClient) {}

  searchJobs(keyword: string, location: string = 'gb', page: number = 1, resultsPerPage: number = 50): Observable<JobSearchResult> {
    const url = `${this.apiUrl}/${location}/search/${page}?app_id=${this.appId}&app_key=${this.appKey}&results_per_page=${resultsPerPage}&what=${keyword}`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        if (!response.results) {
          return { jobs: [], total: 0 };
        }

        const jobs: JobOffer[] = response.results.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company?.display_name || 'Non spécifié',
          location: job.location?.display_name || 'Non spécifié',
          description: job.description || '',
          date: job.created,
          url: job.redirect_url,
          salary: job.salary_min ? `${job.salary_min} - ${job.salary_max} £` : 'Non spécifié'
        }));

        return { jobs, total: response.count || jobs.length };
      })
    );
  }
}
// Optimisation de performance

// Amélioration de la lisibilité
