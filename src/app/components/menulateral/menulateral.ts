import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulateral',
  imports: [],
  templateUrl: './menulateral.html',
  styleUrl: './menulateral.css',
})
export class Menulateral {
  menuAberto : boolean = false;
  constructor(private auth: Auth, private router: Router){};

   navegarPara(rota: string): void {
    this.router.navigate([rota]);
    this.menuAberto = false;
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  logout(): void {
    this.auth.logout();
  }
}
