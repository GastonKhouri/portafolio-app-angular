import { Component, OnInit } from '@angular/core';

import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoEquipo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	equipo!: InfoEquipo[];

  constructor(private _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  	this._servicio.cargarEquipo()
  		.subscribe(resp => {
  			this.equipo = resp;
  		});
  }

}
