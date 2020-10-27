import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArbolQa } from 'src/app/data/models/arbol-qa';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbolQaService {
myAppUrl = 'https://localhost:44350/';
myApiUrl = 'api/arbolQa/';
list: ArbolQa[];
private actualizarFormulario = new BehaviorSubject<ArbolQa>({} as any);

  constructor(private http: HttpClient) { }



  // tslint:disable-next-line: typedef
  obtenerArbol() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
                    .then(data => {
                      this.list = data as ArbolQa[];
                    });
  }
  actualizarArbol(id: number, arbol: ArbolQa): Observable<ArbolQa> {
    return this.http.put<ArbolQa>(this.myAppUrl + this.myApiUrl + id, arbol);
  }
  // tslint:disable-next-line: typedef
  actualizar(arbol) {
    this.actualizarFormulario.next(arbol);
  }
  obtenerArbol$(): Observable<ArbolQa> {
    return this.actualizarFormulario.asObservable();
  }
}
