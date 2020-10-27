import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

// PAGES
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';
// VIEWS
import { DetalleArbolQaComponent } from './ccn/views/detalle-arbol-qa/detalle-arbol-qa.component';


const routes: Routes = [
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/arbolQA', component: ArbolQaComponent},
  {path: 'views/DetallearbolQA', component: DetalleArbolQaComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/pages/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
