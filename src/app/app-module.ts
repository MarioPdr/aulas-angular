import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/aulas-anteriores/home/home';
import { Contact } from './components/aulas-anteriores/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse-pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Pai } from './components/aulas-anteriores/pai/pai.component';
import { Filho } from './components/aulas-anteriores/filho/filho.component';
import { HomeComponent } from './components/aulas-anteriores/home-component/home.component';
import { SobreComponent } from './components/aulas-anteriores/sobre-component/sobre.component';
import { Listausuarios } from './components/listausuarios/listausuarios.component';
import { Usuariosdetalhes } from './components/usuariodetalhes/usuariosdetalhes.component';
import { Formulario } from './components/formulario/formulario.component';
import { Table } from './components/aulas-anteriores/table/table.component';
import { Templateform } from './components/templateform/templateform.component';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario.component';

@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    Pai,
    Filho,
    HomeComponent,
    SobreComponent,
    Listausuarios,
    Usuariosdetalhes,
    Formulario,
    Table,
    Templateform,
    CadastroFuncionario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReversePipe,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

