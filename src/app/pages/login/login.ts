import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = {
    nome: "",
    senha: ""
  };

  mensagemDeErro: String | null = null;

  constructor(private auth: Auth, private router: Router) {};

  login() : void {
    this.auth.login(this.usuario).subscribe({
      next:(Response) => {
        this.router.navigate(["/home"]);
      },
      error:(err) => {
        this.mensagemDeErro = err.error.message || "Usuario" 
      }
    })
  }
}
