import {TasksComponent} from './containers/tasks/tasks.component';
import {ListsComponent} from './containers/lists/lists.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {TaskComponent} from './task/task.component';
import {ListComponent} from './list/list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'lists/:id', component: ListComponent},
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {path: 'tasks/:id', component: TaskComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
