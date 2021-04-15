import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Router} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitleComponent} from './title/title.component';
import {MyTableComponent} from './my-table/my-table.component';
import {ListComponent} from './list/list.component';
import {SortablejsModule} from 'ngx-sortablejs';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MyTableComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SortablejsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
