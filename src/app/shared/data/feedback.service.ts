import { Injectable } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class FeedbackService {
    private apiUrl = 'http://localhost:8088/api/feedback';
  
    constructor(private http: HttpClient) {}
  
    addFeedback(feedback: Feedback) {
        return this.http.post<Feedback>('http://localhost:8088/api/feedback', feedback);
      }
      
  
    getByEvent(eventId: number): Observable<Feedback[]> {
      return this.http.get<Feedback[]>(`${this.apiUrl}/event/${eventId}`);
    }

    getFeedbacksForEvent(idEvent: number) {
        return this.http.get<Feedback[]>(`http://localhost:8088/api/feedback/event/${idEvent}`);
      }
      
  }
  