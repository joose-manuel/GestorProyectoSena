import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministradorComponent } from './core/Componentes/administrador/administrador.component';
import { SustentacionesComponent } from './core/Componentes/sustentaciones/sustentaciones.component';
import { RegitroDeAprendizComponent } from './core/Componentes/regitro-de-aprendiz/regitro-de-aprendiz.component';
import { InstructorComponent } from './core/Componentes/instructor/instructor.component';
import { EvaluadorComponent } from './core/Componentes/evaluador/evaluador.component';
import { CrearReportesComponent } from './core/Componentes/crear-reportes/crear-reportes.component';
import { ModuloPrinciaplComponent } from './core/Modelos/modulo-princiapl/modulo-princiapl.component';
import { CrieteriosEvaluativosComponent } from './core/Modelos/crieterios-evaluativos/crieterios-evaluativos.component';
import { LoginComponent } from './core/Modelos/login/login.component';
import { AyudaComponent } from './core/Modelos/ayuda/ayuda.component';
import { CentroAprendizComponent } from './core/Modelos/centro-aprendiz/centro-aprendiz.component';
import { ListarAptendizAdministradorComponent } from './core/Modelos/listar-aptendiz-administrador/listar-aptendiz-administrador.component';
import { ProyectosFormativosInstructorComponent } from './core/Modelos/proyectos-formativos-instructor/proyectos-formativos-instructor.component';





const routes: Routes = [
  { path: 'criterios', component: CrieteriosEvaluativosComponent },
  {path:'admin', component:ModuloPrinciaplComponent },
  {path:'registro-de-aprendiz', component:RegitroDeAprendizComponent },
  {path:'login', component:LoginComponent },
  {path:'sustentaciones', component:SustentacionesComponent},
  {path:'instructor', component:InstructorComponent},
  {path:'evaluador', component:EvaluadorComponent},
  {path:'crear-reportes', component:CrearReportesComponent},
  {path:'centroDeAyuda', component:AyudaComponent},
  {path:'centro-ayuda-aprendiz', component:CentroAprendizComponent},
  {path:'mostrar-aprendiz', component:ListarAptendizAdministradorComponent},
  {path:'proyecto-formativo-instructor',component:ProyectosFormativosInstructorComponent},

  {path:'',redirectTo:'/admin', pathMatch:"full"},
  {path:'**', redirectTo:'/admin'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
