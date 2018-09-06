import { GSTReportService } from './../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { FileGSTReturn } from './file-gst.service';
import { FileGstDefaultComponent } from './file-gst-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

export const FileGstDefaultRoutes: Routes = [
  {
    path: '',
    component: FileGstDefaultComponent,
    data: {
      breadcrumb: 'File GST',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FileGstDefaultRoutes),
    SharedModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule

  ],
  providers:[FileGSTReturn,GSTReportService],
  declarations: [FileGstDefaultComponent]
})
export class FileGstDefaultModule { }
