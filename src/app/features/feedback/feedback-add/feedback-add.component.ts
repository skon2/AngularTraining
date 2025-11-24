import { Component } from '@angular/core';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { Feedback } from '../../../models/feedback';

@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent {
  feedback: Feedback = {
    idUser: 1, // replace with logged-in user id
    idEvent: 0, // set dynamically when needed
    content: '',
    rate: 1,
    date: new Date()
  };

  constructor(private fbService: FeedbackService) {}

  setRating(rate: number) {
    this.feedback.rate = rate;
  }

  submitFeedback() {
    if (!this.feedback.content.trim()) {
      alert("Veuillez saisir un commentaire.");
      return;
    }

    this.fbService.addFeedback(this.feedback).subscribe({
      next: res => {
        alert("Feedback envoyé !");
        this.feedback = { ...this.feedback, content: '', rate: 1 };
      },
      error: err => {
        console.error(err);
        alert("Erreur lors de l'envoi du feedback");
      }
    });
  }
}
