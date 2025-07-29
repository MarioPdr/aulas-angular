import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/aulas-anteriores/home-component/home.component';
import { SobreComponent } from './components/aulas-anteriores/sobre-component/sobre.component';
import { ProdutoDetalheComponent } from './components/aulas-anteriores/produto-detalhe/produto-detalhe';
import { Listausuarios } from './components/listausuarios/listausuarios.component';
import { Usuariosdetalhes } from './components/usuariodetalhes/usuariosdetalhes.component';
import { Formulario } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'usuarios', component: Listausuarios },
  { path: 'usuariodetalhe/:id', component: Usuariosdetalhes },
  { path: 'formulario', component: Formulario } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
