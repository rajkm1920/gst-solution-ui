import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageCustomersComponent } from './manage-customers.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomerService } from '../../../services/rm/customer.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

export const ManageCustomerRoutes: Routes = [
  {
    path: '',
    component: ManageCustomersComponent,
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
    SharedModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(ManageCustomerRoutes),
  ],
  providers:[CustomerService],
  declarations: [ManageCustomersComponent]
})
export class ManageCustomersModule { }
