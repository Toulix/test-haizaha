import { PostItemDetailComponent } from './components/actu/post-item-detail/post-item-detail.component';
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
        component: ActuComponent,
      },
      {
        path: 'actu/:id',
        component: PostItemDetailComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
