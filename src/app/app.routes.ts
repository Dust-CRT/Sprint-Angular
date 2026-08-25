import { Routes } from '@angular/router';
import { BoasVindas } from './pages/boas-vindas/boas-vindas';
import { Contato } from './pages/contato/contato';
import { flush } from '@angular/core/testing';

export const routes: Routes = [
    {path: "", redirectTo: "boasvindas", pathMatch: 'full'},
    {path: "boasvindas", component: BoasVindas},
    {path: "contato", component: Contato}
];
