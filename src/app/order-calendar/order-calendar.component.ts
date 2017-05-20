import {Component, OnInit, Input} from '@angular/core';
import User from './User';
import * as moment from 'moment';

@Component({
  selector: 'app-order-calendar',
  templateUrl: './order-calendar.component.html',
  styleUrls: ['./order-calendar.component.css']
})

export class OrderCalendarComponent implements OnInit {
  @Input() user: User;

  firstDay = moment().date(1).day();
  year = moment().year();
  month = moment().month();
  currentDate = moment().date();
  days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  monthsLength = [31, moment([this.year]).isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  weeks = [1, 2, 3, 4, 5, 6];
  checkList = new Array(this.monthsLength[this.month]).fill(false);

  selectRemainDays (type) {
    if (type === 'week') {
      const currentDay = moment().day();

      for (let i = this.currentDate; i < this.currentDate + 6 - currentDay; i++) {
        const day = moment().date(i).day();
        if (day > 0 && day < 6) {
          this.checkList[i - 1] = true;
        }
      }
    }

    if (type === 'month') {
      for (let i = this.currentDate; i <= this.monthsLength[this.month]; i ++) {
        const day = moment().date(i).day();
        if (day > 0 && day < 6) {
          this.checkList[i - 1] = true;
        }
      }
    }
  }

  clearSelected () {
    for (let i = this.currentDate; i <= this.monthsLength[this.month]; i ++) {
      this.checkList[i - 1] = false;
    }
  }

  ngOnInit() {
  }

}