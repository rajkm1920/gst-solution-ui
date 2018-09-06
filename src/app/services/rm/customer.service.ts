
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponseJson } from '../../domain/ResponseJson';


let headers1 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

headers1 =   headers1.set('Authorization',
         'OTY1NDc4NTIxMF80X251bGxfM18wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAwOToyNjozNC42NDI=');

@Injectable()
export class CustomerService {

  backendUrl=environment.backendUrl;
  constructor(private http:HttpClient){ }
  public getRMCustomer() {
    return this.http.get<ResponseJson>(this.backendUrl+"/rm/customers",{headers:headers1});
  }
}
