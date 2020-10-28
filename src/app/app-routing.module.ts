import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

// PAGES
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
// VIEWS
import { DetalleArbolQaComponent } from './ccn/views/detalle-arbol-qa/detalle-arbol-qa.component';
import { InicioComponent } from './ccn/views/inicio/inicio.component';

// SOPORTE
import { MenuComponent } from './ccn/soportes/menu/menu.component';


const routes: Routes = [
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/arbolQA', component: ArbolQaComponent},
  {path: 'pages/avisos', component: AvisosComponent},
  {path: 'views/DetallearbolQA', component: DetalleArbolQaComponent},
  {path: 'views/Inicio', component: InicioComponent},
  {path: 'ccn/menu', component: MenuComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/pages/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
