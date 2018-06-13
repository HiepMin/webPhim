import { Injectable } from '@angular/core';

import { Movie } from "./../Models/Movie.class";
import { MovieSapChieu } from "./../Models/MovieSapChieu.class";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable({providedIn: "root"})
export class MovieService {

  private urlListMovie:string = "http://sv.myclass.vn/api/movie/getmovie";
  private urlDetailMovie:string = "http://sv.myclass.vn/api/movie/GetMovieDetail";
  private urlDetailMovieByGroup:string = "http://sv.myclass.vn/api/movie/GetMovieDetailByGroup";
  constructor(private _http:Http) { }

  layDanhSachPhim():Observable<Movie[]>{
    return this._http.get(this.urlListMovie)
                      .map((res:Response) => res.json());
  }
  getDetailMovie(maphim:number):Observable<any>{
    return this._http.get(`${this.urlDetailMovie}?id=${maphim}`)
                      .map((res:Response) => res.json());
  } 
  getDetailMovieByGroup(id:any, groupId:any){
    return this._http.get(`${this.urlDetailMovieByGroup}?id=${id}&groupID=${groupId}`)
                    .map((res:Response) => res.json());
  }




  // private DSPhimSapChieu:Array<MovieSapChieu> = [
  //   new MovieSapChieu(
  //     "Jurassic World","J.A. Bayona","https://youtu.be/whixKrf1M_k","08.06.2018","https://s3img.vcdn.vn/mobile/123phim/2018/06/the-gioi-khung-long-vuong-quoc-sup-do-jurassic-world-fallen-kingdom-c13-15283376537341_220x310.jpg","Tất cả những yếu tố kỳ diệu, phiêu lưu, hồi hộp cùng với một trong những thương hiệu nổi tiếng và thành công nhất lịch sự điện ảnh, sự kiện này là một bước chuyển mình về hình ảnh cho thấy sự trở lại của các nhân vật được yêu thích và các loài khủng long đầy cảm hứng và đáng sợ hơn bao giờ hết. Chào mừng đến với Thế Giới Khủng Long: Vương Quốc Sụp Đổ")
  // ];
  // layDanhSachPhimSapChieu():Array<MovieSapChieu>{
    // return this.DSPhimSapChieu;
  // }




}
