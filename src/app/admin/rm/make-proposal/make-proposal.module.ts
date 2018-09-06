import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeProposalComponent } from './make-proposal.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GSTReportService } from '../../../pages/track-gst-reports/track-gst-reports-default/GSTReport.service';
import { ProposalReportService } from './proposal-report.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../../services/rm/customer.service';

export const RmDashboardRouts: Routes = [
  {
    path: '',
    component: MakeProposalComponent,
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
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    ToastyModule.forRoot()
    
  ],
  declarations: [MakeProposalComponent],
  providers: [
    GSTReportService,ProposalReportService,CustomerService
],
})
export class MakeProposalModule { }
