import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchBoxComponent} from './order/search-box/search-box.component';
import {OrderCalendarComponent} from './order/order-calendar/order-calendar.component';
import {TableComponent} from './order/table/table.component';
import {AddUserComponent} from './order/add-user/add-user.component';

import {EmailComponent} from './shared/email/email.component';

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
}, {
  path: 'addUser',
  component: AddUserComponent
}, {
  path: '_email',
  component: EmailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
