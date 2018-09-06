import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { QueryDetail } from '../../../domain/query-detail';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';
import { QueryResponse } from '../../../domain/query-response';

const headers = new HttpHeaders({
  // 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;charset=utf-8',
  Authorization:
    'OTg1NTY2MjIxMV8xX251bGxfMV8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAxMjowMTozNi44OTc='
});
@Injectable()
export class ServiceRequestService {
  backendUrl = environment.backendUrl;
  queryURL = this.backendUrl + '/user/query';
  userQueriesURL = this.backendUrl + '/user/queries?userId=';
  queryResponseURL = this.backendUrl + '/user/query/response';

  constructor(private http: HttpClient) {}

  userQuery(query: QueryDetail) {
    const httpOptions = { headers };
    return this.http.post<ResponseJson>(this.queryURL, query, httpOptions);
  }

  fetchUserQueries(userId) {
    const httpOptions = { headers };
    return this.http.get<ResponseJson>(
      this.userQueriesURL + userId,
      httpOptions
    );
  }

  queryResponse(reply: QueryResponse) {
    const httpOptions = { headers };
    return this.http.post<ResponseJson>(
      this.queryResponseURL,
      reply,
      httpOptions
    );
  }
}
