import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private apiUrl = 'http://localhost:3000/applications';

  constructor(private http: HttpClient) {}

  getApplicationsByUser(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}?userId=${userId}`);
  }

  addApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  updateApplication(id: string, data: Partial<Application>): Observable<Application> {
    return this.http.patch<Application>(`${this.apiUrl}/${id}`, data);
  }

  deleteApplication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  checkDuplicate(userId: string, jobId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}?userId=${userId}&jobId=${jobId}`);
  }
}