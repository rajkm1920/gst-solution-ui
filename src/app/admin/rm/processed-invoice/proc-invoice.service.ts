
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { ProcessInvoice } from '../../../domain/process-invoice';
import { ResponseJson } from '../../../domain/ResponseJson';



let headers1 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

headers1 =   headers1.set('Authorization',
         'OTY1NDc4NTIxMF80X251bGxfM18wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAwOToyNjozNC42NDI=');

@Injectable()
export class ProcInvoiceService {
  backendUrl=environment.backendUrl;
  constructor(private http:HttpClient) { }

  public processInvoiceDocuments(processinvoice:ProcessInvoice) { 
      console.log("Invoice Process Service ::::::::"+JSON.stringify(processinvoice));

    return this.http.post<ResponseJson>(this.backendUrl+"/rm/process/invoice",processinvoice,{headers:headers1});

  }

}
