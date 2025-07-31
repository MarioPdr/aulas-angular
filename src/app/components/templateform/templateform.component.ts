import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  standalone: false,
  templateUrl: './templateform.html',
  styleUrl: './templateform.css'
})
export class Templateform {
  email = '';

  submitForm(form: any) {
    console.log('Email enviado:', this.email);
    console.log('Form válido?', form.valid);
  }
}
