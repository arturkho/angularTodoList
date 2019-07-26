import { NgModule } from '@angular/core';
import {SimpleFormComponent} from '../../components/simple-form/simple-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SimpleFormComponent],
  imports: [
    FormsModule
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class AppSimpleFormModule { }
