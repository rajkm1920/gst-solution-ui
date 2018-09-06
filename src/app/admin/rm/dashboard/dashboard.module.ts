import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { CustomerService } from '../../../services/rm/customer.service';
import { InvoiceService } from '../../../services/rm/invoice.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProcInvoiceService } from '../processed-invoice/proc-invoice.service';


export const RmDashboardRouts: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: 'RMDashboard',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RmDashboardRouts),
    SharedModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule
    
  ],
  declarations: [DashboardComponent],
  providers: [
    CustomerService,InvoiceService,ProcInvoiceService
],
})
export class DashboardModule { }