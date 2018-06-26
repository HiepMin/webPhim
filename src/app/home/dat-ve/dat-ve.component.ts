import { 
	Component, 
	OnInit,
	OnDestroy
} from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../Services/movie.service';
import { GheDat } from '../../Models/GheDat.class';


@Component({
	selector: 'app-dat-ve',
	templateUrl: './dat-ve.component.html',
	styleUrls: ['./../../../assets/scss/layout/_phong-ve.scss']
})
export class DatVeComponent implements OnInit, OnDestroy {
	private MaLichChieu: number;
	private unsub_1: Subscription;
	private unsub_2: Subscription;
	private DanhSachGhe: Array<any>;
	private DanhSachGheDat:Array<GheDat> = [];
	private apiURLDatVe:string = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;

	constructor(
		private ActivedRoute: ActivatedRoute,
		private MovieService: MovieService
	) { }

	ngOnInit() {
		this.unsub_1 = this.ActivedRoute.queryParams.subscribe(thamso => {
			this.MaLichChieu = thamso.MaLichChieu;
			// console.log(this.MaLichChieu);
		}, err => this.MaLichChieu = err)
		this.unsub_2 = this.MovieService.LayChiTietPhongVe(this.MaLichChieu)
			.subscribe((phongve: any) => {
				this.DanhSachGhe = phongve.DanhSachGhe;
				this.MaLichChieu = phongve.MaLichChieu;
				// console.log(this.DanhSachGhe);
			}, err => console.log(err));

	}

	ConfirmDatGhe(GheDat:GheDat){
		for(let i in this.DanhSachGheDat){
			let ThisGhe = this.DanhSachGheDat[i];
			//nếu tr
			if(!GheDat.TrangThaiGhe && ThisGhe.MaGhe == GheDat.MaGhe){
				this.DanhSachGheDat.splice(Number(i), 1);
			}
		}
		if(GheDat.TrangThaiGhe){
			this.DanhSachGheDat.push(GheDat);
		}
		console.log(this.DanhSachGheDat);
	}
	ConfirmDatVe(){
		if(localStorage.getItem("user")){
			let user = 	JSON.parse(localStorage.getItem("user"));
			let MaLich = this.MaLichChieu;
			let ve = {
				MaLichChieu: MaLich,
				TaiKhoanNguoiDung : user.TaiKhoan,	
				DanhSachVe : this.DanhSachGheDat
			}
			this.MovieService.DatVe(ve)
							.subscribe((res) => {
								console.log(res);
							}, err => {
								console.log(err);
							})
			// console.log(user.TaiKhoan);
			// console.log(this.DanhSachGheDa/t);
		}
		else{
			return false;
		}
	}
	ngOnDestroy() {
		this.unsub_1.unsubscribe();
		this.unsub_2.unsubscribe();
	}

}
