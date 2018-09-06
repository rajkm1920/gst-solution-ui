import { GST } from './../../../domain/GST';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { environment } from '../../../../environments/environment.prod';

const headers = new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
  });

  @Injectable()
  export class RegisterGST {
    backendUrl=environment.backendUrl;
    addUrl = this.backendUrl+'/user/save/gstin';
    fetchStates = this.backendUrl+'/user/state';
    fetchCity = this.backendUrl+'/user/city';

    constructor(private http: HttpClient) {   }

addGST(GST: GST) {
    console.log('call success ADD GSTN ' + GST);
    const httpOptions = {headers};
    return this.http.post<ResponseJson>(this.addUrl, GST, httpOptions);
    }

fetcheState() {
  console.log('call States ');
  const httpOptions = {headers};
     return this.http.get<ResponseJson>(this.fetchStates, httpOptions);
    }

fetcheCities(stateId: string) {
  console.log('call Cities ');
  const params = new HttpParams()
  .set('stateId', stateId);
  const httpOptions = {headers, params};

     return this.http.get<ResponseJson>(this.fetchCity, httpOptions);
    }
}
