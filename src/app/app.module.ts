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
  MdIconModule,
  MdTableModule,
  MdPaginatorModule
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk';

import {TableComponent} from './order/table/table.component';
import {OrderCalendarComponent} from './order/order-calendar/order-calendar.component';
import {SearchBoxComponent} from './order/search-box/search-box.component';
import {AddUserDialogComponent} from './order/add-user-dialog/add-user-dialog.component';

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
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
