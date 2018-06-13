import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import { UserService } from "./../../Services/user.service";
import { UserRegister } from "./../../Models/UserRegister.class";

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private _UserService:UserService) { }



  private UserRegister:UserRegister;
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

  ngOnInit() {
  }

  DangKy(user:any){
    user.DateOfBirth = user.DateOfBirth.formatted;
    this._UserService.RegisterAccount(user).subscribe((res:UserRegister) => {
      this.UserRegister = res;
      console.log(this.UserRegister);
    }, error => {
      this.UserRegister = error;
      console.log(this.UserRegister);//Username already exists
    })
  }

}
