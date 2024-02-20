import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  public EmailValidator(): ValidatorFn
  {
    return (control: AbstractControl): ValidationErrors | null =>
    {
      var email = new String(control.value);
      
      if (!control.value)
        return null; 

      if(email.includes('@'))
      return null; //valid
      else
        return { validEmail: { valid: false } }; //invalid
    };
  }
}
