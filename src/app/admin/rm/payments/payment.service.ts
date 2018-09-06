import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ResponseJson } from '../../../domain/ResponseJson';

let headers1 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

headers1 =   headers1.set('Authorization',
         'OTY1NDc4NTIxMF80X251bGxfM18wOjA6MDowOjA6MDowOjFfMjAxOC0wOC0xOCAwOToyNjozNC42NDI=');


@Injectable()
export class PaymentService {

  backendUrl=environment.backendUrl;
  
  constructor(private http:HttpClient){ }

  public getPaymentList() {
    return this.http.get<ResponseJson>(this.backendUrl+"/rm/payments",{headers:headers1});
  }


  public verifyPayment(paymentId,gstPlanId,serviceId){

      console.log(paymentId);
      let params = new HttpParams();
      params = params.append('paymentId', paymentId);
      params = params.append('gstPlanId', gstPlanId);
      if(serviceId==null || serviceId=="" || serviceId==undefined)
        serviceId=0
      params = params.append('serviceId', serviceId);
      return this.http.get<ResponseJson>(this.backendUrl+"/rm/verify/payment",{headers:headers1,params});
    }
}
