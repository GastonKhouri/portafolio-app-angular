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

  constructor(public ips: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
