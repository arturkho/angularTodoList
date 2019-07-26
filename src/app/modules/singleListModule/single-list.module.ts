import { NgModule } from '@angular/core';
import {SinglePageListComponent} from '../../containers/single-page-list/single-page-list.component';
import {FullPageListComponent} from '../../components/full-page-list/full-page-list.component';
import {CommonModule} from '@angular/common';
import {AppTasksModule} from '../tasksModule/tasks.module';

@NgModule({
  declarations: [SinglePageListComponent, FullPageListComponent],
  imports: [
    CommonModule,
    AppTasksModule
  ],
  exports: [
    SinglePageListComponent,
  ]
})
export class AppSingleListModule { }
