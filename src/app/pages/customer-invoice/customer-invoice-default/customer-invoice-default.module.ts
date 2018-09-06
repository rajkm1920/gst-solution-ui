import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInvoiceDefaultComponent } from './customer-invoice-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CustomerInvoiceService } from './customer-invoice.service';
import { NgxPaginationModule } from 'ngx-pagination';

export const CustomerInvoiceDefaultRoutes: Routes = [
  {
    path: '',
    component: CustomerInvoiceDefaultComponent,
    data: {
      breadcrumb: 'Customer Invoice',
      icon: 'icofont-file-alt bg-c-pink',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerInvoiceDefaultRoutes),
    SharedModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [CustomerInvoiceService],
  declarations: [CustomerInvoiceDefaultComponent]
})
export class CustomerInvoiceDefaultModule { }
