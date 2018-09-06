import { ToastyModule } from 'ng2-toasty';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterGST } from './register-gst.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterGstDefaultComponent } from './register-gst-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const RegisterGSTDefaultRoutes: Routes = [
  {
    path: '',
    component: RegisterGstDefaultComponent,
    data: {
      breadcrumb: 'Register GST',
      icon: 'icofont-file-alt bg-c-pink',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterGSTDefaultRoutes),
    SharedModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    HttpClientModule
  ],
  providers:[RegisterGST],
  declarations:[RegisterGstDefaultComponent]
})
export class RegisterGSTDefaultModule { }
