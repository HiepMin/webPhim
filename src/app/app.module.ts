import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//module
import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
import { ChiTietPhimComponent } from './home/chi-tiet-phim/chi-tiet-phim.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeModule } from "./home/home.module";
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthGuard } from './Services/auth.guard';
const appRoutes: Routes = [
    {
        path: "",
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
        HttpModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
