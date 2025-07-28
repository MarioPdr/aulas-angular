import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuariosdetalhes',
  standalone: false,
  templateUrl: './usuariosdetalhes.html',
  styleUrl: './usuariosdetalhes.css'
})
export class Usuariosdetalhes {

  userId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.userId = id ? id : 'ID não encontrado';
    });
  }
}