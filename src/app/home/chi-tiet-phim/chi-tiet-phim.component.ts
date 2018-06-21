import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer }  from "@angular/platform-browser";
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

  param1: Subscription;
  public urlImage:string = "http://sv.myclass.vn/Images/Movies/";
  public MovieDetail:any = {};
  public MovieID:number;
  public MaNhom:string;
  public rate:number;

  constructor(
    private movieDetailSer?:MovieService,
    private Activated?:ActivatedRoute,
    private Router?:Router,
    private DomSanitizer?:DomSanitizer
  ) { 
    
  }


  ngOnInit() {
    
    this.Activated.queryParams.subscribe(thamso => {
      this.MovieID = parseInt(thamso.id);
      this.MaNhom = thamso['groupid'];
    })
    this.movieDetailSer.getDetailMovieByGroup(this.MovieID, this.MaNhom)
                                      .subscribe((res:any) => {
                                        this.MovieDetail = res;
                                        const ratings = this.MovieDetail.Rating;
                                        const rateTotal = 5;
                                        const starPercent = (ratings / rateTotal) * 100;
                                        const starPercentRounded = `${Math.round(starPercent / 10) * 10}%`;
                                        $(".stars-inner").css({"width" : starPercentRounded});
                                        console.log(starPercentRounded);
                                      }, error => {
                                        this.MovieDetail = error;
                                      })
  }

  ngOnChanges(a): void {
  }
  ngOnDestroy(){
  }
  ngAfterViewInit(){
  }
}

