import { CustomerInvoiceService } from './../../customer-invoice/customer-invoice-default/customer-invoice.service';
import { TrackGSTService } from './track-gst.service';
import { TrackGstStatusDefaultComponent } from './track-gst-status-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { GSTReportService } from '../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

export const TrackGstStatusDefaultRoutes: Routes = [
  {
    path: '',
    component: TrackGstStatusDefaultComponent,
    data: {
      breadcrumb: 'My GST Status',
      icon: 'icofont-crown bg-c-yellow',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TrackGstStatusDefaultRoutes),
    SharedModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers:[TrackGSTService,GSTReportService,CustomerInvoiceService],
  declarations: [TrackGstStatusDefaultComponent]
})
export class TrackGstStatusDefaultModule { }
