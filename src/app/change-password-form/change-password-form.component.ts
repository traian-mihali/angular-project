import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component } from '@angular/core';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.less']
})
export class ChangePasswordFormComponent {
  // form: FormGroup;

  // constructor(fb: FormBuilder) {
  //   this.form = fb.group(
  //     {
  //       oldPassword: [
  //         "",
  //         Validators.required,
  //         PasswordValidators.shouldBeValid
  //       ],
  //       newPassword: ["", Validators.required],
  //       confirmPassword: ["", Validators.required]
  //     },
  //     {
  //       validator: PasswordValidators.shouldMatch
  //     }
  //   );
  // }

  form = new FormGroup(
    {
      oldPassword: new FormControl(
        '',
        Validators.required,
        PasswordValidators.shouldBeValid
      ),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    PasswordValidators.shouldMatch
  );

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
