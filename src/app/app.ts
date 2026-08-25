import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoasVindas } from "./pages/boas-vindas/boas-vindas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoasVindas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teste_angular');
}
