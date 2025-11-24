import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eventy } from '../../../models/eventy';
import { Feedback } from '../../../models/feedback';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { NgForm } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent {

  @Input() e!: Eventy;
  @Input() searchValue!: string;

  @Output() notificationLike = new EventEmitter<Eventy>();
  @Output() notificationDelete = new EventEmitter<number>();

  hoverRating = 0;

  // Feedback model
  feedback: Feedback = {
    idUser: 1,  // replace with the real logged-in user id
    idEvent: 0,
    content: '',
    rate: 1,
    date: new Date()
  };

  constructor(private http: HttpClient, private fbService: FeedbackService) {}

  // -----------------------
  // LIKE / DISLIKE
  // -----------------------
  likeEvent(e: Eventy) {
    e.nblikes++;
    this.http.put(`http://localhost:8088/api/events/${e.id}/like`, {}).subscribe();
    this.notificationLike.emit(e);
  }

  dislikeEvent(e: Eventy) {
    if (e.nblikes > 0) e.nblikes--;
    this.http.put(`http://localhost:8088/api/events/${e.id}/dislike`, {}).subscribe();
    this.notificationLike.emit(e);
  }

  // -----------------------
  // BUY TICKET
  // -----------------------
  nbrPlaceDecr(e: Eventy) {
    if (e.nbPlaces > 0) e.nbPlaces--;
  }

  // -----------------------
  // DELETE EVENT
  // -----------------------
  deleteEvent(id?: number) {
    if (!id) return;
    if (!confirm("Voulez-vous vraiment supprimer cet événement ?")) return;
    this.notificationDelete.emit(id);
  }

  // -----------------------
  // OPEN FEEDBACK MODAL
  // -----------------------
  openFeedbackModal(idEvent: number) {
    this.feedback.idEvent = idEvent;

    setTimeout(() => {
      const modalEl = document.getElementById('feedbackModal' + idEvent);
      if (!modalEl) return;

      const modal = new bootstrap.Modal(modalEl);
      modal.show();

      // Reset feedback when modal closes
      modalEl.addEventListener('hidden.bs.modal', () => {
        this.feedback.content = '';
        this.feedback.rate = 1;
      });
    }, 0);
  }

  setRating(rating: number) {
    this.feedback.rate = rating;
  }

  // -----------------------
  // SUBMIT FEEDBACK
  // -----------------------
  submitFeedback(idEvent: number) {
    if (!this.feedback.content || this.feedback.content.trim() === '') {
      alert('Veuillez saisir un commentaire.');
      return;
    }

    this.feedback.idEvent = idEvent;
    this.feedback.date = new Date();

    this.fbService.addFeedback(this.feedback).subscribe({
      next: (res) => {
        alert("Feedback envoyé !");
        // Reset feedback
        this.feedback = {
          idUser: 1,
          idEvent,
          content: '',
          rate: 1,
          date: new Date()
        };

        // Close modal
        const modalEl = document.getElementById('feedbackModal' + idEvent);
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal?.hide();
      },
      error: (err) => {
        console.error('Error sending feedback:', err);
        alert("Erreur lors de l'envoi du feedback");
      }
    });
  }
}
