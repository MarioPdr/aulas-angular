import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.html',
  styleUrl: './filho.css'
})
export class Filho {
    @Input() nome: string = '';
    @Output() clicado = new EventEmitter<string>();
    @Output() produtoAdicionado = new EventEmitter<{ nome: string; preco: number }>();
    @Output() formEnviado = new EventEmitter<any>();

    enviarMensagem() {
        this.clicado.emit('Mensagem do filho');
    }

  }
