import { Component, OnInit } from '@angular/core';
import { Menulateral } from '../../components/menulateral/menulateral';
import { Auth } from '../../services/auth';
import { Vehicle, VehicleData } from '../../services/vehicle';
import { Veiculo } from '../../models/veiculo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  imports: [Menulateral, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  veiculos: Veiculo[] = [];
  veiculoSel: Veiculo | null = null;
  dadosVeiculos: (VehicleData & { vin: string })[] = [];
  filtroVin: string = '';
  erroVin: string = '';

  private vinInput$ = new Subject<string>();

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe(
      Response => {
        this.veiculos = Response.vehicles;
      }
    );

    this.vinInput$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(vin => vin.trim().length > 0),
      switchMap(vin =>
        this.vehicle.getVehicleData(vin).pipe(
          catchError(() => {
            this.erroVin = 'Código VIN não encontrado.';
            this.dadosVeiculos = [];
            return of(null);
          })
        )
      )
    ).subscribe(dados => {
      if (dados) {
        this.erroVin = '';
        this.dadosVeiculos = [{ ...dados, vin: this.filtroVin }];
      }
    });
  }

  onVinInput(vin: string): void {
    this.filtroVin = vin;

    if (!vin.trim()) {
      this.dadosVeiculos = [];
      this.erroVin = '';
    }

    this.vinInput$.next(vin);
  }

  veiculoEscolhido(event: Event): void {
    const idSel = (event.target as HTMLSelectElement).value;

    if (idSel) {
      this.veiculoSel = this.veiculos.find(v => v.id == Number(idSel)) || null;
    } else {
      this.veiculoSel = null;
    }
  }
}