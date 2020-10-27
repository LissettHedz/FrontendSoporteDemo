import { Component, OnInit } from '@angular/core';
import { ArbolQaService } from 'src/app/data/services/arbol-qa.services';

@Component({
  selector: 'app-detalle-arbol-qa',
  templateUrl: './detalle-arbol-qa.component.html',
  styleUrls: ['./detalle-arbol-qa.component.scss']
})
export class DetalleArbolQaComponent implements OnInit {

  constructor(public arbolService: ArbolQaService) { }

  ngOnInit(): void {
    this.arbolService.obtenerArbol();
  }
  // tslint:disable-next-line: typedef
  editar(arbol) {
    this.arbolService.actualizar(arbol);
  }

}
