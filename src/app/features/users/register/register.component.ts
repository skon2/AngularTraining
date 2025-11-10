import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { User } from '../../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User(); // user initialisé
  formRegister!: FormGroup;

  ngOnInit(): void {
    // S'assurer que adressee est initialisé
    if (!this.user.adressee) {
      this.user.adressee = { street: '', city: '', state: '', zip: '' };
    }

    this.formRegister = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
      ]),
      adressee: new FormGroup({
        street: new FormControl(this.user.adressee.street, Validators.required),
        city: new FormControl(this.user.adressee.city, Validators.required),
        state: new FormControl(this.user.adressee.state, Validators.required),
        zip: new FormControl(this.user.adressee.zip, Validators.required)
      }),
      phones: new FormArray([new FormControl('', Validators.required)])
    });
  }

  get phones(): FormArray {
    return this.formRegister.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phones.push(new FormControl('', Validators.required));
  }

  removePhone(index: number): void {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.formRegister.valid) {
      console.log('Formulaire valide', this.formRegister.value);
      alert('Registration successful!');
    } else {
      this.formRegister.markAllAsTouched();
    }
  }
}
