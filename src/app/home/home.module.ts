import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from "ngx-modal";

// import { PopupModule} from "ng2-opd-popup";
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
} from "@angular/material";
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { MyDatePickerModule } from "mydatepicker";
//components
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { MovieService } from "./../Services/movie.service";
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";
import { SliderComponent } from './slider/slider.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { VideoComponent } from './video/video.component';
//router

const HomeRoutes: Routes = [
    {
        path: "",
        component: HomeLayoutComponent, children: [
            {
                path: "",//home/
                component: TrangChuComponent
            },
            {
                path: "trangchu",//home/trangchu
                component: TrangChuComponent
            },
            {
                path: "danh-sach-phim",//home/danh-sach-phim
                component: DanhSachPhimComponent
            },
            {
                path: "chi-tiet-phim",
                component: ChiTietPhimComponent
            },
            {
                path: "dang-ky",
                component: DangKyComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        // BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule,
        // BrowserAnimationsModule,
        NgxPaginationModule,
        // MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MyDatePickerModule,
        RouterModule.forChild(HomeRoutes),

    ],
    exports: [
        TrangChuComponent, DanhSachPhimComponent, MenuComponent, ChiTietPhimComponent
    ],
    providers: [MovieService],
    declarations: [TrangChuComponent, DanhSachPhimComponent, MenuComponent, ChiTietPhimComponent, DatVeComponent, HomeLayoutComponent, SliderComponent, DangKyComponent, DangNhapComponent, PhimSapChieuComponent, PhimDangChieuComponent, VideoComponent]
})
export class HomeModule { }
