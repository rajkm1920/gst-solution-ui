import { Invoice } from './../../../domain/invoice';
import { GSTReportDomain } from './../../../domain/GSTReportDomain';
import { animate, style, transition, trigger } from '@angular/animations';
import { CustomerGstinDetail } from './../../../domain/customer-gstin-detail';
import { Component, OnInit } from '@angular/core';
import { GSTReportService } from '../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { CustomerInvoiceService } from '../../customer-invoice/customer-invoice-default/customer-invoice.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-track-gst-status-default',
  templateUrl: './track-gst-status-default.component.html',
  styleUrls: ['./track-gst-status-default.component.css'],
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
export class TrackGstStatusDefaultComponent implements OnInit {
  processList: Invoice[];
  backendUrl=environment.backendUrl;
  unProcessList: Invoice[];
  unProcessmsg: String;
  status_report: GSTReportDomain[];
  cust_gst: CustomerGstinDetail[];
  plan = [];
  btnClicked = false;
  currYear = new Date().getFullYear();
  currMonth = new Date().getMonth() + 1;
  monthArray = [
    { monthNo: 4, month: 'APR' },
    { monthNo: 5, month: 'MAY' },
    { monthNo: 6, month: 'JUN' },
    { monthNo: 7, month: 'JUL' },
    { monthNo: 8, month: 'AUG' },
    { monthNo: 9, month: 'SEP' },
    { monthNo: 10, month: 'OCT' },
    { monthNo: 11, month: 'NOV' },
    { monthNo: 12, month: 'DEC' },
    { monthNo: 1, month: 'JAN' },
    { monthNo: 2, month: 'FEB' },
    { monthNo: 3, month: 'MAR' }
  ];
  yearArray = [];

  constructor(
    private gstService: GSTReportService,
    private serviceCustomerInvoice: CustomerInvoiceService
  ) {}

  ngOnInit() {
    this.getCustomerGSTN('1');
    this.currYear = new Date().getFullYear();
    this.yearArray = [
      { year: this.currYear - 1 },
      { year: this.currYear },
      { year: this.currYear + 1 }
    ];
  }

  getCustomerGSTN(customerId: string): void {
    this.gstService.getcustGSTNDetail(customerId, '0').subscribe(cust_gst => {
      this.cust_gst = <CustomerGstinDetail[]>cust_gst.result;
      console.log(this.cust_gst);
      const cust_gstnTemp = this.cust_gst;
      this.cust_gst = [];
      cust_gstnTemp.forEach(element => {
        if (element.statusId === 1) {
          this.cust_gst.push(element);
        }
      });
    });
  }

  getPlanofGST(gstId: number) {
    this.btnClicked = false;
    this.plan = [];
    if (gstId > 0) {
      this.cust_gst.forEach(element => {
        if (element.gstId == gstId) {
          element.gstPlan.forEach(element2 => {
            if (element2.statusId == 1) {
              this.plan.push({
                gstPlanId: element2.gstPlanId,
                planType: element2.planType
              });
            }
          });
        }
      });
    }
  }

  fetchreportsforTrackStatus(
    customerGstinId: number,
    planId: number,
    month: number,
    year: number
  ) {
    this.unProcessInvoiceList(customerGstinId, planId, month, year);
    this.btnClicked = true;
    const customerId = 1;
    const report: GSTReportDomain = {
      customerId,
      month,
      customerGstinId,
      planId,
      year
    } as GSTReportDomain;
    console.warn(report);
    this.gstService.getGSTreports(report).subscribe(status_report => {
      this.status_report = <GSTReportDomain[]>status_report.result;
      console.warn(this.status_report);
    });
  }

  unProcessInvoiceList(
    gstinId: number,
    gstinPlanId: number,
    month: number,
    year: number
  ) {
    const customerId = 1;
    const invoice: Invoice = {
      customerId,
      gstinId,
      gstinPlanId,
      month,
      year
    } as Invoice;
    this.serviceCustomerInvoice
      .fetchUnProcessedInvoice(invoice)
      .subscribe(unProcessList => {
        this.unProcessList = <Invoice[]>unProcessList.result;
        console.warn('message=============== ', this.unProcessmsg);
      });
  }
  processInvoiceList(
    gstinId: number,
    gstinPlanId: number,
    month: number,
    year: number
  ) {
    const customerId = 1;
    const invoice: Invoice = {
      customerId,
      gstinId,
      gstinPlanId,
      month,
      year
    } as Invoice;
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
        this.unProcessInvoiceList(1, 0);
        console.log(data);
      });
    }
  };
}
