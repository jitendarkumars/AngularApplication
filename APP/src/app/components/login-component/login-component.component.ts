import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,
              private authenticationService:AuthenticationService,
              private commonHelper:CommonHelperService,
              private router:Router
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  login(){
    if(this.loginForm.valid){
      const loginRequest ={
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      }
      this.authenticationService.register(loginRequest).subscribe(response=>{
      if(response && response.statusCode==0){
        this.commonHelper.showSuccessToast("Registration Success","Success",5000);
        this.router.navigate(['/dashboard'])
        }
        else
        this.commonHelper.showErrorToast(response.responseMessage,"Error",5000);
      })
    }else {
     this.commonHelper.validateFormFields(this.loginForm);
    }
  }

}

