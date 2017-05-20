import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = {
    name: '王大锤'
  };

  userList = [{
    username: '王大锤'
  }, {
    username: '王二锤'
  }];
}
