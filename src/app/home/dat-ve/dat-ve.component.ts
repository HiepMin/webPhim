import { 
	Component, 
	OnInit,
	OnDestroy,
	AfterContentChecked,
	AfterViewChecked,
	SimpleChanges,
	OnChanges
} from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../Services/movie.service';
import { GheDat } from '../../Models/GheDat.class';
import { Movie } from '../../Models/Movie.class';
@Component({
	selector: 'app-dat-ve',
	templateUrl: './dat-ve.component.html',
	styleUrls: ['./../../../assets/scss/layout/_phong-ve.scss']
})
export class DatVeComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewChecked, OnChanges {
	private MaLichChieu: number;
	private ThoiGianChieu: any;
	private TongTien:number = 0;
	private unsub_1: Subscription;
	private unsub_2: Subscription;
	private unsub_4: Subscription;
	private MovieDetail:any= {};
	private MaPhim:number;
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
			this.MaPhim = Number(thamso.MaPhim);
			this.ThoiGianChieu = thamso.thoiGianChieu;
			console.log(this.MaPhim);
			console.log(this.ThoiGianChieu);
		}, err => console.log(err))
		this.unsub_2 = this.MovieService.LayChiTietPhongVe(this.MaLichChieu)
			.subscribe((phongve: any) => {
				this.DanhSachGhe = phongve.DanhSachGhe;
				this.MaLichChieu = phongve.MaLichChieu;
				// console.log(this.DanhSachGhe);
			}, err => console.log(err));
		this.unsub_4 = this.MovieService.getDetailMovieByGroup(this.MaPhim)
										.subscribe((res) => {
											this.MovieDetail = res;
											console.log(this.MovieDetail);
										}, err => console.log(err));
	}

	ConfirmDatGhe(GheDat:GheDat){
		// if(this.DanhSachGheDat.length == 0){
		// 	console.log("k co");
		// }
		// else{
		// 	console.log("da co");
		// }
		for(let i in this.DanhSachGheDat){
			let ThisGhe = this.DanhSachGheDat[i];
			if(!GheDat.TrangThaiGhe && ThisGhe.MaGhe == GheDat.MaGhe){
				this.DanhSachGheDat.splice(Number(i), 1);
			}
		}
		if(GheDat.TrangThaiGhe){
			this.DanhSachGheDat.push(GheDat);
		}
		console.log(this.DanhSachGheDat);
		// this.tinhTong(this.DanhSachGheDat);
		// for(let i in this.DanhSachGheDat){
		// }

	}
	
	ConfirmDatVe(){
		if(localStorage.getItem("user")){
			let user = 	JSON.parse(localStorage.getItem("user"));
			let ve = {
				MaLichChieu: this.MaLichChieu,
				TaiKhoanNguoiDung : user.TaiKhoan,	
				DanhSachVe : this.DanhSachGheDat
			}
			this.MovieService.DatVe(ve)
							.subscribe((res) => {
								console.log(res);
							}, err => {
								console.log(err);
							})
		}
		else{
			return false;
		}
	}
	ngOnDestroy() {
		this.unsub_1.unsubscribe();
		this.unsub_2.unsubscribe();
		// this.unsub_3.unsubscribe();
		this.unsub_4.unsubscribe();
	}
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		
	}
	ngAfterViewChecked() {
		//Called after every check of the component's view. Applies to components only.
		//Add 'implements AfterViewChecked' to the class.
	}
	ngOnChanges(changes: SimpleChanges): void {
		//Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
		//Add '${implements OnChanges}' to the class.
	}
}
