import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl }  from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MovieService } from "./../../Services/movie.service";
// declare var $:any;
import * as $ from 'jquery';


@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./../../../assets/scss/layout/_chitietphim.scss']
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {

  public param1: Subscription;
	public RapChieuPhim: Array<any>;
  public MovieDetail:any = {};
  public MovieID:number;
  // public MaNhom:string;
  public Show:boolean = true;
  public rate:number;
  public Trailer:string;
  public urlImage:string = "./../../../assets/images/";


  constructor(
    private movieDetailSer:MovieService,
    private Activated:ActivatedRoute,
    private Router:Router,
    private DomSanitizer:DomSanitizer
  ) { 
    
  }
  public divShowing:string = "divDatVe";

  ngOnInit() {
    
    this.Activated.queryParams.subscribe(thamso => {
      this.MovieID = parseInt(thamso.id);
      // this.MaNhom = thamso['groupid'];
    })
    this.movieDetailSer.getDetailMovieByGroup(this.MovieID)
                                      .subscribe((res:any) => {
                                        this.MovieDetail = res;
                                        console.log(this.MovieDetail);
                                        this.Trailer = (this.MovieDetail.Trailer).replace("watch?v=", "embed/");
                                        const ratings = this.MovieDetail.DanhGia;
                                        const rateTotal = 5;
                                        const starPercent = (ratings / rateTotal) * 100;
                                        const starPercentRounded = `${Math.round(starPercent / 10) * 10}%`;
                                        $(".stars-inner").css({"width" : starPercentRounded});
                                        
                                      }, error => {
                                        this.MovieDetail = error;
                                        console.log(this.MovieDetail);
                                      })

    this.RapChieuPhim = this.movieDetailSer.GetRapChieuPhim();
  }


  setShowDiv(btn){
    event.preventDefault();
    $(".linkHeading").removeClass("active");
    $(btn).addClass("active");
    console.log(btn.getAttribute("data-setShow"));
    this.divShowing = btn.getAttribute("data-setShow");
  }

  ngOnChanges(a): void {
  }
  ngOnDestroy(){
  }
  ngAfterViewInit(){
  }
}

