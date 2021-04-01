import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  }

}
