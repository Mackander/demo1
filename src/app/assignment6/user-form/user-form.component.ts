import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild("f") userForm: NgForm;

  constructor() { }
  subscriptionTypes = [{ key: 'basic', displayValue: 'Basic' },
  { key: 'advance', displayValue: 'Advance' },
  { key: 'basic', displayValue: 'Key' }];

  ngOnInit() {
    this.userForm.form.patchValue({
      subscription: 'advance'
    })
  }
  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
  }
}
