import { ApplyGstDefaultComponent } from './apply-gst-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ApplyGstDefaultRoutes: Routes = [
  {
    path: '',
    component: ApplyGstDefaultComponent,
    data: {
      breadcrumb: 'Apply GST',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ApplyGstDefaultRoutes),
    SharedModule,
  ],
  declarations: [ApplyGstDefaultComponent]
})
export class ApplyGstDefaultModule { }
