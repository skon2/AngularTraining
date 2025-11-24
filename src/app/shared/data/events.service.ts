import { Injectable } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:8088/api/events'; // your Spring Boot API

  constructor(private http: HttpClient) { }

  // Get all events from backend
  public getAllEvents(): Observable<Eventy[]> {
    return this.http.get<Eventy[]>(this.apiUrl);
  }

  // Get event by ID from backend
  public getEventById(id: number): Observable<Eventy> {
    return this.http.get<Eventy>(`${this.apiUrl}/${id}`);
  }

  // Create new event
  public createEvent(event: Eventy): Observable<Eventy> {
    return this.http.post<Eventy>(this.apiUrl, event);
  }

  // Update an event
  public updateEvent(id: number, event: Eventy): Observable<Eventy> {
    return this.http.put<Eventy>(`${this.apiUrl}/${id}`, event);
  }

  // Delete an event
  public deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
