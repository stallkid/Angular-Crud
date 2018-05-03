import { Routes } from '@angular/router';
import { CreateComponent } from './crud/create/create.component';
import { EditComponent } from './crud/edit/edit.component';
import { IndexComponent } from './crud/index/index.component';

export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
]
