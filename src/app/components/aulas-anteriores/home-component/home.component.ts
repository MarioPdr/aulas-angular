import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}  
  ngOnInit() {
  }


  redirecionarParaProduto(produto: number) {
    this.router.navigate(['/produto', produto]);
  }

  
}
