import { ActuComponent } from './components/actu/actu.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  { path: '', 
    component: AdministrationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'board',
        component: BoardComponent
      },
      {
        path: 'actu',
        component: ActuComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
