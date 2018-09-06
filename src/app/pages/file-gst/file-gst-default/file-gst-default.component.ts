import { GSTReportService } from './../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { CustomerGstinDetail } from './../../../domain/customer-gstin-detail';
import { DocumentDetail } from './../../../domain/document-detail';
import { Invoice } from './../../../domain/invoice';
import { FileGSTReturn } from './file-gst.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-gst-default',
  templateUrl: './file-gst-default.component.html',
  styleUrls: [
    './file-gst-default.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class FileGstDefaultComponent implements OnInit {
  selectedFile: File = null;
  base64textString: String;
  itmNumber = 1;
  httpmsg: String = 'Processing your request';
  constructor(
    private fb: FormBuilder,
    private toastyService: ToastyService,
    private getreport: GSTReportService,
    private fileGST: FileGSTReturn,
    private routs:Router
  ) {}

  cust_gstn: CustomerGstinDetail[];
  plans = [];
  document: DocumentDetail[] = [];
  invoiceForm = this.fb.group({
    title: ['', Validators.required],
    customerGstinPlanId: ['', Validators.required],
    gstinId: [''],
    invoiceDocuments: this.fb.array([this.fb.control('')])
  });

  position = 'top-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 8000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  ngOnInit() {
    this.getCustomerGSTN('1', '0');
  }

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
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default':
        this.toastyService.default(toastOptions);
        break;
      case 'info':
        this.toastyService.info(toastOptions);
        break;
      case 'success':
        this.toastyService.success(toastOptions);
        break;
      case 'wait':
        this.toastyService.wait(toastOptions);
        break;
      case 'error':
        this.toastyService.error(toastOptions);
        break;
      case 'warning':
        this.toastyService.warning(toastOptions);
        break;
    }
  }

  addMoreImages() {
    this.invoiceDocuments.push(this.fb.control(''));
  }
  removeInvoiceImage(id) {
    if (id !== 0) {
      this.document.splice(id, 1);
      this.invoiceDocuments.removeAt(id);
    }

    // this.documents.splice(id,1);
    // this.invoiceDocuments.splice(id,1);
  }
  getfileonChange(event, id) {
    this.document.splice(id, 1);
    this.selectedFile = <File>event.target.files[0];
    // console.warn(this.selectedFile);
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.selectedFile);
    }
  }
  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    const documentPath: String = btoa(binaryString);
    const documentDomain: DocumentDetail = { documentPath } as DocumentDetail;
    this.document.push(documentDomain);
  }

  get invoiceDocuments() {
    return this.invoiceForm.get('invoiceDocuments') as FormArray;
  }

  fileGSTInvoice() {
    const invoices: Invoice = this.invoiceForm.value as Invoice;
    const customerId = 1;
    const gstinId = invoices.gstinId;
    const customerGstinPlanId = invoices.customerGstinPlanId;
    const title = invoices.title;
    const invoiceDocuments = this.document;
    const invoices2: Invoice = {
      customerId,
      gstinId,
      customerGstinPlanId,
      title,
      invoiceDocuments
    } as Invoice;
    console.warn(invoices2);

    this.fileGST.fileGSTReturn(invoices2).subscribe(httpmsg => {
      this.httpmsg = httpmsg.message;
      if (httpmsg.error) {
        this.addToast({
          title: '',
          msg: this.httpmsg,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'error',
          position: 'top-right',
          closeOther: true
        });

      } else {
        this.addToast({
          title: '',
          msg: this.httpmsg,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
        this.routs.navigateByUrl('/customer-invoices');
      }
    });
  }

  getCustomerGSTN(customerId: string, customerGstin: string): void {
    this.getreport
      .getcustGSTNDetail(customerId, customerGstin)
      .subscribe(cust_gstn => {
        this.cust_gstn = <CustomerGstinDetail[]>cust_gstn.result;
        console.log(this.cust_gstn);
        const cust_gstnTemp = this.cust_gstn;
        this.cust_gstn = [];
        cust_gstnTemp.forEach(element => {
          if (element.statusId === 1) {
            this.cust_gstn.push(element);
          }
        });
      });
  }
  getPlanofGSTid(gstId: number) {
    this.plans = [];
    if (gstId > 0) {
      this.cust_gstn.forEach(element => {
        if (element.gstId == gstId) {
          element.gstPlan.forEach(element2 => {
            if (element2.statusId == 1) {
              this.plans.push({
                gstPlanId: element2.gstPlanId,
                planType: element2.planType
              });
            }
          });
        }
      });
    }
  }
}
