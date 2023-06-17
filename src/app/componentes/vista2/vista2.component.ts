import { Component } from '@angular/core';
import { PromedioService } from 'src/app/promedio/promedio.service';

@Component({
  selector: 'componente-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component {

  promedioGeneral: number = 0;

  constructor(private promedioService: PromedioService) {}

  ngOnInit(): void {
    this.promedioGeneral = this.promedioService.getPromedio();
  }

}
