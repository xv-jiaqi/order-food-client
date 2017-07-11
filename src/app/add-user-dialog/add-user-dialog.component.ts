import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  username: string;
  name: string;
  sex: number;
  pending: boolean;

  constructor(public dialogRef: MdDialogRef<any>, private http: Http) {
  }

  ngOnInit() {
    this.pending = false;
  }

  submit(): void {
    const newUser = {};

    const enabled = ['username', 'name', 'sex']
      .every(attr => {
        newUser[attr] = this[attr];
        return this[attr];
      });

    if (!enabled || this.pending) {
      return;
    }

    this.pending = true;

    this.http
      .post('/user', newUser)
      .map((res: Response) => res.json())
      .subscribe(
        ({result}) => {
          this.pending = false;
          this.dialogRef.close(result);
        }
      );
  }

}
