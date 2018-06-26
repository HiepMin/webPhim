import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import swal from 'sweetalert2';
import { Router } from "@angular/router";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./../../../assets/scss/layout/_main-menu.scss']
})
export class MenuComponent implements OnInit {

	public DurationScroll:number = 1500;
	public DaDangNhap:boolean = false;
	



	@ViewChild("sideBar") sideBar:ElementRef;
	@ViewChild("burgerIcon") burgerIcon:ElementRef;
	constructor(
		private AlertService:SweetAlertService,
		private router:Router
	) { }

	DangXuat(){
		this.AlertService.AlertWarning("Bạn Mó Muốn Rời Khỏi Đây", () => {
			localStorage.removeItem("user");
			this.AlertService.toastRight("Good Bye Bro!!");
			this.router.navigate(['/'])
		})
	}


	ngOnInit() {
		
	}

	showSideBar(btn){
		event.preventDefault();
		btn.classList.toggle("active");
		this.sideBar.nativeElement.classList.toggle("active");
	}
	
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		let flag = localStorage.getItem("user");
		if(flag){
			this.DaDangNhap = true;
		}
		else{
			this.DaDangNhap = false;
		}
	}
}
