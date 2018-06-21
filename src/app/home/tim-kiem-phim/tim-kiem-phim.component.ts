import { Component, OnInit } from '@angular/core';

import { MovieService } from "./../../Services/movie.service";
import { Movie } from '../../Models/Movie.class';

@Component({
  selector: 'app-tim-kiem-phim',
  templateUrl: './tim-kiem-phim.component.html',
  styleUrls: ['./../../../assets/scss/layout/_input-tim-kiem-phim.scss']
})
export class TimKiemPhimComponent implements OnInit {

  private DanhSachPhimService:Array<Movie>;
  constructor(private _MovieService:MovieService) { }

  ngOnInit() {
    this._MovieService.layDanhSachPhim().subscribe((res:Array<Movie>) => {
      this.DanhSachPhimService = res;
    }, err => {
      this.DanhSachPhimService = err;
    })
  }



  findMovie(key:string){
    console.log(this.DanhSachPhimService);
  }

}
