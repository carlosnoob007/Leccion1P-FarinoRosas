export class Alumno {
    cedula: string;
    nombre: string;
    apellido: string;
    asignatura: string;
    fecha: string;

    constructor(cedula: string, nombre: string, apellido: string, asignatura: string, fecha: string) {
        
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.asignatura = asignatura;
        this.fecha = fecha;   
        
    }
}