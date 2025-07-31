import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuariosdetalhes } from './components/usuariodetalhes/usuariosdetalhes.component';
import { Formulario } from './components/formulario/formulario.component';
import { Templateform } from './components/templateform/templateform.component';
import { Listausuarios } from './components/listausuarios/listausuarios.component';
import { HomeComponent } from './components/aulas-anteriores/home-component/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: Listausuarios },
  { path: 'usuariodetalhe/:id', component: Usuariosdetalhes },
  { path: 'formulario', component: Formulario },
  { path: 'tempform', component: Templateform}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 