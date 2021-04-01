import { Component } from '@angular/core';

import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

	titulo: string = '';

  constructor(private _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  	this._servicio.getInfo()
      .subscribe(resp => {
        
        this.titulo = resp.titulo || '';

      });
  }

}
