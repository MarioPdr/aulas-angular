import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.html',
  styleUrl: './pai.css'
})
export class Pai {
  nomeUsuario = 'Pedro';

  envioProduto(mensagem: string) {
    console.log(mensagem);
  }

  adicionarProduto(produto: { nome: string; preco: number }) {
  console.log('Produto adicionado:', produto);
  }

  responder (mensagem: string) {
    console.log(mensagem);
}


}
