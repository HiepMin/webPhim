import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { Movie } from '../../Models/Movie.class';
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quan-li-phim',
  templateUrl: './quan-li-phim.component.html',
  styleUrls: ['./quan-li-phim.component.scss']
})
export class QuanLiPhimComponent implements OnInit {

  public entryMovie:number = 5;
  private DanhSachPhimServices:Array<Movie>;
  public unsubDSP:Subscription;

  constructor(private MovieService:MovieService) { }

  ngOnInit() {
    this.unsubDSP = this.MovieService.layDanhSachPhim()
                                      .subscribe((res:Array<Movie>) => {
                                        this.DanhSachPhimServices = res;
                                        console.log(this.DanhSachPhimServices);
                                      }, error => {
                                        this.DanhSachPhimServices = error;
                                        console.log(this.DanhSachPhimServices);
                                      })
  }
  CreateMovie(movie: Movie, files: any, date: any) {
    let file = files[0];
    //service upload file
    var formData: FormData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', movie.TenPhim);
    //upload anh 
    this.MovieService.uploadFile(formData).subscribe(
      data => {},
      error => {
        console.log(error);
      });
    //Them Phim
    movie.HinhAnh = file.name;
    movie.MaNhom = "GP07";
    movie.NgayKhoiChieu = date.value;
    this.MovieService.createMovie(movie)
    .subscribe(
      data => {
        console.log(movie);
        console.log(data);
      },
      error => {
        console.log(movie);
        console.log(error);
      });;
  }

  xoa(id:any){
    this.MovieService.DeleteMovie(id)
                      .subscribe((res:any) => {
                        console.log(res);
                      }, err => console.log(err))
  }



}
