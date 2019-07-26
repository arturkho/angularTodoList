import {ListsComponent} from './containers/lists/lists.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {AppSingleListModule} from './modules/singleListModule/single-list.module';
import {AppTasksModule} from './modules/tasksModule/tasks.module';
import {AppSimpleFormModule} from './modules/commonsModule/simple-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ListComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AppSimpleFormModule,
    AppSingleListModule,
    AppTasksModule
  ],
  exports: [RouterModule],
  providers: [AppSimpleFormModule, AppSingleListModule, AppTasksModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
