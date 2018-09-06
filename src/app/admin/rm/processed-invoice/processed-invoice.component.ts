import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { Invoice } from '../../../domain/invoice';
import { ResponseJson } from '../../../domain/ResponseJson';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processed-invoice',
  templateUrl: './processed-invoice.component.html',
  styleUrls: ['./processed-invoice.component.css']
})
export class ProcessedInvoiceComponent implements OnInit {
  p;

  constructor( private routes:Router,
    private invoiceService:InvoiceService) { }

    
  response:ResponseJson
  processList:Invoice[];



  ngOnInit() {
    this.getProcessedInvoices();
  }


  getProcessedInvoices(){

    this.invoiceService.getProcessedInvoices().subscribe(data=>{
      if(data!=null && data.result!=null){
        this.response=data;
        this.processList=<Invoice[]>this.response.result
      }
     
  })

  }


  viewProcessedDocuments(invoice){

    localStorage.setItem('processedInvoice', JSON.stringify(invoice));
    this.routes.navigateByUrl("/pro-documents");

  }

}
