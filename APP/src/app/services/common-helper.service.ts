import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  constructor(private toastr: ToastrService, private http:HttpClient) { }

  showErrorToast(errorTitle,message,time){
    this.toastr.error(errorTitle,message,{timeOut:time})
  }
  
  showSuccessToast(message,errorTitle,time){
    this.toastr.success(message,errorTitle,{timeOut:time})
  }

  validateFormFields(formGroup: FormGroup) {  
      Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field)
        if (control instanceof FormControl) {            
          control.markAsDirty({ onlySelf: true }); 
          control.markAsTouched({ onlySelf: true }); 
          if(control.errors && control.errors.required){
            this.showErrorToast("Field is Required","Error",3000)      
          }
           } else if (control instanceof FormGroup) {        
          this.validateFormFields(control);          
        }
      }); 
  }

  getCountry(){
    return this.http.get("https://restcountries.eu/rest/v2/all");   
  }

private userStatus = new BehaviorSubject(localStorage.getItem('user'));
getUserStatus = this.userStatus.asObservable();

setUserStatus(data){
  this.userStatus.next(data);
}

}
