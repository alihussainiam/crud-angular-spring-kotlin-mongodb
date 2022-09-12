import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agency } from '../models/agency.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${baseUrl}/`);
  }

  get(id: any): Observable<Agency> {
    return this.http.get<Agency>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/`);
  }

  findByName(name: any): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${baseUrl}?name=${name}`);
  }
}