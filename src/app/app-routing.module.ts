import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchBoxComponent} from './order/search-box/search-box.component';
import {OrderCalendarComponent} from './order/order-calendar/order-calendar.component';
import {TableComponent} from './order/table/table.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}, {
  path: 'search',
  component: SearchBoxComponent
}, {
  path: 'calendar/:userId',
  component: OrderCalendarComponent
}, {
  path: 'userList',
  component: TableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
