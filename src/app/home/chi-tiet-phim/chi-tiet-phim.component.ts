import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MovieService } from "./../../Services/movie.service";

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {

  param1: Subscription;
  public urlImage:string = "http://sv.myclass.vn/Images/Movies/";
  public MovieDetail:any = {};
  public MovieID:number;
  public MaNhom:any;
  public Param1:Subscription;
  public Param2:Subscription;

  constructor(
    private movieDetailSer:MovieService,
    private Activated:ActivatedRoute,
    private Router:Router
  ) { }

  ngOnInit() {
    this.Activated.queryParams.subscribe(thamso => {
      this.MovieID = parseInt(thamso.id);
      this.MaNhom = thamso.groupid;
    })
    this.movieDetailSer.getDetailMovieByGroup(this.MovieID, this.MaNhom)
                                      .subscribe((res:any) => {
                                        this.MovieDetail = res;
                                      }, error => {
                                        this.MovieDetail = error;
                                      })
    // this.param1 = this.Activated.params.subscribe(thamso => {
    //   this.MovieID = thamso.id;
    // })
    // this.Param2 = this.movieDetailSer.getDetailMovie(this.MovieID)
    //                                   .subscribe((res:any) => {
    //                                     this.MovieDetail = res;
    //                                     console.log(this.MovieDetail);
    //                                   }, error => {
    //                                     this.MovieDetail = error;
    //                                     console.log(this.MovieDetail);
    //                                   })
    // this.Param1 = this.Activated.params.subscribe(thamso => {

  }
  ngOnDestroy(){
    // this.Param1.unsubscribe();
    // this.Param2.unsubscribe();
  }
}
