import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {AngularEchartsModule} from 'ngx-echarts';
import { ProfileService } from './profile.service';
import { ToastyModule } from 'ng2-toasty';
import { GSTReportService } from '../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      breadcrumb: 'User Profile',
      icon: 'icofont-justify-all bg-c-green',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    SharedModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    NgxPaginationModule,
    NgbModule
  ],
  providers: [ProfileService, GSTReportService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
