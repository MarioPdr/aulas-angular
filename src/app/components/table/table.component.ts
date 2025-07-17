import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.css'
})

export class Table {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  table: any[] = [];

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  carregarUsuarios() {
    this.jsonplaceholderService.getUsers().subscribe((results: any) => {
      this.table = results || [];
    });
  }

}
