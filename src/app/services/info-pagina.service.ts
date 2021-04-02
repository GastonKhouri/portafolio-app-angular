import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InfoPagina, InfoEquipo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { }

  cargarInfo(): Observable<InfoPagina>  {
    return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  }

  cargarEquipo(): Observable<InfoEquipo[]> {
    return this.http.get<InfoEquipo[]>('https://angular-html-c93df-default-rtdb.firebaseio.com/equipo.json');
  }


}
