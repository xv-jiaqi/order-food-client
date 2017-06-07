import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  userList = [];

  constructor(private http: Http) {
    http.get('http://localhost:3000/user/list')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.userList.push(...data.result)
      );
  }

  ngOnInit() {
  }

}
