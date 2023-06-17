import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromedioService {
  
  private promedioGeneral: number = 0;
  private filtroMayor: string = "";
  

  setPromedio(promedio: number): void {
    this.promedioGeneral = promedio;
  }

  getPromedio(): number {
    return this.promedioGeneral;
  }



  setFiltro(filtro: string): void {
    this.filtroMayor = filtro;
  }

  getFiltro(): string {
    return this.filtroMayor;
  }
}
