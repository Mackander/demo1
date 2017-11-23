import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('f') userForm: NgForm;
  defaultSubscription = 'advance';
  userData = { useremail: '', subscription: '', password: '' };
  displayNotAllowed = true;

  constructor() { }
  subscriptionTypes = [{ key: 'basic', displayValue: 'Basic' },
  { key: 'advance', displayValue: 'Advance' },
  { key: 'basic', displayValue: 'Key' }];

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.userForm.value);
    console.log('IsValid : ' + this.userForm.valid);

    this.userData.useremail = this.userForm.value.useremail;
    this.userData.subscription = this.userForm.value.subscription;
    this.userData.password = this.userForm.value.password;
    this.displayNotAllowed = false;
    this.userForm.reset();
  }
}
