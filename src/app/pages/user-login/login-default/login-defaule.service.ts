import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { environment } from '../../../../environments/environment';


  @Injectable()
  export class LoginService {
    backendUrl=environment.backendUrl;
    LoginWithPinUrl = this.backendUrl+'/login';
    LoginWithOtpUrl = this.backendUrl+'/user/save/gstin';

    constructor(private http: HttpClient) {   }

LoginWithPin(userName:string,password:string) {
    const headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Basic ' + btoa(userName+":"+password)
    });
    return this.http.get<ResponseJson>(this.LoginWithPinUrl, {headers});
    }

  }