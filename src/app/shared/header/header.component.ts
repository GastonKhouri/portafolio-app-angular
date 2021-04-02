import { Component } from '@angular/core';

import { InfoPagina } from '../../interfaces/interfaces';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

	info!: InfoPagina;

  constructor(private _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  	this._servicio.cargarInfo()
  		.subscribe(resp => {
  			this.info = resp;
  		});
  }

}
