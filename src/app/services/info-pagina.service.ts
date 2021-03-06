import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina, InfoEquipo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

	info!: InfoPagina;
	equipo!: InfoEquipo[];
	cargando: boolean = true;

  constructor(private http: HttpClient) {
  	this.cargarInfo();
  	this.cargarEquipo();
  }

  private cargarInfo()  {
    this.http.get<InfoPagina>('assets/data/data-pagina.json')
    	.subscribe(resp => {
    		this.cargando = false;
  			this.info = resp;
  		});
  }

  private cargarEquipo() {
    this.http.get<InfoEquipo[]>('https://angular-html-c93df-default-rtdb.firebaseio.com/equipo.json')
    	.subscribe(resp => {
    		this.cargando = false;
  			this.equipo = resp;
  		});
  }


}
