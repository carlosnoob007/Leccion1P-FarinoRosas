import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumnos';
import { DetalleComponent } from '../detalle/detalle.component';
import { PromedioService } from 'src/app/promedio/promedio.service';

@Component({
  selector: 'componente-rb',
  templateUrl: './rb.component.html',
  styleUrls: ['./rb.component.css']
})


export class RBComponent{

  filtroRB = "";

  constructor(private detalleComponent: DetalleComponent){}

  filtrar():void{
    this.detalleComponent.filtro = this.filtroRB;
  }
}
