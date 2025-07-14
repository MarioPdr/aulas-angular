import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class StarWarsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://swapi.bry.com.br/api/people/';

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getFilm(url: string) {
  return this.http.get(url);
  }

}
