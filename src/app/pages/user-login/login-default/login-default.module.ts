import { LoginService } from './login-defaule.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginDefaultComponent } from './login-default.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GSTReportService } from '../../track-gst-reports/track-gst-reports-default/GSTReport.service';

export const LoginDefaultRouts: Routes = [
  {
    path: '',
    component: LoginDefaultComponent,
    data: {
      breadcrumb: 'Login'
    }
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginDefaultRouts),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers:[LoginService,GSTReportService],
  declarations: [LoginDefaultComponent]
})
export class LoginDefaultModule { }
