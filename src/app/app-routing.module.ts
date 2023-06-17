import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { Vista2Component } from './componentes/vista2/vista2.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vista2', component: DetalleComponent },
  { path: 'vista3', component: Vista2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

