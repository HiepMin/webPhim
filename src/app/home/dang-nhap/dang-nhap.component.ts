import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";


import { UserService } from "./../../Services/user.service";
import { UserSignUp } from "./../../Models/UserSignUp.class";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./../../../assets/scss/layout/_DangNhap.scss']
})
export class DangNhapComponent implements OnInit, OnDestroy {



  private UserSignUp:UserSignUp;
  private unsub:Subscription;
  constructor(
    private _UserService:UserService,
    // private fb:FormBuilder
  ) { }
  ngOnInit() {
    
  }
  DangNhap(user:any, formDangNhap:NgForm){
    if(!formDangNhap.valid){
      console.log("error");
    }
    else{
      this.unsub = this._UserService.SignUpAccount(user)
      .subscribe((res:any) => {
        if(typeof(res) === "string"){
          alert(res);
          localStorage.removeItem("user");
        }
        else{
          alert("dang nhap thanh cong");
          localStorage.setItem("user",JSON.stringify(res))
        }
      })
    }
   
  }
  ngOnDestroy(){
    this.unsub.unsubscribe();
  }
}
