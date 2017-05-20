import {Component, OnInit, Input} from '@angular/core';
import Table from './Table';
import {FilterByPipe} from 'ng-pipes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [FilterByPipe]
})

export class TableComponent implements OnInit {
  @Input () table: Table;
  filter: string;

  constructor(private filterBy: FilterByPipe) {
    this.filterBy = filterBy;
  }

  ngOnInit() {
  }

}
