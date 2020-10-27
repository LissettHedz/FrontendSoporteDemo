import { Component, OnInit } from '@angular/core';
import { ArbolQaService } from 'src/app/data/services/arbol-qa.services';

@Component({
  selector: 'app-arbol-qa-list',
  templateUrl: './arbol-qa-list.component.html',
  styleUrls: ['./arbol-qa-list.component.scss']
})
export class ArbolQaListComponent implements OnInit {

  constructor(public arbolService: ArbolQaService) { }

  ngOnInit(): void {
    this.arbolService.obtenerArbol();
  }

  editar(arbol) {
    this.arbolService.actualizar(arbol);
  }

}
