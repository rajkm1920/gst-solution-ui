import { WalletDefaultComponent } from './wallet-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ProfileService } from '../../user/profile/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';

export const WalletDefaultRoutes: Routes = [
  {
    path: '',
    component: WalletDefaultComponent,
    data: {
      breadcrumb: 'My Wallet',
      icon: 'icofont-wallet bg-c-yellow',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WalletDefaultRoutes),
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  providers: [ProfileService],
  declarations: [WalletDefaultComponent]
})
export class WalletDefaultModule { }
