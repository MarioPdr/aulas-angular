import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-listausuarios',
  standalone: false,
  templateUrl: './listausuarios.html',
  styleUrl: './listausuarios.css'
})
export class Listausuarios {
  users: any;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

}