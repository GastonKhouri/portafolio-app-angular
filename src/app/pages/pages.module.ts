import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PortafolioComponent } from './portafolio/portafolio.component';


@NgModule({
  declarations: [
  	PortafolioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
  	PortafolioComponent
  ]
})
export class PagesModule { }
