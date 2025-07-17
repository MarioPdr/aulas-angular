import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact.component';
import { About } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse-pipe';
import { HttpClientModule } from '@angular/common/http';
import { Users } from './components/users/users.component';
import { Table } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    About,
    Users,
    Table
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReversePipe,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
