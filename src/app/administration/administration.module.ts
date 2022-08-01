import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { HomeComponent } from './administration/home/home.component';
import { BoardComponent } from './administration/board/board.component';
import { ActuComponent } from './administration/actu/actu.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    HomeComponent,
    BoardComponent,
    ActuComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
