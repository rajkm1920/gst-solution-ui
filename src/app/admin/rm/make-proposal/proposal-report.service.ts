import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { environment } from '../../../../environments/environment.prod';



const headers = new HttpHeaders({
   'Content-Type':  'application/json;charset=utf-8',
  'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
});

@Injectable()
export class ProposalReportService {
  backendUrl=environment.backendUrl;
 
 constructor(private http: HttpClient) { }

 getReport(report){
    console.log("GET REPORT SERVICE ")

    const httpOptions={headers};
     return this.http.post<ResponseJson>(this.backendUrl+"/rm/report",report,httpOptions);
  }

  makeReportProposal(report){
    console.log("MAKE PROPOSAL SERVICE")

    const httpOptions={headers};
     return this.http.post<ResponseJson>(this.backendUrl+'/rm/make/proposal',report,httpOptions);
  }

  public getProcessedInvoices(invoice) {
    const httpOptions={headers};
    return this.http.post<ResponseJson>(this.backendUrl+"/user/processed/invoices",invoice,httpOptions);
  }
  public getUnProcessedInvoices(invoice) {
    const httpOptions={headers};
    return this.http.post<ResponseJson>(this.backendUrl+"/user/unprocessed/invoices",invoice,httpOptions);
  }
}
