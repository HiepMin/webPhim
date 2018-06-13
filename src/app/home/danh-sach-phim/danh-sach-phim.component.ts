import { Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';

declare var jquery: any;
declare var $: any;
// import "owl.carousel";


@Component({
    selector: 'app-danh-sach-phim',
    templateUrl: './danh-sach-phim.component.html',
    styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class DanhSachPhimComponent implements OnInit{

    public listShow: string = "phimDangChieu";
    // private DanhSachPhimServices: Array<Movie>;
    // public urlImages: string = "http://sv.myclass.vn/Images/Movies/";
    // public sub1: Subscription;
    // public trailer: string = "";
    // private MaNhom: string = "GP01";
    public entryMovie: number = 4;
    public slMovieDangChieu: number;
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
    // trailer:string;
    constructor() { }

    ngOnInit() {
        // this.sub1 = this.MovieSer.layDanhSachPhim()
        //     .subscribe((res: Array<Movie>) => {
        //         this.DanhSachPhimServices = res;
        //         this.slMovieDangChieu = this.DanhSachPhimServices.length;
        //     }, error => {
        //         this.DanhSachPhimServices = error;
        //     })
        
    }



    // ngOnDestroy() {
    //     this.sub1.unsubscribe();
    // }
    // showTrailer(e) {
    //     this.trailer = e;
    // }
    showContent(e) {
        event.preventDefault();
        this.listShow = e.getAttribute("data-show");
    }
    // showEntries(e) {
    //     if (e == "all") {
    //         this.entryMovie = this.DanhSachPhimServices.length;
    //         this.hidePagiControl = true;
    //     }
    //     else {
    //         this.entryMovie = e;
    //         this.hidePagiControl = false;
    //     }
    // }
    // ngOnChanges(){
        
    // }
   
}


