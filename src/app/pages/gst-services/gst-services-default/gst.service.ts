import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { environment } from '../../../../environments/environment.prod';



const httpOptions = {
  headers: new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
  })
};

@Injectable()
export class GSTService {
  backendUrl=environment.backendUrl;
  planUrl = this.backendUrl+'/gst/services';  
  

  constructor(private http: HttpClient){   }
   

  
  getGSTServices (){
    console.log("call success SErvices ")
     return this.http.get<ResponseJson>(this.planUrl,httpOptions);
    
  }

}