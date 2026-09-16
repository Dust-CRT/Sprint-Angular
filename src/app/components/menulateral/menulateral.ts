import { Component } from '@angular/core';

@Component({
  selector: 'app-menulateral',
  imports: [],
  templateUrl: './menulateral.html',
  styleUrl: './menulateral.css',
})
export class Menulateral {
  menuAberto : boolean = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
