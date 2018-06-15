import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MovieService } from '../../Services/movie.service';
// import { Movie } from '../../Models/Movie.class';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ["./../../../assets/scss/layout/_trangchu.scss"]
})
export class TrangChuComponent implements OnInit, OnDestroy {

  // private DanhSachPhim:Array<Movie>;
  // private subService:Subscription;
  constructor() { }

  ngOnInit() {
    // this.subService = this.MovieSer.layDanhSachPhim().subscribe((res:Array<Movie>) => {
    //   this.DanhSachPhim = res;
    //   console.log(this.DanhSachPhim);
    // }, error => {
    //   this.DanhSachPhim = error;
    // })
  }

  ngOnDestroy(){
    // this.subService.unsubscribe();
  }
}
