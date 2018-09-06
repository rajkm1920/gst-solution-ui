import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProcessedInvoiceComponent } from './processed-invoice.component';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { ProcInvoiceService } from './proc-invoice.service';


export const RmDashboardRouts: Routes = [
  {
    path: '',
    component: ProcessedInvoiceComponent,
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
  declarations: [ProcessedInvoiceComponent],
  providers: [
    InvoiceService,ProcInvoiceService
],
})
export class ProcessedInvoiceModule { }
