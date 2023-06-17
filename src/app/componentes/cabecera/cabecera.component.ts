import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'componente-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  menuItems = [
    { path: '', label: 'Login' },
    { path: '/vista2', label: 'Vista 2' },
    { path: '/vista3', label: 'Vista 3' },
  ];
}
