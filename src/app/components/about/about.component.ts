import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
    users: any;
    constructor(public jsonplaceholderService: JsonplaceholderService) {}
  
      buscarUsuarios() {
        this.jsonplaceholderService.getUsers().subscribe((users: any) => {
          this.users = users;
        });
      }
  }
