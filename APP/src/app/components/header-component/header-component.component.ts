import { Component, OnInit } from '@angular/core';
import { CommonHelperService } from 'src/app/services/common-helper.service';

@Component({
  selector: 'Header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {
  isUserAvailabe;
  constructor(private commonHelper:CommonHelperService ) { 
    this.commonHelper.getUserStatus.subscribe(res=>{
      this.isUserAvailabe=res;
      if(this.isUserAvailabe)
      console.log("dfss")
      console.log("cvxcdfss")
      
    })
  }

  ngOnInit() {
  
  }
  logout(){
    localStorage.clear();
    this.commonHelper.setUserStatus('');
  }
}
