import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';
import { switchMap } from 'rxjs/operators';

import { ProductoDescripcion } from '../../interfaces/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	producto!: ProductoDescripcion;
	id!: string;

  constructor(private route: ActivatedRoute,
  						private ps: ProductosService) { }

  ngOnInit(): void {
  	this.route.params
  		.pipe(
  			switchMap(param => {
  				this.id = param.id;
  				return this.ps.getProducto(param.id)
  			})
  		)
  		.subscribe(producto => {
  			this.producto = producto;
  		});
  }

}
