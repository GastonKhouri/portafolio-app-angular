import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
  	PortafolioComponent,
  	AboutComponent,
  	ItemComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
