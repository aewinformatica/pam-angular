import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pam-angular';

  constructor(private router:Router){};

  exibindoNavbar() {
    // return this.router.url !== '/login' ;
    return false;
  }
}
