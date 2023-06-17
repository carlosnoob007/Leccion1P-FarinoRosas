import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { PieComponent } from './componentes/pie/pie.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Vista2Component } from './componentes/vista2/vista2.component';
import { RBComponent } from './componentes/rb/rb.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    DetalleComponent,
    CabeceraComponent,
    Vista2Component,
    RBComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
