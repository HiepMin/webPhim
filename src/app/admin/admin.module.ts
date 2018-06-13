import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLiNguoiDungComponent } from './quan-li-nguoi-dung/quan-li-nguoi-dung.component';
import { QuanLiPhimComponent } from './quan-li-phim/quan-li-phim.component';
import { QuanLiLichChieuComponent } from './quan-li-lich-chieu/quan-li-lich-chieu.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

const AdminRoutes:Routes = [
  {
    path : "", component : AdminLayoutComponent, children : [
      {
        path : "quanliphim",component : QuanLiPhimComponent
      },
      {
        path : "quanlinguoidung",component : QuanLiNguoiDungComponent
      },
      {
        path : "quanlilichchieu", component : QuanLiLichChieuComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [QuanLiNguoiDungComponent, QuanLiPhimComponent, QuanLiLichChieuComponent, AdminLayoutComponent]
})
export class AdminModule { }
