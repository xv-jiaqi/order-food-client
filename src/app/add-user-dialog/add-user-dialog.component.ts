import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  username: string;
  name: string;
  sex: string;

  constructor() { }

  ngOnInit() {
  }

}
