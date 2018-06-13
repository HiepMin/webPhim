import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";

import { UserSignUp } from "./../Models/UserSignUp.class";
import { UserRegister } from "./../Models/UserRegister.class";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiURLRegister:string = "http://sv.myclass.vn/api/user/registeruser";
  private apiURLSignUp:string = "http://sv.myclass.vn/api/user/login";

  constructor(
    private _http:Http
  ) { }

  RegisterAccount(user:UserRegister):Observable<UserRegister>{
    let header:Headers = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    let body = `data=${JSON.stringify(user)}`;
    var observe = this._http.post(this.apiURLRegister, body, {headers : header})
      .map((res:Response) => res.json());
    return observe;
  }

  SignUpAccount(user:UserSignUp):Observable<UserSignUp>{
    let header = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    let body = `data=${JSON.stringify(user)}`;
    let observe = this._http.post(this.apiURLSignUp, body, {headers:header})
      .map((res:Response) => res.json());
    return observe;
  }

  // createAccount(user:User):Observable<User>{
  //   let header = new Headers();
  //   header.append("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
  //   let body = `data=${JSON.stringify(user)}`;
  //   let obServe = this._http.post(this.apiURLRegister, body, {headers:header})
  //                           .map((res:Response) => res.json());
  //   return obServe;
  // }
  // SignUp(userLogin:UserLogin){
  //   let header = new Headers();
  //   header.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  //   let body = `data=${JSON.stringify(userLogin)}`;

  //   let UserLoginResult:UserLogin = new UserLogin();
  //   let observe = this._http.post(this.apiURLSignUp, body, {headers : header})
  //                           .map((res:Response) => res.json());
  //                           return observe;
  // }


}
