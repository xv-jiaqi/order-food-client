import {Component, NgModule, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  userCtrl: FormControl;

  user = {
    name: '王大锤',
    checkList: [],
    checkToggle (state) {
      console.log(state);
    }
  };

  userList = [];

  table = {
    cols: [{
      name: 'name',
      label: '姓名'
    }, {
      name: 'username',
      label: '用户名'
    }],

    rows: this.userList
  };

  constructor(private http: Http) {
    http.get('http://localhost:3000/user/list')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.userList.push(...data.result)
      );
  }

  ngOnInit() {
    this.title = '吃饭！';
  }
}
