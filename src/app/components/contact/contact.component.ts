import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contato = 'Contato: 99999999';
  email = 'email@gmail.com';
  endereco = 'Rua Exemplo, 123, Cidade, Estado';
}
