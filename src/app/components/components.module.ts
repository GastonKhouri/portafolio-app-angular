import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [
		LoadingComponent
	],
  exports: [
  	LoadingComponent
  ]
})
export class ComponentsModule { }