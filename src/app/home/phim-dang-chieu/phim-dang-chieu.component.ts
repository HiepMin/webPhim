import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';
import { DomSanitizer  } from '@angular/platform-browser';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class PhimDangChieuComponent implements OnInit, OnDestroy {

  
    private DanhSachPhimServices: Array<Movie>;
    public urlImages: string = "http://sv.myclass.vn/Images/Movies/";
    public sub1: Subscription;
    private MaNhom: string = "GP07";
    public entryMovie: number = 4;
    public slMovieDangChieu: number;
    public TrailerURL:string = '';
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

    @Output() sendSlPhim = new EventEmitter();
    @ViewChild("modalTrailer") modalTrailer:ElementRef;
    ngOnInit() {
        this.sub1 = this.MovieSer.layDanhSachPhim()
            .subscribe((res: Array<Movie>) => {
                this.DanhSachPhimServices = res;
            }, error => {
                this.DanhSachPhimServices = error;
            })
        
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    showTrailer(e) {
        event.preventDefault();
        this.CallTrailer = !this.CallTrailer;
        this.TrailerURL = e + "?autoplay=1";
        // console.log(this.modalTrailer);
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
    // hideTrailer(){
    //     if($('#modalTrailer').modal('hide')){
    //         this.CallTrailer = false;
    //     }
    // }
}
