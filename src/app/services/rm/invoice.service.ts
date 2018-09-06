import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ResponseJson } from '../../domain/ResponseJson';
import { BehaviorSubject } from 'rxjs';

let headers1 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

headers1 =   headers1.set('Authorization',
         'OTY1NDc4NTIxMF80X251bGxfM18wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAwOToyNjozNC42NDI=');
     
@Injectable()
export class InvoiceService {
 

  
  backendUrl=environment.backendUrl;
  constructor(private http:HttpClient){ }
  public getInvoices() {
    return this.http.get<ResponseJson>(this.backendUrl+"/rm/invoices",{headers:headers1});
  }

  public getInvoiceDocuments(invoiceid) { 
    console.log(invoiceid+":::::::"+invoiceid);

   let params = new HttpParams();
  params = params.append('invoiceId', invoiceid);
   return this.http.get<ResponseJson>(this.backendUrl+"/rm/invoice/documents",{headers:headers1,params});
  }

  public getStates() { 
    return this.http.get<ResponseJson>(this.backendUrl+"/user/state",{headers:headers1});
  }


  public getProcessedInvoices() {
    return this.http.get<ResponseJson>(this.backendUrl+"/rm/processed/invoices",{headers:headers1});
  }

  public fetchProcessedDocuments(processedInvoiceId) {
    let params = new HttpParams();
  params = params.append('processedInvoiceId', processedInvoiceId);
    return this.http.get<ResponseJson>(this.backendUrl+"/rm/processed/invoice/documents",{headers:headers1,params});
  }

  
  
}
