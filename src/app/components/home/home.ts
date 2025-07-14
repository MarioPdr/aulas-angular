import { Component } from '@angular/core';
import { MessageService } from "../../services/message-service";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  constructor(public messageService: MessageService) {}

  sendMessage() {
    this.messageService.add('Nova mensagem em ' + new Date());
  }
  
}