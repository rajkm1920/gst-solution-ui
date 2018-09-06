import { NgModule } from '@angular/core';
import { GSTReportService } from './GSTReport.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { TrackGstReportsDefaultComponent } from './track-gst-reports-default.component';

export const TrackGstReportsDefaultRoutes: Routes = [
  {
    path: '',
    component: TrackGstReportsDefaultComponent,
    data: {
      breadcrumb: 'My GST Reports',
      icon: 'icofont-database bg-c-brown',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TrackGstReportsDefaultRoutes),
    SharedModule,
    HttpClientModule,
    
  ],
  providers:[GSTReportService],
  declarations: [TrackGstReportsDefaultComponent]
})
export class TrackGstReportsDefaultModule { }
