import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { SobreComponent } from './components/sobre-component/sobre.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe';
import { Listausuarios } from './components/listausuarios/listausuarios.component';
import { Usuariosdetalhes } from './components/usuariodetalhes/usuariosdetalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'usuarios', component: Listausuarios },
  { path: 'usuariodetalhe/:id', component: Usuariosdetalhes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
