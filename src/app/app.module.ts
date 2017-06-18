import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routing.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {MdButtonModule, MdInputModule, MdCheckboxModule, MdAutocompleteModule} from '@angular/material';
import {TableComponent} from './table/table.component';
import {OrderCalendarComponent} from './order-calendar/order-calendar.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderCalendarComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    Ng2SmartTableModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
