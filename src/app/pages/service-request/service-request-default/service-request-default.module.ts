import { ServiceRequestDefaultComponent } from './service-request-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ServiceRequestService } from './service-request.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { HttpClientModule } from '@angular/common/http';

export const ServiceRequestDefaultRoutes: Routes = [
  {
    path: '',
    component: ServiceRequestDefaultComponent,
    data: {
      breadcrumb: 'Service Request',
      icon: 'icofont-support bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ServiceRequestDefaultRoutes),
    SharedModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    HttpClientModule
  ],
  providers: [ServiceRequestService],
  declarations: [ServiceRequestDefaultComponent]
})
export class ServiceRequestDefaultModule { }
