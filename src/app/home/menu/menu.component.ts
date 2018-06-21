import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./../../../assets/scss/layout/_main-menu.scss']
})
export class MenuComponent implements OnInit {


	@ViewChild("sideBar") sideBar:ElementRef;
	@ViewChild("burgerIcon") burgerIcon:ElementRef;
	constructor() { }

	ngOnInit() {
	}

	showSideBar(btn){
		event.preventDefault();
		btn.classList.toggle("active");
		this.sideBar.nativeElement.classList.toggle("active");
		console.log(this.sideBar.nativeElement);
	}
	onClick(){
		event.preventDefault();
	}

}
