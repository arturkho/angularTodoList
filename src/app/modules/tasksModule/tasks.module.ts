import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from '../../containers/tasks/tasks.component';
import {TaskComponent} from '../../components/task/task.component';
import {FormsModule} from '@angular/forms';
import {AppSimpleFormModule} from '../commonsModule/simple-form.module';
import {TaskDescriptionComponent} from '../../components/task-description/task-description.component';
import {SingleTasksComponent} from '../../containers/single-tasks/single-tasks.component';

@NgModule({
  declarations: [TaskComponent, TasksComponent, TaskDescriptionComponent, SingleTasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppSimpleFormModule
  ],
  exports: [
    TasksComponent,
    SingleTasksComponent
  ]
})
export class AppTasksModule { }
