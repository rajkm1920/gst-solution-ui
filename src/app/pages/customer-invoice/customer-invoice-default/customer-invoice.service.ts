import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Invoice } from '../../../domain/invoice';
import { ResponseJson } from '../../../domain/ResponseJson';

const headers = new HttpHeaders({
  // 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
  Authorization:
    'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
});

@Injectable()
export class CustomerInvoiceService {
  backendUrl = environment.backendUrl;
  // addUrl = this.backendUrl+'/user/save/gstin';
  fetchProcessInvoice = this.backendUrl + '/user/processed/invoices';
  fetchUnProcessInvoice = this.backendUrl + '/user/unprocessed/invoices';
  removeInvoiceDoc = this.backendUrl + '/remove/invoice/document';
  constructor(private http: HttpClient) {}

  // addGST(GST:GST){
  //     console.log("call success ADD GSTN ");
  //     const httpOptions={headers};
  //     return this.http.post<ResponseJson>(this.addUrl,GST,httpOptions);
  //     }

  fetchProcessedInvoice(invoice: Invoice) {
    console.log('call fetchProcessedInvoice ');
    const httpOptions = { headers };
    return this.http.post<ResponseJson>(
      this.fetchProcessInvoice,
      invoice,
      httpOptions
    );
  }

  fetchUnProcessedInvoice(invoice: Invoice) {
    console.log('call fetchUnProcessedInvoice ');
    const httpOptions = { headers };
    return this.http.post<ResponseJson>(
      this.fetchUnProcessInvoice,
      invoice,
      httpOptions
    );
  }

  removeInvoiceDocument(id) {
    const httpOptions = { headers };
    return this.http.delete<ResponseJson>(
      this.removeInvoiceDoc + '?invoiceDocumentId=' + id,
      httpOptions
    );
  }
}
