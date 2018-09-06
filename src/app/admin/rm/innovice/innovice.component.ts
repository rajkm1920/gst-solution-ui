

import { environment } from './../../../../environments/environment';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs';


import { ResponseJson } from '../../../domain/ResponseJson';
import { DocumentDetail } from '../../../domain/document-detail';
import { CustomerService } from '../../../services/rm/customer.service';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { ProcessInvoice } from '../../../domain/process-invoice';
import { GSTReportService } from '../../../pages/track-gst-reports/track-gst-reports-default/GSTReport.service';
import { CustomerGstinDetail } from '../../../domain/customer-gstin-detail';
import { StateAndCity } from '../../../domain/StateandCity';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { ProcInvoiceService } from '../processed-invoice/proc-invoice.service';



@Component({
  selector: 'app-innovice',
  templateUrl: './innovice.component.html',
  styleUrls: ['./innovice.component.css',
'../../../../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../../../../node_modules/ng2-toasty/style-default.css',
  '../../../../../node_modules/ng2-toasty/style-material.css'],encapsulation: ViewEncapsulation.None
})
export class InnoviceComponent implements OnInit {
  gstnNumbers: CustomerGstinDetail[];
  schemeType: any[];
  userRole: String = " Customer ";
  invoiceProcessedId: number=0;
  invoiceId: any;
  gstId;
  gstPlanId;


  hasError: boolean = false;
  invoiceSelectError: boolean = false;
  hasSuccessAlert: boolean = false;
  hasResponseError: boolean = false;

  response: ResponseJson;
  invoiceDocumentList: DocumentDetail[];
  salesAndPurchaseForm: FormGroup;
  backendUrl: String = environment.backendUrl;
  currimageUrl: String = "../assets/images/default-document.png";
  year = new Date();
  customerId: any;
  customerName: String;
  stateArray: StateAndCity[];


  IGSTPercent = 0;
  CGSTPercent = 0;
  SGSTPercent = 0;
  IGSTtotalCalcValue = 0;
  CGSTtotalCalcValue = 0;
  SGSTtotalCalcValue = 0;
  taxableValueNgModel = 0;

  currYear=new Date().getFullYear();
  currMonth=new Date().getMonth()+1;
  monthArray=[{monthNo:4,month:"APR"},{monthNo:5,month:"MAY"},
  {monthNo:6,month:"JUN"},{monthNo:7,month:"JUL"},{monthNo:8,month:"AUG"},
  {monthNo:9,month:"SEP"},{monthNo:10,month:"OCT"},{monthNo:11,month:"NOV"},
  {monthNo:12,month:"DEC"},{monthNo:1,month:"JAN"},{monthNo:2,month:"FEB"},
  {monthNo:3,month:"MAR"}];
  yearArray=[];


  constructor(private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private processInvoiceService: ProcInvoiceService,
    private gstReportServive: GSTReportService,
    private route: ActivatedRoute, private routes:Router,
    private fb: FormBuilder,private toastyService: ToastyService) {

  }

 currentDocument = new BehaviorSubject(null);
  currDoc: any;


  ngOnInit() {

    var invoiceToBeProcessed = JSON.parse(localStorage.getItem("invoiceToBeProcessed"));
    if (invoiceToBeProcessed != null && invoiceToBeProcessed!=""){
      console.log("INVOICE 2 B PROCESSED :: "+JSON.stringify(invoiceToBeProcessed));
      this.invoiceId = invoiceToBeProcessed.invoiceId;
      this.gstId=invoiceToBeProcessed.gstinId;
      this.gstPlanId=invoiceToBeProcessed.customerGstinPlanId
    this.customerId = invoiceToBeProcessed.customerId;
    this.customerName = invoiceToBeProcessed.customerName;
  this.getGSTIN_NumberList(this.customerId);
    this.fetchStates();


    this.invoiceService.getInvoiceDocuments(this.invoiceId).subscribe(data => {
      this.response = data;
      this.invoiceDocumentList = <DocumentDetail[]>this.response.result;
      if(this.invoiceDocumentList!=null)
      this.salesAndPurchaseForm.value.innoviceType = 1;
    });
    this.salesAndPurchaseForm = this.fb.group({
      docIdArr: this.fb.array([]),
      type: ['', Validators.required],
      processInvoiceid: ["", Validators.required],
      reportId: ['', Validators.required],
      invoiceId: ['', Validators.required],
      gstId: ['', Validators.required],
      schemeType: ['', Validators.required],
      name: ['', Validators.required],
      invoiceNo: ['', Validators.required],
      natureOfInvoice: ['', Validators.required],
      state: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      hsn: ['', Validators.required],
      quantity: ['', Validators.required],
      rate: ['', Validators.required],
      invoiceValue: ['', Validators.required],
      taxableValue: ['0', Validators.required],
      igstPercent: ['', Validators.required],
      cgstPercent: ['', Validators.required],
      sgstPercent: ['', Validators.required],
      igstTotal: ['', Validators.required],
      cgstTotal: ['', Validators.required],
      sgstTotal: ['', Validators.required],
      nature: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    });

    this.currYear=(new Date()).getFullYear();
    this.yearArray=[{year:this.currYear-1},{year:this.currYear},{year:this.currYear+1}];
    }
    else
      this.routes.navigateByUrl("/rm-dashboard");

    
  }


  hideRequiredAlert() {

    this.hasError = false;
  };

  hideInvoiceRequiredAlert() {

    this.invoiceSelectError = false;
  };

  hideSuccessAlert(){
    this.hasSuccessAlert = false;

  }

  onchangeInvoiceType(event) {

    if (event.target.value == "SALES") {
      this.userRole = " Customer ";
    } else {
      this.userRole = " Supplier "
    }
  }



  getInvoiceDocument() {
    if (this.invoiceId > 0) {
      this.invoiceService.getInvoiceDocuments(this.invoiceId).subscribe(data => {
        this.response = data;
        this.invoiceDocumentList = <DocumentDetail[]>this.response.result;
        if(this.invoiceDocumentList!=null)
        console.log(" Document List ....." + this.invoiceDocumentList.length)
      });
    }
  }


  checkedDocumentPathArr: String[] = [];
  changeInvoiceDocument(doc: number, isChecked: boolean, documentPath) {


    if (!this.checkedDocumentPathArr.includes(documentPath))
      this.checkedDocumentPathArr.push(documentPath);


    const checkedDocId = <FormArray>this.salesAndPurchaseForm.controls.docIdArr;


    if (isChecked) {
      this.currimageUrl = this.backendUrl + "" + documentPath;
      checkedDocId.push(new FormControl(doc));
    }
    else {

      for (var i = this.checkedDocumentPathArr.length - 1; i >= 0; i--) {
        if (this.checkedDocumentPathArr[i] === documentPath) {
          this.checkedDocumentPathArr.splice(i, 1);
          break;
        }
      }
      if (this.currimageUrl == (this.backendUrl + "" + documentPath)) {
        if (this.checkedDocumentPathArr != null && this.checkedDocumentPathArr.length > 0)
          this.currimageUrl = this.backendUrl + "" + this.checkedDocumentPathArr.pop();
        else
          this.currimageUrl = "../assets/images/default-document.png";
      }
      let index = checkedDocId.controls.findIndex(x => x.value == doc)
      checkedDocId.removeAt(index);
    }
  }

  selectedChekboxId;
  viewImage(documentPath, documentId) {


    this.currimageUrl = this.backendUrl + "" + documentPath;
  }

  // get docIdArr(){
  //   return this.salesAndPurchaseForm.get('docIdArr') as FormArray;
  // }



  getGSTIN_NumberList(customerId) {
    this.gstReportServive.getcustGSTNDetail(customerId, '0').subscribe(gstnNumbers => {
      this.gstnNumbers = <CustomerGstinDetail[]>gstnNumbers.result;
      console.warn(this.gstnNumbers);
    })
  }

  getPlanforGSTN(gstId) {
    this.schemeType = []
    this.gstnNumbers.forEach(element => {
      if (element.gstId == gstId) {
        element.gstPlan.forEach(element2 => {
          if (element2.statusId == 1)
            this.schemeType.push({ gstPlanId: element2.gstPlanId, planType: element2.planType });

        });

      }
    });


  }


  fetchStates() {
    this.invoiceService.getStates().subscribe(data => {
      this.response = data;
      this.stateArray = <StateAndCity[]>this.response.result;
      console.log(" State List ....." + this.stateArray)
    });

  }

  calculateAmountKeyPress(event) {

    this.taxableValueNgModel = event.target.value;
    this.IGSTtotalCalcValue = (this.taxableValueNgModel * this.IGSTPercent) / 100;
    this.CGSTtotalCalcValue = (this.taxableValueNgModel * this.CGSTPercent) / 100;
    this.SGSTtotalCalcValue = (this.taxableValueNgModel * this.SGSTPercent) / 100;

  }

  setGSTPercentage(value, type) {


    var calcValue = (this.taxableValueNgModel * value) / 100;
    if (type == 'IGST') {
      this.IGSTPercent = value;
      this.IGSTtotalCalcValue = calcValue;
    }
    else if (type == 'CGST') {
      this.CGSTPercent = value;
      this.CGSTtotalCalcValue = calcValue;
    }
    else if (type == 'SGST') {
      this.SGSTPercent = value;
      this.SGSTtotalCalcValue = calcValue;
    }
  }



  salesAndPurchaseFormSubmit() {

    var processedInvoiceForm = this.salesAndPurchaseForm.value as ProcessInvoice;
    processedInvoiceForm.gstPlanId=processedInvoiceForm.schemeType;
    processedInvoiceForm.igstTotal=<DoubleRange>this.IGSTtotalCalcValue;
    processedInvoiceForm.cgstTotal=<DoubleRange>this.CGSTtotalCalcValue;
    processedInvoiceForm.sgstTotal=<DoubleRange>this.SGSTtotalCalcValue;
    console.log("processedInvoiceForm :: "+JSON.stringify(processedInvoiceForm));
    if (processedInvoiceForm.type.trim() == "" || processedInvoiceForm.name.trim() == ""
       || processedInvoiceForm.schemeType.toString() == ""
      || processedInvoiceForm.invoiceNo.trim() == "" || processedInvoiceForm.natureOfInvoice.trim() == ""
      || processedInvoiceForm.state.trim() == "" || processedInvoiceForm.invoiceDate.trim() == ""
      || processedInvoiceForm.invoiceValue.toString() == "" || processedInvoiceForm.nature.toString() == ""
      || processedInvoiceForm.taxableValue.toString() == "") {
        this.addToast({title:'', msg:'Required fields are Mandatory', showClose: true, timeout: 8000, theme:'bootstrap', type:'error', position:'top-right', closeOther:true});
      //this.hasError = true;
    }

    else if (processedInvoiceForm.docIdArr == null || processedInvoiceForm.docIdArr.length <= 0) {
      this.addToast({title:'', msg:'Please Select ant invoice', showClose: true, timeout: 8000, theme:'bootstrap', type:'error', position:'top-right', closeOther:true});
     // this.invoiceSelectError = true;
      //this.hasError = false;
    }
    else {
      this.hasError = false;
      this.invoiceSelectError = false;
      processedInvoiceForm.invoiceId = this.invoiceId;
      
     
      this.processInvoiceService.processInvoiceDocuments(processedInvoiceForm)
              .subscribe(data =>
                {
                  this.response=data;
                  if(this.response!=null && !this.response.error){
                      localStorage.setItem("invoiceProcessedSuccess",<string>this.response.message);
                      this.invoiceProcessedId=<number>this.response.result;
                      localStorage.setItem("invoiceToBeProcessed",null);
                      this.routes.navigateByUrl("/rm-dashboard");
                   }
                   else {
                    this.hasResponseError=true;
                    this.addToast({title:'', msg:this.response.message, showClose: true, timeout: 8000, theme:'bootstrap', type:'error', position:'top-right', closeOther:true});

                   }
         });
    }

  }



  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
   
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
