import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


// LAYOUT
import { AppComponent } from './app.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoHeaderComponent } from './layout/logo-header/logo-header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

// PAGES ADMINISTRADOR
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';
import { ArbolQaListComponent } from './pages/arbol-qa/arbol-qa-list/arbol-qa-list.component';
import { ArbolQaFormComponent } from './pages/arbol-qa/arbol-qa-form/arbol-qa-form.component';

// VIEWS AGENTES
import { DetalleArbolQaComponent } from './ccn/views/detalle-arbol-qa/detalle-arbol-qa.component';
import { InicioComponent } from './ccn/views/inicio/inicio.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { SuscriptorComponent } from './shared/suscriptor/suscriptor.component';
import { SucursalComponent } from './shared/sucursal/sucursal.component';

// SOPORTE
import { MenuComponent } from './ccn/soportes/menu/menu.component';
import { MenuSoportesComponent } from './ccn/soportes/menu/menu-soportes/menu-soportes.component';
import { TelevisionComponent } from './ccn/soportes/television/television.component';
import { DosServiciosComponent } from './ccn/soportes/menu/dos-servicios/dos-servicios.component';
import { MenuTelevisionComponent } from './ccn/soportes/menu/menu-television/menu-television.component';



// tslint:disable-next-line: typedef
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
    LogoHeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ArbolQaComponent,
    ArbolQaListComponent,
    ArbolQaFormComponent,
    DetalleArbolQaComponent,
    InicioComponent,
    MenuComponent,
    AvisosComponent,
    SuscriptorComponent,
    SucursalComponent,
    MenuSoportesComponent,
    TelevisionComponent,
    DosServiciosComponent,
    MenuTelevisionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
