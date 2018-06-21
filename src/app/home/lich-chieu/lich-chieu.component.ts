import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';

import * as $ from 'jquery';

@Component({
	selector: 'app-lich-chieu',
	templateUrl: './lich-chieu.component.html',
	styleUrls: ['./../../../assets/scss/layout/_lich-chieu-phim.scss']
})
export class LichChieuComponent implements OnInit {


	public RapChieuPhim: Array<any>;
	public ChiTietLichChieu:Array<any>;
	public urlImage: string = "./../../../assets/images/";


	constructor(private MovieService: MovieService) { }

	ngOnInit() {
		this.RapChieuPhim = this.MovieService.GetRapChieuPhim();
		this.ChiTietLichChieu = this.MovieService.GetChiTietLichChieu();
	}

	showRapChieu(e, item){
		event.preventDefault();
		$(this).addClass("active");
		console.log(item);
		$(".divRapChieu li").removeClass("active");
		$(item).addClass("active");
		$(".divLichChieu .container").removeClass("active");
		$(`#rapActive_${e}`).addClass("active");
	}

}
