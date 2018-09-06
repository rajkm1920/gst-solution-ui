import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { Invoice } from '../../../domain/invoice';
import { environment } from '../../../../environments/environment';

const headers = new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
  });
  
  @Injectable()
  export class FileGSTReturn{
    backendUrl=environment.backendUrl
    addUrl = this.backendUrl+'/user/invoice'; 
  

    constructor(private http: HttpClient){   }

fileGSTReturn(invoice:Invoice){
    console.log("call success ADD GSTN ");
    const httpOptions={headers};
    return this.http.post<ResponseJson>(this.addUrl,invoice,httpOptions);
    }



 
}