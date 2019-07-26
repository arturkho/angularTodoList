import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from '../../containers/tasks/tasks.component';
import {TaskComponent} from '../../components/task/task.component';
import {FormsModule} from '@angular/forms';
import {AppSimpleFormModule} from '../commonsModule/simple-form.module';
import {TaskDescriptionComponent} from '../../components/task-description/task-description.component';

@NgModule({
  declarations: [TaskComponent, TasksComponent, TaskDescriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    AppSimpleFormModule
  ],
  exports: [
    TasksComponent
  ]
})
export class AppTasksModule { }
