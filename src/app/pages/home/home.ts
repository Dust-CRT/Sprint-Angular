import { Component } from '@angular/core';
import { not } from 'rxjs/internal/util/not';
import { Menulateral } from '../../components/menulateral/menulateral';

@Component({
  selector: 'app-home',
  imports: [Menulateral],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
