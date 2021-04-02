import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Producto } from '../../interfaces/interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	productosFiltrado: Producto[] = []; 

  constructor(private route: ActivatedRoute,
  						public ps: ProductosService) { }

  ngOnInit(): void {

  	this.route.params
  			.subscribe(param => {
  				this.ps.buscarProducto(param.termino);
  			});


  }

}
