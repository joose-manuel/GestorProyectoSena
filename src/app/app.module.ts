import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Componentes/header/header.component';
import { AdministradorComponent } from './core/Modelos/agregar-registro-de-administrador/administrador.component';
import { MenuCoordinadorComponent } from './core/Componentes/menu-coordinador/menu-coordinador.component';
import { SustentacionesComponent } from './core/Componentes/sustentaciones/sustentaciones.component';
import { RegitroDeAprendizComponent } from './core/Modelos/agregar-regitro-de-aprendiz/regitro-de-aprendiz.component';
import { LateralIzquierdoAprendizComponent } from './core/Componentes/lateral-izquierdo-aprendiz/lateral-izquierdo-aprendiz.component';
import { InstructorComponent } from './core/Modelos/agregar-registro-de-instructor/instructor.component';

import { CrearReportesComponent } from './core/Componentes/crear-reportes/crear-reportes.component';
import { ModuloPrinciaplComponent } from './core/Modelos/modulo-princiapl/modulo-princiapl.component';
import { CrieteriosEvaluativosComponent } from './core/Modelos/crieterios-evaluativos/crieterios-evaluativos.component';
import { NavComponent } from './core/Componentes/nav/nav.component';
import { BarraLateralDesplegableFlotanteComponent } from './core/Componentes/barra-lateral-desplegable-flotante/barra-lateral-desplegable-flotante.component';
import { LoginComponent } from './core/Modelos/login/login.component';
import { AyudaComponent } from './core/Modelos/ayuda/ayuda.component';
import { LoaderComponent } from './core/Utilidades/loader/loader.component';
import { CentroAprendizComponent } from './core/Modelos/centro-aprendiz/centro-aprendiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarAptendizAdministradorComponent } from './core/Modelos/listar-aprendiz-administrador/listar-aptendiz-administrador.component';
import { ListarInstructorAdministradorComponent } from './core/Modelos/listar-instructor-administrador/listar-instructor-administrador.component';
import { ListarEvaluadorAdministradorComponent } from './core/Modelos/listar-evaluador-administrador/listar-evaluador-administrador.component';
import { ListarAdministradorAComponent } from './core/Modelos/listar-administrador-administrador/listar-administrador-a.component';
import { ProyectosFormativosInstructorComponent } from './core/Modelos/proyectos-formativos-instructor/proyectos-formativos-instructor.component';
import { ProyectosSustentarEvaluadorComponent } from './core/Modelos/proyectos-sustentar-evaluador/proyectos-sustentar-evaluador.component';
import { CalificarSustentacionesInstructorComponent } from './core/Modelos/calificar-sustentaciones-instructor/calificar-sustentaciones-instructor.component';
import { PdfEvaluadorComponent } from './core/Modelos/pdf-evaluador/pdf-evaluador.component';
import { InformacionProyectoAprendizComponent } from './core/Modelos/informacion-proyecto-aprendiz/informacion-proyecto-aprendiz.component';
import { CentroInstructorComponent } from './core/Modelos/centro-instructor/centro-instructor.component';
import { CentroEvaluadorComponent } from './core/Modelos/centro-evaluador/centro-evaluador.component';
import { FormsModule } from '@angular/forms';
import { RegistroFichaComponent } from './core/Modelos/registro-ficha/registro-ficha.component';
import { EvaluadorComponent } from './core/Modelos/agregar-registro-de-evaluador/evaluador.component';



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
    ListarAptendizAdministradorComponent,
    ListarInstructorAdministradorComponent,
    ListarEvaluadorAdministradorComponent,
    ListarAdministradorAComponent,
    ProyectosFormativosInstructorComponent,
    ProyectosSustentarEvaluadorComponent,
    CalificarSustentacionesInstructorComponent,
    PdfEvaluadorComponent,
    InformacionProyectoAprendizComponent,
    CentroInstructorComponent,
    CentroEvaluadorComponent,
    RegistroFichaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
