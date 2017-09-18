import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


const USERNAME_MAX_LENGTH = 10;
const USERNAME_MIN_LENGTH = 4;
const USERNAME_REGEX = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,9}$/;

const PASSWORD_MAX_LENGTH = 20;
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_REGEX = /^(\w){6,20}$/;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  againPassword: string;

  lengthLimit = null;

  constructor() { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.lengthLimit = {
      USERNAME_MAX_LENGTH,
      USERNAME_MIN_LENGTH,
      PASSWORD_MAX_LENGTH,
      PASSWORD_MIN_LENGTH
    };
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(USERNAME_REGEX),
    Validators.maxLength(USERNAME_MAX_LENGTH),
    Validators.minLength(USERNAME_MIN_LENGTH)
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX),
    Validators.maxLength(PASSWORD_MAX_LENGTH),
    Validators.minLength(PASSWORD_MIN_LENGTH)
  ]);
  againPasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(new RegExp(`^${this.password}$`))
  ]);

  submit(): void {
    console.log(this.username);
  }

  cancel(): void {
  }
}
