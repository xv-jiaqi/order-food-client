import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchBoxComponent} from './search-box/search-box.component';
import {OrderCalendarComponent} from './order-calendar/order-calendar.component'

const routes: Routes = [{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}, {
  path: 'search',
  component: SearchBoxComponent
}, {
  path: 'calendar',
  component: OrderCalendarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
