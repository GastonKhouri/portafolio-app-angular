import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'home', component: PortafolioComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'item/:id', component: ItemComponent },
			{ path: 'search/:termino', component: SearchComponent },
			{ path: '**', redirectTo: 'home' }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
