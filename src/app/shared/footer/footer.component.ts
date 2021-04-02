import { Component, OnInit } from '@angular/core';

import { InfoPagina } from '../../interfaces/interfaces';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	info!: InfoPagina;
	year: number = new Date().getFullYear();

  constructor(private _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  	this._servicio.cargarInfo()
  		.subscribe(resp => {
  			this.info = resp;
  		});
  }

}
