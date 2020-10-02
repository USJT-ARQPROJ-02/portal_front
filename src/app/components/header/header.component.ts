import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role
  token

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.token = localStorage.getItem('token')
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
