import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//import { DashboardService } from '../../../services/rm/dashboard.service';



export const SuperAdminDashboardRouts: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Admin Dashboard',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SuperAdminDashboardRouts),
    SharedModule,
    HttpClientModule,
    HttpModule

  ],
  declarations: [DashboardComponent],
  providers: [
  //  DashboardService
],
})
export class DashboardModule { }
