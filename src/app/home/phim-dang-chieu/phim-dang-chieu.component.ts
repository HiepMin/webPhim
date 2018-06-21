import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

import * as $ from "jquery";
// declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class PhimDangChieuComponent {

  
    private DanhSachPhimServices: Array<Movie>;
    public urlImages: string = "http://sv.myclass.vn/Images/Movies/";
    public sub1: Subscription;
    private MaNhom: string = "GP07";
    public entryMovie: number = 4;
    public slMovieDangChieu: number;
    public TrailerURL:SafeResourceUrl;
    public CallTrailer:boolean = false;
    public subTrailer:Subscription;
    public entryList: Array<any> = [
        {
            value: 4,
            view: "4"
        },
        {
            value: 8,
            view: "8"
        },
        {
            value: 12,
            view: "12"
        },
        {
            value: "all",
            view: "all"
        },
    ];
    public hidePagiControl: boolean = false;
    constructor(private MovieSer: MovieService, public sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.sub1 = this.MovieSer.layDanhSachPhim()
            .subscribe((res: Array<Movie>) => {
                this.DanhSachPhimServices = res;
                console.log(this.DanhSachPhimServices);
            }, error => {
                this.DanhSachPhimServices = error;
                console.log(this.DanhSachPhimServices);
            })
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    showTrailer(e) {
        event.preventDefault();
        this.CallTrailer = true;
        this.TrailerURL = this.sanitizer.bypassSecurityTrustResourceUrl(e + "?autoplay=1");
    }

    showEntries(e) {
        if (e == "all") {
            this.entryMovie = this.DanhSachPhimServices.length;
            this.hidePagiControl = true;
        }
        else {
            this.entryMovie = e;
            this.hidePagiControl = false;
        }
    }
    ngOnChanges(){
        
    }
}
// $(function(){
//     const phimDangChieu = new PhimDangChieuComponent();
//     $("body").delegate("#modalTrailer", "hidden.bs.modal", function(){
//        phimDangChieu.CallTrailer = false;
//        phimDangChieu.TrailerURL = "";
//        $("video").trigger("pause");
//     })
// })
