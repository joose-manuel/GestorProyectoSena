import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Componentes/header/header.component';
import { AdministradorComponent } from './core/Componentes/administrador/administrador.component';
import { MenuCoordinadorComponent } from './core/Componentes/menu-coordinador/menu-coordinador.component';
import { SustentacionesComponent } from './core/Componentes/sustentaciones/sustentaciones.component';
import { RegitroDeAprendizComponent } from './core/Componentes/regitro-de-aprendiz/regitro-de-aprendiz.component';
import { LateralIzquierdoAprendizComponent } from './core/Componentes/lateral-izquierdo-aprendiz/lateral-izquierdo-aprendiz.component';
import { InstructorComponent } from './core/Componentes/instructor/instructor.component';
import { EvaluadorComponent } from './core/Componentes/evaluador/evaluador.component';
import { CrearReportesComponent } from './core/Componentes/crear-reportes/crear-reportes.component';
import { ModuloPrinciaplComponent } from './core/Modelos/modulo-princiapl/modulo-princiapl.component';
import { CrieteriosEvaluativosComponent } from './core/Modelos/crieterios-evaluativos/crieterios-evaluativos.component';
import { NavComponent } from './core/Componentes/nav/nav.component';
import { BarraLateralDesplegableFlotanteComponent } from './core/Componentes/barra-lateral-desplegable-flotante/barra-lateral-desplegable-flotante.component';
import { LoginComponent } from './core/Modelos/login/login.component';
import { AyudaComponent } from './core/Modelos/ayuda/ayuda.component';
import { LoaderComponent } from './core/Utilidades/loader/loader.component';
import { CentroAprendizComponent } from './core/Modelos/centro-aprendiz/centro-aprendiz.component';



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
    NavComponent,
    BarraLateralDesplegableFlotanteComponent,
    AyudaComponent,
    LoaderComponent,
    CentroAprendizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
