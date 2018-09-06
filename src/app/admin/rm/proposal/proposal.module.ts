import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

export const ProposalRoutes: Routes = [
  {
    path: '',
    component: ProposalComponent,
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
    FormsModule,
    
    NgbModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(ProposalRoutes),
  ],
  declarations: [ProposalComponent]
})
export class ProposalModule { }
