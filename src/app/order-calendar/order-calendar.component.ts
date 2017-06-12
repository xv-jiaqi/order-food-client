import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {uniq} from 'lodash';

@Component({
  selector: 'app-order-calendar',
  templateUrl: './order-calendar.component.html',
  styleUrls: ['./order-calendar.component.css']
})

export class OrderCalendarComponent implements OnInit {
  user = {
    id: '',
    name: '',
    username: '',
    date: [],
    checkToggle (value: boolean, index: number) {
    }
  };

  firstDay = moment().date(1).day();
  year = moment().year();
  month = moment().month();
  currentDate = moment().date();
  days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  monthLength = moment(`${this.year}-${this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1}`, 'YYYY-MM').daysInMonth();
  weeks = [1, 2, 3, 4, 5, 6];
  checkList = new Array(this.monthLength).fill(false);

  selectRemainDays(type: string) {
    if (type === 'week') {
      const currentDay = moment().day();

      for (let i = this.currentDate; i < this.currentDate + 7 - currentDay; i++) {
        const day = moment().date(i).day();
        if (day > 0 && day < 6) {
          this.dateCheck(i - 1, true);
        }
      }
    }

    if (type === 'month') {
      for (let i = this.currentDate; i <= this.monthLength; i++) {
        const day = moment().date(i).day();
        if (day > 0 && day < 6) {
          this.dateCheck(i - 1, true);
        }
      }
    }
  }

  clearSelected() {
    for (let i = this.currentDate; i <= this.monthLength; i++) {
      this.dateCheck(i - 1, false);
    }
  }

  submit() {
    this.http.patch(`/user/${this.user.id}`, {date: this.user.date})
      .map((res: Response) => res.json())
      .subscribe(({message}) => {
        console.log(message);
      });
  }

  reload() {
    location.reload(true);
  }

  dateCheck(index: number, forceBool?: boolean) {
    if (forceBool !== undefined) {
      this.checkList[index] = forceBool;
    } else {
      this.checkList[index] = !this.checkList[index];
    }

    const time = moment(`${this.year}-${this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1}-${index + 1}`);
    if (this.checkList[index] && time) {
      this.user.date.push(time.unix());
    } else {
      this.user.date.splice(this.user.date.findIndex(d => d === time), 1);
    }

    this.user.date = uniq(this.user.date);
    this.user.date.sort((d1, d2) => d1 - d2);

    if (this.user.checkToggle) {
      this.user.checkToggle(this.checkList[index], index);
    }
  }

  constructor(private http: Http,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        ({userId}) => {
          this.http.get(`/user/${userId}`)
            .map((res: Response) => res.json())
            .subscribe(
              ({result: user}) => {
                Object.assign(this.user, user);

                this.user.date.forEach(date => {
                  const time = moment.unix(date);

                  if (time.month() !== this.month) {
                    return;
                  }
                  this.checkList[time.date() - 1] = true;
                });
              }
            );
        }
      );
  }

}
