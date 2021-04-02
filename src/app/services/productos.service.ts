import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	cargando: boolean = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
  	this.cargarProductos();
  }

  cargarProductos() {
  	this.http.get<Producto[]>('https://angular-html-c93df-default-rtdb.firebaseio.com/productos_idx.json')
  		.pipe(
        delay(1000)
      )
      .subscribe(resp => {
        this.productos = resp;
  			this.cargando = false;
  		});
  }

}
