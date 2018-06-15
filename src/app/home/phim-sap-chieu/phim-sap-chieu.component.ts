import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from "./../../Services/movie.service";

@Component({
    selector: 'app-phim-sap-chieu',
    templateUrl: './phim-sap-chieu.component.html',
    styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class PhimSapChieuComponent implements OnInit {

    private DSPhimSapChieu:Array<any>;
    constructor(private _MovieService:MovieService) { }
    ngOnInit() {
        this.DSPhimSapChieu = this._MovieService.layDanhSachPhimSapChieu();
    }

}
