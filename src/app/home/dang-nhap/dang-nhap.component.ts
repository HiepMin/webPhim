import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "./../../Services/user.service";
import { UserSignUp } from "./../../Models/UserSignUp.class";
import { Subscription } from 'rxjs';

import swal from 'sweetalert2'
declare var $: any;

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
          localStorage.removeItem("user");
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Có Gì Đó Sai Sai Ở Đây!!',
          })
        }
        else{
          swal({
            type: 'success',
            title: 'Đăng Nhập Thành Công!!',
            showConfirmButton: true,
          }).then((result) => {
            if(result.value){
              $("#modalDangNhap").modal("hide");
              console.log($("#modal"));
              swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                type: 'success',
                title: `Xin Chào ${res.HoTen}`,
              })
              localStorage.setItem("user",JSON.stringify(res))
            }
          })
        }
      })
    }
   
  }
  ngOnDestroy(){
    this.unsub.unsubscribe();
  }
}
