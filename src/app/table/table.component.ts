import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {MdDialog, MdDialogRef} from '@angular/material';
import {MdPaginator} from '@angular/material';
import * as moment from 'moment';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';
import {UserData, UserDataBase, UserDataSource} from './user-data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  userDataBase = new UserDataBase([]);
  userList: UserDataSource | null;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  count: number;
  countTime: string;
  displayedColumns = ['name', 'latestOrder', 'operation'];
  addUserDialogRef: MdDialogRef<any>;

  constructor(private http: Http, public dialog: MdDialog) {
  }

  openAddUserDialog(): void {
    this.addUserDialogRef = this.dialog.open(AddUserDialogComponent);
    this.addUserDialogRef.afterClosed().subscribe((newUser: UserData) => {
      this.userDataBase.addUser(newUser);
    });
  }

  updateCount(): void {
    this.http.get(`/count/update`)
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        this.count = result.count;
        this.countTime = moment.unix(result.countTime).format('YYYY年MM月DD日HH时mm分');
      });
  }

  ngOnInit() {
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (this.userList) {
          this.userList.filter = this.filter.nativeElement.value;
        }
      });

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

          this.userDataBase.addUser(user);
        });

        this.userList = new UserDataSource(this.userDataBase, this.paginator);
      });
  }
}
