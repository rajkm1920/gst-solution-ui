import { log } from 'util';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { UserDetail } from '../../../domain/user-detail';

const headers = new HttpHeaders({
  // 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
  Authorization:
    'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
});

@Injectable()
export class ProfileService {
  backendUrl = environment.backendUrl;
  userProfileUrl = this.backendUrl + '/user/profile';
  editProfileUrl = this.backendUrl + '/user/profile';
  addWalletAmountUrl = this.backendUrl + '/user/wallet/amount';
  constructor(private http: HttpClient) {}

  getUserProfile(userId: string) {
    const params = new HttpParams().set('userId', userId);

    const options = { params, headers };
    return this.http.get<ResponseJson>(this.userProfileUrl, options);
  }

  editUserProfile(editUser: UserDetail) {
    const options = { headers };
    console.log(editUser);
    return this.http.post<ResponseJson>(this.userProfileUrl, editUser, options);
  }

  addWalletAmount(amount: string) {
    const params = new HttpParams().set('amount', amount);
    const options = { headers, params };
    return this.http.put<ResponseJson>(
      this.addWalletAmountUrl,
      amount,
      options
    );
  }
}
