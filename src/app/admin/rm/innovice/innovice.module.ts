import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { InnoviceComponent } from './innovice.component';

import { CustomerService } from '../../../services/rm/customer.service';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { GSTReportService } from '../../../pages/track-gst-reports/track-gst-reports-default/GSTReport.service';
import { ToastyModule } from 'ng2-toasty';
import { ProcInvoiceService } from '../processed-invoice/proc-invoice.service';

export const GstRoutes: Routes = [
  {
    path: '',
    component: InnoviceComponent,
    data: {
      breadcrumb: 'GST-TRACK',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GstRoutes),
    ReactiveFormsModule,HttpClientModule ,
    ToastyModule.forRoot() ],
  declarations: [InnoviceComponent],
  providers: [
    CustomerService,InvoiceService,ProcInvoiceService,GSTReportService
],
})
export class InnoviceModule { }
