import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./../../../assets/scss/layout/_lich-chieu-phim.scss']
})
export class LichChieuComponent implements OnInit {

  
  public RapChieuPhim:Array<any>;
  public urlImage:string = "./../../../assets/images/";


    constructor(private MovieService:MovieService) { }

  ngOnInit() {
    this.RapChieuPhim = this.MovieService.GetRapChieuPhim();
    console.log(this.RapChieuPhim);
  }

}
