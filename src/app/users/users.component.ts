import { Component } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: any = [];

  constructor(public starwarsService: StarWarsService) { }

  buscarUsuarios() {
    this.starwarsService.getUsers().subscribe((users: any) => {
      this.users = users.results || [];

      this.users.forEach((user: any) => {
        user.filmTitles = [];
        
        if (user.films) {
          user.films.forEach((filmUrl: string) => {
            this.starwarsService.getFilm(filmUrl).subscribe((film: any) => {
              user.filmTitles.push(film.title);
            });
          });
        }
      });
    });
  }
}
