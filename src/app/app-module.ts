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


@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    About,
    Users
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReversePipe,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
