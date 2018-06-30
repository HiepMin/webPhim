import { Component, OnInit } from '@angular/core';

import { UserService } from "./../../Services/user.service";

@Component({
  selector: 'app-quan-li-nguoi-dung',
  templateUrl: './quan-li-nguoi-dung.component.html',
  styleUrls: []
})
export class QuanLiNguoiDungComponent implements OnInit {

  private ListNguoiDung:Array<any>;
  private typeUser:any;
  constructor(private _UserService:UserService) { }

  ngOnInit() {
    this._UserService.getListUser()
              .subscribe((res:Array<any>) => {
                this.ListNguoiDung = res;
                console.log(this.ListNguoiDung);
              }, err => {
                this.ListNguoiDung = err;
                console.log(this.ListNguoiDung);
              })
    this._UserService.getTypeUser()
                      .subscribe((res:any) => {
                          this.typeUser = res;
                          console.log(this.typeUser);
                      }, err => {
                          this.typeUser = err;
                          console.log(this.typeUser);
                      })

  }

}
