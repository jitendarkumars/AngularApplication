import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  countryList;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { 

      if(localStorage.getItem('user')){
        this.router.navigate(['/dashboard'])
      }
    }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileOperator:['',Validators.required],
      countryCode:['',Validators.required],
      mobileNumber:['',Validators.required],
      amount:['',Validators.required]
    })
    this.commonHelper.getCountry().subscribe(res=>{
      this.countryList=res;
      this.signUpForm.get('countryCode').patchValue(this.countryList[0].callingCodes[0])
    })
  }
  
  register(){
    if(this.signUpForm.valid){
      const registerRequest ={
        firstName: this.signUpForm.get('firstName').value,
        lastName: this.signUpForm.get('lastName').value,
        email: this.signUpForm.get('email').value,
        mobileOperator: this.signUpForm.get('mobileOperator').value,
        mobileNumber: this.signUpForm.get('mobileNumber').value,
        amount: this.signUpForm.get('amount').value,
      }

      this.authenticationService.register(registerRequest).subscribe(response=>{
        this.commonHelper.showSuccessToast("Registration Success","Success",5000);
        this.router.navigate(['/dashboard'])
        localStorage.setItem("user",registerRequest.firstName)
        this.commonHelper.setUserStatus(registerRequest.firstName);
      })
    }else{
      this.commonHelper.validateFormFields(this.signUpForm)
    }
  }

}
