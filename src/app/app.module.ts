import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routing.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdAutocompleteModule,
  MdDialogModule,
  MdRadioModule,
  MdToolbarModule,
  MdIconModule
} from '@angular/material';

// todo 有计划在MdTable发布之后将下面的TableComponent和Ng2SmartTableModule替换成MdTable
import {TableComponent} from './table/table.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {OrderCalendarComponent} from './order-calendar/order-calendar.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderCalendarComponent,
    SearchBoxComponent,
    AddUserDialogComponent
  ],
  entryComponents: [AddUserDialogComponent],
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
    MdDialogModule,
    MdRadioModule,
    MdToolbarModule,
    MdIconModule,
    Ng2SmartTableModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
