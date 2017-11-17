import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  subscriptionTypes = [{ key: 'basic', displayValue: 'Basic' },
  { key: 'advance', displayValue: 'Advance' },
  { key: 'basic', displayValue: 'Key' }];

  ngOnInit() {
  }

}
