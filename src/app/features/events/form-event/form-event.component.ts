import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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
    nblikes: 0
  };

  constructor(private http: HttpClient, private router: Router) {} // ← ajout du Router

  // ✅ Handle image selection and convert to Base64
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.event.imageUrl = reader.result as string; // Base64 string
    };

    reader.readAsDataURL(file); // convert file → Base64
  }

  // ✅ Submit form to backend
  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.http.post('http://localhost:8088/api/events', this.event)
      .subscribe({
        next: (res) => {
          console.log('✅ Event saved:', res);
          form.resetForm();
          this.router.navigate(['/events']); // ← redirection vers la liste
        },
        error: (error: HttpErrorResponse) => {
          console.error('❌ Error saving event:', error);
        }
      });
  }
}
