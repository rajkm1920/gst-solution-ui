import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { ManageEmployeesComponent } from './manage-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EmployeeService } from '../../../services/super-admin/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '../../../../../node_modules/angular2-datatable';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastyModule } from 'ng2-toasty';

export const ManageEmployeesRouts: Routes = [
  {
    path: '',
    component: ManageEmployeesComponent,
    data: {
      breadcrumb: 'Employees',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageEmployeesRouts),
    SharedModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    ToastyModule.forRoot()

  ],
  declarations: [ManageEmployeesComponent],
  providers: [EmployeeService],
})
export class ManageEmployeesModule { }
