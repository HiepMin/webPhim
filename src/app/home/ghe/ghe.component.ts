import { 
	Component, 
	OnInit, 
	Input,
	EventEmitter,
	Output
} from '@angular/core';
import { GheDat } from '../../Models/GheDat.class';

@Component({
	selector: 'app-ghe',
	templateUrl: './ghe.component.html',
	styleUrls: ['./../../../assets/scss/layout/_ghe.scss']
})
export class GheComponent implements OnInit {

	public TrangThaiGhe:boolean = false;//false: chua ai dat, true: DA CO NGUOI DAT
	@Input("ghe") MotGhe:any;
	@Output() SendObjectGhe = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}
	DatGhe(ghe:any){
		this.TrangThaiGhe = !this.TrangThaiGhe;
		let GheDuocDat = new GheDat(ghe.MaGhe,ghe.GiaVe,this.TrangThaiGhe, ghe.TenGhe);
		this.SendObjectGhe.emit(GheDuocDat);
		// console.log(ghe);
		// console.log(GheDuocDat);
	}


}
