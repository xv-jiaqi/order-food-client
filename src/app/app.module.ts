import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgPipesModule} from 'ng-pipes';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {AppComponent} from './app.component';
import {MdButtonModule, MdInputModule, MdCheckboxModule} from '@angular/material';
import {TableComponent} from './table/table.component';
import { OrderCalendarComponent } from './order-calendar/order-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    NgPipesModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
