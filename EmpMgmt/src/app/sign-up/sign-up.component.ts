import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { CustomValidatorService } from '../custom-validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent{

  signUpForm : FormGroup | any = null;
  

  constructor(private customValidatorService: CustomValidatorService)
  {

  }
  ngOnInit()
  {
     this.signUpForm = new FormGroup({
      firstName : new FormControl(null),
      lastName: new FormControl(null),
      email:new FormControl(null, [Validators.required, this.customValidatorService.EmailValidator()])
     });
  }

}


  
