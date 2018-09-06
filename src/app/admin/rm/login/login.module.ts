import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      breadcrumb: 'login',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LoginRoutes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
