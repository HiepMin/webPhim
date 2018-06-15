import { Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';

declare var jquery: any;
declare var $: any;
@Component({
    selector: 'app-danh-sach-phim',
    templateUrl: './danh-sach-phim.component.html',
    styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class DanhSachPhimComponent implements OnInit{

    public listShow: string = "phimDangChieu";
    public slMovieSapChieu: number;
    constructor(private MovieService:MovieService) { }

    ngOnInit() {
        this.slMovieSapChieu = this.MovieService.slPhimSapChieu();
    }
    showContent(e) {
        event.preventDefault();
        this.listShow = e.getAttribute("data-show");
    }
}


