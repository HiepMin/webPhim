export class UserRegister{
    TaiKhoan:string;
    MatKhau:string;
    Email:string;
    SoDT:string;
    MaNhom:string;
    MaLoaiNguoiDung:string;
    HoTen:string;
    constructor(
        TaiKhoan:string,
        MatKhau:string,
        Email:string,
        SoDT:string,
        MaNhom:string,
        MaLoaiNguoiDung:string,
        HoTen:string
    ){
        this.TaiKhoan = TaiKhoan;
        this.MatKhau = MatKhau;
        this.Email = Email;
        this.SoDT = SoDT;
        this.MaNhom = MaNhom;
        this.MaLoaiNguoiDung = MaLoaiNguoiDung;
        this.HoTen = HoTen;
    }

}