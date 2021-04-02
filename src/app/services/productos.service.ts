import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto, ProductoDescripcion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 
  	this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get<Producto[]>('https://angular-html-c93df-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe(resp => {
          this.productos = resp;
          this.cargando = false;
          resolve(true);
        });
    });

  	
  }

  getProducto(id: string) {
    return this.http.get<ProductoDescripcion>(`https://angular-html-c93df-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if(this.productos.length === 0) {
      // Cargar Productos
      this.cargarProductos().then(() => {
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // Aplicar filtro
      this.filtrarProductos(termino);
    }

    
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    termino = termino.toLowerCase();
    this.productosFiltrado = this.productos
                                .filter(({ categoria, titulo }) => categoria.includes(termino) 
                                                     || titulo.toLowerCase().includes(termino));
  }

}
