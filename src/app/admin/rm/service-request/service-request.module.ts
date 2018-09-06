import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceRequestDefaultComponent } from '../../../pages/service-request/service-request-default/service-request-default.component';
import { ServiceRequestComponent } from './service-request.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

export const ServiceRequestRoutes: Routes = [
  {
    path: '',
    component: ServiceRequestComponent,
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
    RouterModule.forChild(ServiceRequestRoutes),
  ],
  declarations: [ServiceRequestComponent]
})
export class ServiceRequestModule { }
