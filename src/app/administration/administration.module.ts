import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { ActuComponent } from './components/actu/actu.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    HomeComponent,
    BoardComponent,
    ActuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    NgZorroAntdModule
  ]
})
export class AdministrationModule { }
