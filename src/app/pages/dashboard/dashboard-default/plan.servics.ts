import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';



const httpOptions = {
  headers: new HttpHeaders({
    // 'Access-Control-Allow-Origin': '*',
     'Content-Type':  'application/json;charset=utf-8',
    'Authorization': 'MTExMTExMTE5OV83X251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAwOTo1MzozMi4xNDQ='
  })
};

@Injectable()
export class PlanService {
  backendUrl=environment.backendUrl;
  planUrl = this.backendUrl+'/gst/plans';  
  

  constructor(private http: HttpClient){   }
   

  /** GET heroes from the server */
  getPlans (){
    console.log("call success ")
     return this.http.get<ResponseJson>(this.planUrl,httpOptions);
    
  }

}