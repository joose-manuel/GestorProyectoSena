import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Componentes/header/header.component';
import { AdministradorComponent } from './core/Componentes/administrador/administrador.component';
import { MenuCoordinadorComponent } from './core/Componentes/menu-coordinador/menu-coordinador.component';
import { SustentacionesComponent } from './core/Componentes/sustentaciones/sustentaciones.component';
import { LoginComponent } from './login/login.component';
import { RegitroDeAprendizComponent } from './core/Componentes/regitro-de-aprendiz/regitro-de-aprendiz.component';
import { LateralIzquierdoAprendizComponent } from './core/Componentes/lateral-izquierdo-aprendiz/lateral-izquierdo-aprendiz.component';
import { InstructorComponent } from './core/Componentes/instructor/instructor.component';
import { EvaluadorComponent } from './core/Componentes/evaluador/evaluador.component';
import { CrearReportesComponent } from './core/Componentes/crear-reportes/crear-reportes.component';
import { ModuloPrinciaplComponent } from './core/Modelos/modulo-princiapl/modulo-princiapl.component';
import { CrieteriosEvaluativosComponent } from './core/Modelos/crieterios-evaluativos/crieterios-evaluativos.component';
import { NavComponent } from './core/Componentes/nav/nav.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdministradorComponent,
    MenuCoordinadorComponent,
    SustentacionesComponent,
    LoginComponent,
    RegitroDeAprendizComponent,
    LateralIzquierdoAprendizComponent,
    InstructorComponent,
    EvaluadorComponent,
    CrearReportesComponent,
    ModuloPrinciaplComponent,
    CrieteriosEvaluativosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
