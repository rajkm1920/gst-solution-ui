
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Http} from '@angular/http';
import { CustomerDto } from '../../../domain/customer-dto';

import { CustomerService } from '../../../services/rm/customer.service';
import { ResponseJson } from '../../../domain/ResponseJson';

import { InvoiceService } from '../../../services/rm/invoice.service';
import { Invoice } from '../../../domain/invoice';
import { Router } from '@angular/router';

import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';






export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
 
})
export class DashboardComponent implements OnInit {
  
  p;
  hasSuccessAlert: boolean = false;
  invoicePrecessMessage;
  response:ResponseJson;
  invoiceList:Invoice[];
  constructor(public http: Http,
    private routes:Router,
    
    private customerService:CustomerService,
    private invoiceService:InvoiceService,
    

   ) {}
   

   hideSuccessAlert(){
    this.hasSuccessAlert = false;
  }


  ngOnInit() {
  
    this.invoicePrecessMessage=localStorage.getItem("invoiceProcessedSuccess");

    if(this.invoicePrecessMessage!=null && this.invoicePrecessMessage!="")
      this.hasSuccessAlert=true;
    else
    this.hasSuccessAlert=false;

    localStorage.setItem("invoiceProcessedSuccess","");
    this.getInvoices();
  }
 
  getInvoices(){
    this.invoiceService.getInvoices().subscribe(data=>{
      this.response=data;
      this.invoiceList=<Invoice[]>this.response.result
  })
  }
 

  
  getInvoiceDocument(invoice){

   console.log("\nInvoice to be processed --> "+JSON.stringify(invoice));
   if(invoice.invoiceId!=undefined && invoice.invoiceId>0 && invoice.customerId!=undefined && invoice.customerId>0){
   localStorage.setItem('invoiceToBeProcessed', JSON.stringify(invoice));
   this.routes.navigateByUrl("/invoice");
   }

  }

}

