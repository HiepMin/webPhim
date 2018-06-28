import { 
	Component, 
	OnInit,
	OnDestroy,
	AfterContentChecked,
	AfterViewChecked,
	SimpleChanges,
	OnChanges,
	ViewChild,
	ElementRef
} from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from '../../Services/movie.service';
import { GheDat } from '../../Models/GheDat.class';
import { Movie } from '../../Models/Movie.class';
import { SweetAlertService } from '../../Services/sweet-alert.service';


@Component({
	selector: 'app-dat-ve',
	templateUrl: './dat-ve.component.html',
	styleUrls: []
})
export class DatVeComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewChecked, OnChanges {
	private MaLichChieu: number;
	private ThoiGianChieu: any;
	private unsub_1: Subscription;
	private unsub_2: Subscription;
	private unsub_4: Subscription;
	private TongTien:any = 0;
	private MovieDetail:any= {};
	private MaPhim:number;
	private ListGheNgoi:Array<any> = [];
	private DanhSachGhe: Array<any>;
	private DanhSachGheDat:Array<GheDat> = [];
	private apiURLDatVe:string = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
	private SoLuongGheDangDat:number;
	private GhiChu:Array<any> = [
		{
			ClassName : "DaDatTruoc",
			icon : "times",
			text : "Ghế Đã Được Đặt Trước"
		},
		{
			ClassName : "DangDat",
			icon : "check",
			text : "Ghế Đang Được Đặt"
		},
		{
			ClassName : "CoTheDat",
			icon : "square-o",
			text : "Ghế Có Thể Đặt"
		},
	]
	constructor(
		private ActivedRoute: ActivatedRoute,
		private MovieService: MovieService,
		private alertService: SweetAlertService,
		private router:Router
	) { }
	@ViewChild("TienThanhToan") SoTien:ElementRef;

	ngOnInit() {
		this.unsub_1 = this.ActivedRoute.queryParams.subscribe(thamso => {
			this.MaLichChieu = thamso.MaLichChieu;
			this.MaPhim = Number(thamso.MaPhim);
			this.ThoiGianChieu = thamso.thoiGianChieu;
		}, err => console.log(err))
		this.unsub_2 = this.MovieService.LayChiTietPhongVe(this.MaLichChieu)
			.subscribe((phongve: any) => {
				this.DanhSachGhe = phongve.DanhSachGhe;
				this.MaLichChieu = phongve.MaLichChieu;
			}, err => console.log(err));
		this.unsub_4 = this.MovieService.getDetailMovieByGroup(this.MaPhim)
										.subscribe((res) => {
											this.MovieDetail = res;
											console.log(this.MovieDetail);
										}, err => console.log(err));
	}

	ConfirmDatGhe(GheDat:GheDat){
		for(let i in this.DanhSachGheDat){
			let ThisGhe = this.DanhSachGheDat[i];
			if(!GheDat.TrangThaiGhe && ThisGhe.MaGhe == GheDat.MaGhe){
				this.DanhSachGheDat.splice(Number(i), 1);
			}
		}
		if(GheDat.TrangThaiGhe){
			this.DanhSachGheDat.push(GheDat);
		}
		this.tinhTien(this.DanhSachGheDat);
		this.TimSoGhe(this.DanhSachGheDat);
		this.SoLuongGheDangDat = this.DanhSachGheDat.length;
		console.log(this.ListGheNgoi);
	}
	tinhTien(ds){
		this.TongTien = 0;
		for(let i in ds){
			this.TongTien +=ds[i].GiaVe;
		}
	}
	TimSoGhe(ds){
		this.ListGheNgoi = [];
		for(let i in ds){
			this.ListGheNgoi.push(ds[i].TenGhe);
		}
	}
	ConfirmDatVe(){
		if(localStorage.getItem("user")){
			this.alertService.AlertWarning("Bạn Có Chăc??", () => {
				let user = 	JSON.parse(localStorage.getItem("user"));
				let ve = {
					MaLichChieu: this.MaLichChieu,
					TaiKhoanNguoiDung : user.TaiKhoan,	
					DanhSachVe : this.DanhSachGheDat
				}
				this.MovieService.DatVe(ve)
								.subscribe((res) => {
									this.alertService.AlertSuccess("Đặt Vé Thành Công!!", () => {
										this.router.navigate(['/']);
									}, "Chúc Bạn Xem Phim Vui Vẻ!!");
								}, err => {
									this.alertService.AlertError("Không Thể Đặt Vé!!"," Xin Kiểm Tra Lại!!", () => false);
								})
			}, "Vé Không Thể Hoàn Trả...")
		}
		else{
			return false;
		}
	}
	ngOnDestroy() {
		this.unsub_1.unsubscribe();
		this.unsub_2.unsubscribe();
		this.unsub_4.unsubscribe();
	}
	ngAfterContentChecked() {}
	ngAfterViewChecked() {
	}
	ngOnChanges(changes: SimpleChanges): void {}
}
