import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectMainData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.notAllowedProjectName)
      }),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.projectNameBlackList.includes(control.value)) {
      return { 'This String is not allowed': false };
    }
    return null;
  }

  notAllowedProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsInvalid': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
