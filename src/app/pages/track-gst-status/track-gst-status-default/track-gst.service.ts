import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';

const headers = new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
  });

  @Injectable()
  export class TrackGSTService {

   
  
    constructor(private http: HttpClient) {   }



}
