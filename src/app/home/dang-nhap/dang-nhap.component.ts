import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from "./../../Services/user.service";
import { UserSignUp } from "./../../Models/UserSignUp.class";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit, OnDestroy {
  private UserSignUp:UserSignUp;
  private unsub:Subscription;
  public Groups:Array<any> = [
    {Id : "GP01",Name : "nhom 1"},
    {Id : "GP02",Name : "nhom 2"},
    {Id : "GP03",Name : "nhom 3"},
    {Id : "GP04",Name : "nhom 4"},
    {Id : "GP05",Name : "nhom 5"},
    {Id : "GP06",Name : "nhom 6"},
    {Id : "GP07",Name : "nhom 7"},
    {Id : "GP08",Name : "nhom 8"},
    {Id : "GP09",Name : "nhom 9"},
  ];
  constructor(private _UserService:UserService) { }
  ngOnInit() {
  }
  DangNhap(user:UserSignUp){
    this.unsub = this._UserService.SignUpAccount(user).subscribe((res:any) => {
      console.log(res);
    })
    this.unsub = this._UserService.SignUpAccount(user)
    .subscribe((res:any) => {
      if(res === "The account or password is incorrect"){
        console.log(res);
        alert(res);
        localStorage.removeItem("user");
      }
      else{
        console.log(res);
        alert("dang nhap thanh cong");
        localStorage.setItem("user",JSON.stringify(res))
      }
    })
  }
  ngOnDestroy(){
    this.unsub.unsubscribe();
  }
}
