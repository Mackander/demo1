import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusList = [{ key: 'stable', displayValue: 'Stable' },
  { key: 'critical', displayValue: 'Critical' },
  { key: 'finished', displayValue: 'Finished' }];

  projectNameBlackList = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectMainData': new FormGroup({
        'projectName': new FormControl(
          null,
          [Validators.required], // this.forbiddenProjectName.bind(this)],
          this.asyncForbiddenProjectName.bind(this)), // async validator
        'email': new FormControl(null, [Validators.email, Validators.required])
      }),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.projectNameBlackList.includes(control.value)) {
      return { 'notAllowed': true };
    }
    return null; // {'notAllowed': false }; it is intutive to send this object with false but to make it work we need to pass null
  }

  asyncForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.projectNameBlackList.includes(control.value)) {
          resolve({ 'notAllowed': true });
        } else {
          resolve(null); // resolve({ 'notAllowed': false }); it is intutive to send this object with false but to make it work we need to pass null
        }
      }, 1500);
    });
    return promise;
  }

  notAllowedEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsInvalid': true });
        } else {
          resolve(null); // resolve({ 'emailIsInvalid': false }); it is intutive to send this object with false but to make it work we need to pass null
        }
      }, 1500);
    });
    return promise;
  }
}
