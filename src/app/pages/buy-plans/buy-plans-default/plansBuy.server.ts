import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { GST } from '../../../domain/GST';

const headers = new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
  });
  
  @Injectable()
  export class PlanBuyService{

    backendUrl=environment.backendUrl

     planBuyUrl = this.backendUrl+'/user/save/gstin'; 
  

    constructor(private http: HttpClient){   }

buyGSTPlan(gst:GST){
    console.log("call success ADD GSTN ");
    const httpOptions={headers};
    return this.http.post<ResponseJson>(this.planBuyUrl,gst,httpOptions);
    }



 
}