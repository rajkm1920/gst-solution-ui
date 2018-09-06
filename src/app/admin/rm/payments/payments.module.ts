import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './payment.service';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const PaymentsRoutes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
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
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    ToastyModule.forRoot(),
    RouterModule.forChild(PaymentsRoutes),
  ],
  providers:[PaymentService],
  declarations: [PaymentsComponent]
})
export class PaymentsModule { }
