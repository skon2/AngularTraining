import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html'
})
export class FormEventComponent {
  event: Eventy = {
    title: '',
    description: '',
    date: new Date(),
    location: '',
    price: 0,
    organizerId: 0,
    imageUrl: '',
    nbPlaces: 0,
    nbrLike: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.http.post('http://localhost:8088/api/events', this.event)
      .subscribe({
        next: (res) => {
          console.log('Event saved:', res);
          form.resetForm();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error saving event:', error);
        }
      });
  }
}
