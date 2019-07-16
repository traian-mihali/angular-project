import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static shouldMatch(control: AbstractControl) {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value) {
      return { shouldMatch: true };
    }

    return null;
  }

  static shouldBeValid(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') { resolve({ shouldBeValid: true }); } else { resolve(null); }
      }, 1000);
    });
  }
}
