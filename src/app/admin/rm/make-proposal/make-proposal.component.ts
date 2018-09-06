import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail } from '../../../domain/user-detail';
import { GSTReportService } from '../../../pages/track-gst-reports/track-gst-reports-default/GSTReport.service';
import { CustomerGstinPlanDetail } from '../../../domain/customer-gstin-plan-detail';
import { CustomerGstinDetail } from '../../../domain/customer-gstin-detail';
import { GSTReportDomain } from '../../../domain/GSTReportDomain';
import { ProposalReportService } from './proposal-report.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { NgbModal, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDto } from '../../../domain/customer-dto';
import { CustomerService } from '../../../services/rm/customer.service';
import { Invoice } from '../../../domain/invoice';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-make-proposal',
  templateUrl: './make-proposal.component.html',
  styleUrls: ['./make-proposal.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'], encapsulation: ViewEncapsulation.None
})
export class MakeProposalComponent implements OnInit,AfterViewInit {
  @ViewChild('customerGstin') customerGstinById: ElementRef;
  @ViewChild('schemeType') gstPlanById: ElementRef;

  makeProposalCustomer;
  constructor(private route: ActivatedRoute,
    private getreport: GSTReportService, private proposalReportService: ProposalReportService
    , private toastyService: ToastyService
    , private modalService: NgbModal,
    private customerService: CustomerService,
    private routes: Router,
  ) {


  }
  cust_gstn: CustomerGstinDetail[];
  gstnArray: CustomerGstinDetail[] = [];

  reportFound: boolean = false;

  normalITR = [{ itrId: "GSTR3B", itr: "(GSTR3B) Summary Return made by the taxpayer" },
  { itrId: "GSTR1", itr: "(GSTR1) Outward Supplies made by the taxpayer" },
  { itrId: "GSTR2", itr: "(GSTR2) Inward Supplies made by the taxpayer" },
  { itrId: "GSTR3", itr: "(GSTR3) Final Return" },
  { itrId: "GSTR9", itr: "(GSTR9) Annual Return" }];

  compositITR = [{ itrId: "GSTR4", itr: "(GSTR4) Quarterly Composition Return" },
  { itrId: "GSTR9", itr: "(GSTR9) Annual Return" }];


  normalMonth = [{ monthNo: 1, month: "JAN" }, { monthNo: 2, month: "FEB" },
  { monthNo: 3, month: "MAR" }, { monthNo: 4, month: "APR" }, { monthNo: 5, month: "MAY" },
  { monthNo: 6, month: "JUN" }, { monthNo: 7, month: "JUL" }, { monthNo: 8, month: "AUG" },
  { monthNo: 9, month: "SEP" }, { monthNo: 10, month: "OCT" }, { monthNo: 11, month: "NOV" },
  { monthNo: 12, month: "DEC" }]

  compositeMonth = [
    { monthNo: 3, month: "MAR" },
    { monthNo: 6, month: "JUN" },
    { monthNo: 9, month: "SEP" },
    { monthNo: 12, month: "DEC" }];

  itrType = [];
  monthArray = [];
  company = [];
  planType: String;
  year: Number[] = [];
  itrId: String;
  currYear;
  currMonth;
  customerName;
  backendUrl = environment.backendUrl;

  selectedCustomerId: number;
  selectedGstId: Number = 0;
  selectedGstPlanId: Number = 0;
  selectedMonth: Number;
  selectedYear: Number;
  selectedITR: String;
  initailObject: Object = [{ customerId: 1, status: "NOSTATUS" }];

  finalReports: GSTReportDomain[];
  inputDisabled = false;

  processList: Invoice[];
  unProcessList: Invoice[];
  unProcessedDocs = false;

  gstnPlanArray: CustomerGstinPlanDetail[] = [];
  ngOnInit() {
    if (localStorage.getItem('makeProposalCustomer') != null && localStorage.getItem('makeProposalCustomer') != '') {
      this.makeProposalCustomer = JSON.parse(localStorage.getItem('makeProposalCustomer'));
      //this.getCustomerCurrentMonthProposal(this.makeProposalCustomer.customerId);
      this.currYear = (new Date()).getFullYear();
      this.currMonth = ((new Date()).getMonth() + 1);
      this.selectedMonth = this.currMonth;
      this.selectedYear = this.currYear;
      //this.customerName = this.makeProposalCustomer.customerName;
      this.year = [this.currYear - 1, this.currYear, this.currYear + 1];

      this.selectedCustomerId = this.makeProposalCustomer.customerId;
      this.finalReports = <GSTReportDomain[]>this.initailObject;
     
     
      this.getCustomerGSTN(this.makeProposalCustomer.customerId, '0');
    }
    else {
      this.routes.navigateByUrl('/manage-customers');
    }


    // this.newCustomerList();

    
  }

  ngAfterViewInit(): void{

    var report: GSTReportDomain = new GSTReportDomain;

    report.customerGstinId = this.customerGstinById.nativeElement.value;
    report.customerGstinPlanId = this.gstPlanById.nativeElement.value;
   // this.unProcessInvoiceList(report, true);

  }




  customerList: CustomerDto[];

  newCustomerList() {
    this.customerService.getRMCustomer().subscribe(data => {

      this.customerList = <CustomerDto[]>data.result;

    })

  }

  changeNillType(checked: boolean) {
    if (checked)
      this.inputDisabled = true;
    else
      this.inputDisabled = false;
  }


  getProposalByCustomerId() {
    this.getCustomerReport();

  }

  getCustomerReport(): void {

    console.log(this.selectedCustomerId, this.selectedGstId, this.selectedGstPlanId, this.selectedMonth, this.selectedYear)
    this.selectedGstId = this.customerGstinById.nativeElement.value
    this.selectedGstPlanId = this.gstPlanById.nativeElement.value

    if (this.selectedGstId.toString() == '0')
      this.addToast({ title: '', msg: "Select GST", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });
    else if (this.selectedGstPlanId.toString() == '0')
      this.addToast({ title: '', msg: "Select Scheme", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });

    else {
      var requestPayload = {
        customerId: this.selectedCustomerId,
        month: this.selectedMonth,
        year: this.selectedYear,
        customerGstinId: this.selectedGstId,
        customerGstinPlanId: this.selectedGstPlanId,
        reportType: this.selectedITR
      };

      this.proposalReportService.getReport(requestPayload).subscribe(
        data => {
          if (data != null && data.result != null && data.result != "") {
            this.finalReports = <GSTReportDomain[]>data.result;
            this.reportFound = true;

            this.addToast({ title: '', closeOther: true });
          }
          else {

            this.addToast({ title: '', msg: data.message, showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });
            this.finalReports = <GSTReportDomain[]>this.initailObject;


            this.reportFound = false;
          }
          console.log(this.finalReports)
        });
    }
  }


  makeProposalByCustomerId() {
    alert("customerId :: " + this.makeProposalCustomer.customerId);
  }

  getGstPlans(event) {

    this.finalReports = <GSTReportDomain[]>this.initailObject;

    this.selectedITR = '0';
    this.reportFound = false;

    this.gstnPlanArray = [];
    this.itrType = [];
    this.itrId = "";
    this.selectedGstId = event.target.value;
    this.cust_gstn.forEach(element => {
      if (element.gstId == this.selectedGstId) {
        let count = 0;
        this.customerName=element.businessName;
        element.gstPlan.forEach(plan => {
          if (plan.statusId == 1) {
            this.gstnPlanArray.push(plan);
            if (count == 0) {
              //alert(plan.planType)
              if (plan.planType == "NORMAL") {
                this.selectedITR = 'GSTR3B';
                this.itrType = this.normalITR;
              }
              else {
                this.itrType = this.compositITR;
                this.selectedITR = 'GSTR4';
              }

            }
            count++;
          }

        })

      }
    });
    this.monthArray = [];
    if (this.selectedITR == 'GSTR3B')
      this.monthArray = this.normalMonth;

    else if (this.selectedITR == 'GSTR4')
      this.monthArray = this.compositeMonth;
  }

  getItrType(event) {



    this.finalReports = <GSTReportDomain[]>this.initailObject;
    this.reportFound = false;
    this.selectedGstPlanId = event.target.value;
    this.selectedITR = '0';
    this.itrType = [];
    this.itrId = "";
    var index = event.target.selectedIndex;
    this.planType = event.target[index].text



    if (this.planType == "NORMAL") {
      this.selectedITR = 'GSTR3B';
      this.itrType = this.normalITR;
    }
    else {
      this.selectedITR = 'GSTR4';
      this.itrType = this.compositITR;
    }

    this.monthArray = [];
    if (this.selectedITR == 'GSTR3B')
      this.monthArray = this.normalMonth;

    else if (this.selectedITR == 'GSTR4')
      this.monthArray = this.compositeMonth;

  }

  getMonthByItrType(event) {
    this.selectedMonth = event.target.value;
    this.finalReports = <GSTReportDomain[]>this.initailObject;


    this.reportFound = false;

  }
  getSelectedYear(event) {
    this.selectedYear = event.target.value;


    this.finalReports = <GSTReportDomain[]>this.initailObject;
    this.reportFound = false;

  }


  setSelectedItr(event) {
    this.monthArray = [];
    this.selectedITR = '0';
    this.selectedITR = event.target.value;

    this.monthArray = [];
    if (this.selectedITR == 'GSTR3B')
      this.monthArray = this.normalMonth;

    else if (this.selectedITR == 'GSTR4')
      this.monthArray = this.compositeMonth;

  }

  getCustomerGSTN(customerId: Number, customerGstin: string): void {
    this.finalReports = <GSTReportDomain[]>this.initailObject;
    this.gstnPlanArray = [];
    this.getreport.getcustGSTNDetail(customerId + '', customerGstin).subscribe(
      data => {
        if (data.result != null) {
          this.cust_gstn = <CustomerGstinDetail[]>data.result;

          if (this.cust_gstn != null && this.cust_gstn.length == 1) {
            this.cust_gstn.forEach(element => {
              if (element.statusId == 1) {
                //this.selectedGstId=element.gstId;

                if (element.gstPlan != null && element.gstPlan.length == 1) {
                  element.gstPlan.forEach(plan => {
                    if (plan.statusId == 1)
                      this.selectedGstPlanId = plan.gstPlanId;
                  });
                }
              }
            });
          }

          let count = 0;
          this.cust_gstn.forEach(element => {


            if (element.statusId == 1) {


              this.gstnArray.push(element);
              if (count == 0) {
        this.customerName=element.businessName;
                var planCount = 0;
                element.gstPlan.forEach(plan => {
                  if (plan.statusId == 1) {
                    this.gstnPlanArray.push(plan);



                    if (planCount == 0) {


                      if (plan.planType == "NORMAL") {
                        this.selectedITR = 'GSTR3B';
                        this.itrType = this.normalITR;
                      }
                      else {
                        this.selectedITR = 'GSTR4';
                        this.itrType = this.compositITR;
                      }

                    }
                    planCount++;
                  }

                })
              }
              count++;
            }

          });

          this.monthArray = [];
          if (this.selectedITR == 'GSTR3B')
            this.monthArray = this.normalMonth;

          else if (this.selectedITR == 'GSTR4')
            this.monthArray = this.compositeMonth;

           
          console.log(this.itrType)
        }


      });
  }


  gstOppningAmount;



  makeFinalproposalByITR(formData) {
    var gsTReportDomain = formData.value as GSTReportDomain;
    console.log(JSON.stringify(gsTReportDomain))
    console.log(this.selectedITR, this.selectedGstId, this.selectedGstPlanId, this.selectedMonth, this.selectedYear)
    if (this.selectedMonth == null || this.selectedMonth.toString() == "")
      this.addToast({ title: '', msg: "Please select Month", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });

    else if (this.selectedYear == null || this.selectedYear.toString() == "")
      this.addToast({ title: '', msg: "please select Year", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });

    else if (this.selectedITR == null || this.selectedITR == "0")
      this.addToast({ title: '', msg: "Please select ITR", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });

    else {
      gsTReportDomain.month = <number>this.selectedMonth;
      gsTReportDomain.year = <number>this.selectedYear;
      gsTReportDomain.itrType = this.selectedITR;
      gsTReportDomain.customerGstinId = <number>this.selectedGstId;

      this.proposalReportService.makeReportProposal(gsTReportDomain).subscribe(
        data => {
          if (data != null && data.result != null && data.result != "") {
            this.addToast({ title: '', msg: data.message, showClose: true, timeout: 8000, theme: 'bootstrap', type: 'success', position: 'top-right', closeOther: true });
          }
          else {
            this.addToast({ title: '', msg: "Request failed", showClose: true, timeout: 8000, theme: 'bootstrap', type: 'error', position: 'top-right', closeOther: true });
          }

        });
    }
  }


  viewReportDetails(report, content) {

    console.log("REPORT JSON :: " + JSON.stringify(report));
    this.processInvoiceList(report);
    this.unProcessInvoiceList(report, false);
    this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });

  }

  processInvoiceList(report) {
    var reportId = report.id;
    var customerId = report.customerId;
    var invoice: Invoice = { reportId, customerId } as Invoice;

    this.proposalReportService.getProcessedInvoices(invoice).subscribe(
      data => {
        if (data != null && data.result != null)
          this.processList = <Invoice[]>data.result;
        console.log("ProcessList :: " + this.processList)
      })
  }

  unProcessInvoiceList(report, initial: boolean) {
    var reportId = report.id;
    var gstinId = report.customerGstinId;
    var gstinPlanId = report.customerGstinPlanId;
    var invoice: Invoice = { reportId, gstinId ,gstinPlanId} as Invoice;
    this.proposalReportService.getUnProcessedInvoices(invoice).subscribe(
      data => {
        if (data != null && data.result != null)
          this.unProcessList = <Invoice[]>data.result
        if (initial) {
          if (this.unProcessList != null && this.unProcessList.length > 0)
            this.unProcessedDocs = true;
          else
            this.unProcessedDocs = false;
        }
        console.log("unProcessList :: " + this.unProcessList)
      });
  }







  position = 'top-right';

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
        //alert("save")
      },
      onRemove: (toast: ToastData) => {
        /* removed */
        //alert("remove")
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

}
