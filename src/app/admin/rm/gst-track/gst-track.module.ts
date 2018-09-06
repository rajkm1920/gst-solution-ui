import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { GstTrackComponent } from './gst-track.component';

export const GstRoutes: Routes = [
  {
    path: '',
    component: GstTrackComponent,
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
    RouterModule.forChild(GstRoutes),
    Ng2DatetimePickerModule
  ],
  declarations: [GstTrackComponent]
})
export class GstTrackModule { }
