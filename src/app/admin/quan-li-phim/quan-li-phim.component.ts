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
  themPhim(movie:any, files:any, date:any){
    // let file= files[0];
    // let formData:FormData = new FormData();
    // formData.append("Files", file, file.name);
    // formData.append("ID", movie.ID.toString());

    // //upload anh
    // this.MovieService.uploadFile(formData)
    //                 .subscribe(res => {
    //                   console.log(res);
    //                 }, err => {
    //                   console.log(err);
    //                 })
    // console.log(date);
    // movie.Image = file.name;
    // movie.GroupID = "GP07";
    // movie.RealeaseDate = date.value;
    // this.MovieService.createMovie(movie)
    //                   .subscribe(data => console.log(data), err => console.log(err))
    // console.log(movie);
    // console.log(file);  
    // console.log(date);
    // this.MovieService.createMovie(movie)
    //                   .subscribe(res => {
    //                     console.log(res);
    //                   }, error => {
    //                     console.log(error);
    //                   });
  }

  CreateMovie(movie: Movie, files: any, date: any) {

    // if (files[0].length > 0 && (files[0].type === "image/jpeg" || files[0].type === "image/png")) {
    //   alert("file không đúng định dạng!");
    //   return;
    // }
    let file = files[0];
    //service upload file
    var formData: FormData = new FormData();
    formData.append('Files', file, file.name);
    formData.append('ID',movie.ID.toString());
    //upload anh 
    this.MovieService.uploadFile(formData).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
    //Them Phim
    movie.Image = file.name;
    movie.GroupID = "GP01";
    movie.RealeaseDate = date.value;
    this.MovieService.createMovie(movie)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });;
  }


}
