import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  username: string;
  name: string;
  sex: number;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  submit() {
    const newUser = {};

    const enabled = ['username', 'name', 'sex']
      .every(attr => {
        newUser[attr] = this[attr];
        return this[attr];
      });

    if (!enabled) {
      return;
    }

    this.http
      .post('/user', newUser)
      .map((res: Response) => res.json())
      .subscribe(
        data => console.log(data)
      );
  }

}
