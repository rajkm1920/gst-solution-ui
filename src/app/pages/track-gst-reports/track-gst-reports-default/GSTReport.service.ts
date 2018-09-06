import { GSTReportDomain } from './../../../domain/GSTReportDomain';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { environment } from '../../../../environments/environment.prod';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin': '*',
//      'Content-Type':  'application/json;charset=utf-8',
//     'Authorization': 'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
//   })
// };
const headers = new HttpHeaders({
  // 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
  Authorization:
    'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
});

@Injectable()
export class GSTReportService {
  backendUrl = environment.backendUrl;
  planUrl = this.backendUrl + '/gst/fetchreport';
  custGSTNDetailUrl = this.backendUrl + '/user/gstin';
  fetchcustProposal = this.backendUrl+'/user/proposal';

  constructor(private http: HttpClient) {}

  getGSTreports(reports: GSTReportDomain) {
    console.log('call success for Report ');

    const httpOptions = { headers };
    return this.http.post<ResponseJson>(this.planUrl, reports, httpOptions);
  }

  getcustGSTNDetail(customerId: string, customerGstin: string) {
    const params = new HttpParams()
      .set('userId', customerId)
      .set('gstnId', customerGstin);

    const options = { params, headers };

    console.log('call success getcustGSTNDetail ');
    return this.http.get<ResponseJson>(this.custGSTNDetailUrl, options);
  }


  fetchAllProposals(report: GSTReportDomain) {
    const options = {  headers };
    console.log('call success fetch Proposal for report Id ');
    return this.http.post<ResponseJson>(this.fetchcustProposal, report ,options);
  }
}
