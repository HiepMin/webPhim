import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ngx-modal";
//module
import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { ChiTietPhimComponent } from './home/chi-tiet-phim/chi-tiet-phim.component';

import { HomeModule } from "./home/home.module";
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
    {
        path: "",
        loadChildren: () => HomeModule
    },
    {
        path: "home",
        loadChildren: () => HomeModule
    },
    {
        path: "admin",
        loadChildren: () => AdminModule
    }
]





@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        HttpModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
