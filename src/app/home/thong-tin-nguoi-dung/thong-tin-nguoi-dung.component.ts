import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../Services/user.service';

@Component({
	selector: 'app-thong-tin-nguoi-dung',
	templateUrl: './thong-tin-nguoi-dung.component.html',
	styleUrls: ['./../../../assets/scss/layout/_thong-tin-nguoi-dung.scss']
})
export class ThongTinNguoiDungComponent implements OnInit {
	private ThongTinTaiKhoan:any = {};
	private unsub_1:Subscription;

	constructor(private UserService:UserService) { }

	ngOnInit() {
		let user = JSON.parse(localStorage.getItem("user"));
		console.log(user.TaiKhoan);
		this.unsub_1 = this.UserService.layLichSuDatVe(user.TaiKhoan)
										.subscribe((res) => {
											this.ThongTinTaiKhoan = res;
											console.log(this.ThongTinTaiKhoan );
										})
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.unsub_1.unsubscribe();
	}

}
