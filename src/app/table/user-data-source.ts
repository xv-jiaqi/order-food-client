import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

export interface UserData {
  readonly id: string;
  username: string;
  name: string;
  sex: number;
  isAdmin?: boolean;
  latestOrder?: number[];
  latestOrderString?: string
  date?: number[];
}

export class UserDataBase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  get data(): UserData[] {
    return this.dataChange.value;
  }

  constructor(userList: UserData[]) {
    userList.forEach(user => this.addUser(user));
  }

  addUser(user: UserData) {
    user.latestOrderString = user.latestOrder.map(d => moment.unix(d).format('YYYY年MM月DD日')).join(',\t');

    const copiedData = this.data.slice();
    copiedData.push(user);
    this.dataChange.next(copiedData);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class UserDataSource extends DataSource<any> {
  constructor(private _userDataBase: UserDataBase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    return this._userDataBase.dataChange;
  }

  disconnect() {}
}
