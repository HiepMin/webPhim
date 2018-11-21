export class Movie{
    DanhGia:number;
    HinhAnh:string;
    MaNhom:string;
    MaPhim:number;
    MoTa:string;
    NgayKhoiChieu:Date;
    TenPhim:string;
    Trailer:string;

    constructor(
        DanhGia:number,
        HinhAnh:string,
        MaNhom:string,
        MaPhim:number,
        MoTa:string,
        NgayKhoiChieu:Date,
        TenPhim:string,
        Trailer:string
    ){
        this.DanhGia  = DanhGia;
        this.HinhAnh  = HinhAnh;
        this.MaNhom  = MaNhom;
        this.MaPhim  = MaPhim;
        this.MoTa  = MoTa;
        this.NgayKhoiChieu  = NgayKhoiChieu;
        this.TenPhim  = TenPhim;
        this.Trailer  = Trailer;
    }

   
    
}