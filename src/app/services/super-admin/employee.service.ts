import { environment } from './../../../environments/environment.prod';
import { ResponseJson } from './../../domain/ResponseJson';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';

import { UserDetail } from '../../domain/user-detail';

let headers1 = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8'
});

headers1 = headers1.set(
  'Authorization',
  'OTYzMjM2OTUwMF82X251bGxfNF8wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0yMCAxMToxMDozNS4wNTI='
);

@Injectable()
export class EmployeeService {
  url = environment.backendUrl;
  fetchEmployeesUrl = this.url + 'admin/employees';
  addEmployeeUrl = this.url + 'admin/add-employee';
  changeStatus = this.url + 'admin/change-status';
  updateEmployee = this.url + 'admin/update-employee';
  fetchRMList = this.url + 'admin/rm';
  fetchUnmappedCustomersList = this.url + 'admin/customers';
  fetchMappedCustomersList = this.url + 'admin/mapped-customers';
  mapCustomersURL = this.url + 'admin/map-customers?';
  unmapCustomerFromRMURL = this.url + 'admin/unmap-customer?';

  constructor(private http: HttpClient) {}

  public getEmployees() {
    return this.http.get<ResponseJson>(this.fetchEmployeesUrl, { headers: headers1 });
  }

  public addEmployee(user) {
    return this.http.post<UserDetail>(this.addEmployeeUrl, user, {
      headers: headers1
    });
  }

  public changeEmployeeStatus(id, status) {
    return this.http.get<ResponseJson>(
      this.changeStatus + '/' + id + '/' + status,
      { headers: headers1 }
    );
  }

  public editEmployee(user) {
    return this.http.post<UserDetail>(this.updateEmployee, user, {
      headers: headers1
    });
  }

  public getRmList() {
    return this.http.get<ResponseJson>(this.fetchRMList, { headers: headers1 });
  }

  public getUnmappedCustomersList() {
    return this.http.get<ResponseJson>(this.fetchUnmappedCustomersList, {
      headers: headers1
    });
  }

  public mapCustomersToRM(id, customerId) {
    return this.http.get<ResponseJson>(
      this.mapCustomersURL + 'empId=' + id + '&customerId=' + customerId,
      { headers: headers1 }
    );
  }

  public getMappedCustomersList() {
    return this.http.get<ResponseJson>(this.fetchMappedCustomersList, {
      headers: headers1
    });
  }

  public unmapCustomerFromRM(customerId) {
    return this.http.get<ResponseJson>(
      this.unmapCustomerFromRMURL + '&id=' + customerId,
      { headers: headers1 }
    );
  }
}
