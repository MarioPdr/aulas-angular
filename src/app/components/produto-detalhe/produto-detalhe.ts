import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalheComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() :void {
  this.route.paramMap.subscribe(params => {
    console.log(params.get('id'));
  });
}
 
}