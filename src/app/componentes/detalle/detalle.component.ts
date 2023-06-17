import { Component } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumnos';
import { PromedioService } from 'src/app/promedio/promedio.service';
import { RBComponent } from '../rb/rb.component';



@Component({
  selector: 'componente-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  cedula = "";
  nombre = "";
  apellido = "";
  asignatura = "";
  fecha = "";

  filtro = "";

  listAlumno: Alumno[] = [];
  listAlumno2: Alumno[] = [];
  indicesAlumnos: number[] = [];

  
  constructor(private promedioService: PromedioService) {}

  ngOnInit(): void{}


  agregarAlumno():void {
    const alumno: Alumno = {

      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      asignatura: this.asignatura,
      fecha: this.fecha
    }

    
    this.listAlumno.push(alumno);

    this.cedula = "";
    this.nombre = "";
    this.apellido = "";
    this.asignatura = "";

  }

  
  eliminarAlumno(index: number) {
    const alumnoEliminado = this.listAlumno.splice(index, 1)[0];
    this.listAlumno2.push(alumnoEliminado);
  }

  eliminarAlumno2(index: number) {
    this.listAlumno2.splice(index, 1);
  }

  
}












