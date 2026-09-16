import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { flush } from '@angular/core/testing';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: "", component: Home},
];
