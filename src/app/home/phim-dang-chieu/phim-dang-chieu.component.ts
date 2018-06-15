import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';

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
    constructor(private MovieSer: MovieService) { }

    @Output() sendSlPhim = new EventEmitter();
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
