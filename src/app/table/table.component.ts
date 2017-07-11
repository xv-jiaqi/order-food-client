import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MdDialog} from '@angular/material';
import * as moment from 'moment';

import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';
import {UserDataBase, UserDataSource} from './user-data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  userList: UserDataSource | null;
  count: number;
  countTime: string;

  displayedColumns = ['id', 'name', 'latestOrder'];

  constructor(private http: Http, public dialog: MdDialog) {}

  openAddUserDialog() {
    this.dialog.open(AddUserDialogComponent);
  }

  updateCount() {
    this.http.get(`/count/update`)
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        this.count = result.count;
        this.countTime = moment.unix(result.countTime).format('YYYY年MM月DD日HH时mm分');
      });
  }

  ngOnInit() {
    // todo 这里计划改成/count, /count的数据来源于日志而非实时计算, 数据量增加之后可能会有助于优化性能
    this.http.get('/count/update')
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        this.count = result.count;
        this.countTime = moment.unix(result.countTime).format('YYYY年MM月DD日HH时mm分');
      });

    this.http.get('/user/list')
      .map((res: Response) => res.json())
      .subscribe(({result: userList}) => {
        userList.forEach((user, index) => {
          user.index = index + 1;
          if (!user.name) {
            user.name = user.username;
          }
        });

        this.userList = new UserDataSource(new UserDataBase(userList));
      });
  }
}
