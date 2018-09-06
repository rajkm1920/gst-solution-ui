import { GSTReportService } from './../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { HttpClientModule } from '@angular/common/http';
import { BuyPlansDefaultComponent } from './buy-plans-default.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { PlanBuyService } from './plansBuy.server';
import { RegisterGST } from '../../register-gst/register-gst-default/register-gst.service';

export const BuyPlansDefaultRoutes: Routes = [
  {
    path: '',
    component: BuyPlansDefaultComponent,
    data: {
      breadcrumb: 'Buy Plan',
      icon: 'icofont-wallet bg-c-yellow',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BuyPlansDefaultRoutes),
    SharedModule,
    HttpClientModule,
  ],
  providers:[PlanBuyService,GSTReportService,RegisterGST],
  declarations: [BuyPlansDefaultComponent]
})
export class BuyPlansDefaultModule { }
