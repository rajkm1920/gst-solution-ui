import { CustomerInvoiceService } from './customer-invoice.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Invoice } from '../../../domain/invoice';
import { environment } from '../../../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-invoice-default',
  templateUrl: './customer-invoice-default.component.html',
  styleUrls: ['./customer-invoice-default.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('800ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CustomerInvoiceDefaultComponent implements OnInit {
  IMGSRC: string = '';
  processList: Invoice[];
  unProcessList: Invoice[];
  unProcessmsg: String;
  backendUrl = environment.backendUrl;
  constructor(private serviceCustomerInvoice: CustomerInvoiceService , private modalService: NgbModal) {}

  ngOnInit() {
    this.unProcessInvoiceList(1, 0);
    this.processInvoiceList(1, 0);
  }
  unProcessInvoiceList(customerId: number, invoiceId: number) {
    const invoice: Invoice = { customerId, invoiceId } as Invoice;
    this.serviceCustomerInvoice.fetchUnProcessedInvoice(invoice).subscribe(
      unProcessList => {
        this.unProcessList = <Invoice[]>unProcessList.result;
        console.log(this.unProcessList);

      },
      unProcessmsg => {
        this.unProcessmsg = unProcessmsg.message;
        console.warn('message=============== ', this.unProcessmsg);
      }
    );
  }
  processInvoiceList(customerId: number, invoiceId: number) {
    const invoice: Invoice = { customerId, invoiceId } as Invoice;
    this.serviceCustomerInvoice
      .fetchProcessedInvoice(invoice)
      .subscribe(processList => {
        this.processList = <Invoice[]>processList.result;
        console.warn(this.processList);
      });
  }

  removeInvoiceDocument = function(id) {
    if (confirm('Do you want to remove this document ?')) {
      this.serviceCustomerInvoice.removeInvoiceDocument(id).subscribe(data => {
if(!data.error){
  alert(data.message)
  this.unProcessInvoiceList(1, 0);
  console.log(data);

}
        
        
      });
    }
  };

  viewImage(content, src) {
    this.IMGSRC = '';
    // alert(src);
    this.IMGSRC = this.backendUrl + src;
    this.modalService.open(content, { size: 'lg' });
  }
}
