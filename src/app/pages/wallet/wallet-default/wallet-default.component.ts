import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileService } from '../../user/profile/profile.service';
import { UserDetail } from '../../../domain/user-detail';
import { FormBuilder } from '@angular/forms';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';

@Component({
  selector: 'app-wallet-default',
  templateUrl: './wallet-default.component.html',
  styleUrls: ['./wallet-default.component.css',
  '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../../../../node_modules/ng2-toasty/style-default.css',
  '../../../../../node_modules/ng2-toasty/style-material.css'
],
encapsulation: ViewEncapsulation.None
})

export class WalletDefaultComponent implements OnInit {
  userArray: UserDetail;
  walletAmount: String;

  addWalletAmountForm = this.fb.group({
    amount: ['']
  });

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
    private toastyService: ToastyService
  ) {}

  position = 'top-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 8000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  ngOnInit() {
    this.getUserProfile('1');
  }

  addWalletAmount() {
    console.log(this.addWalletAmountForm.value);
   const amount = this.addWalletAmountForm.value;
    this.profileService.addWalletAmount(amount.amount).subscribe(data => {
      console.log(data);
      if (data.error) {
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'error',
          position: 'top-right',
          closeOther: true
        });
      } else {
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
        this.walletAmount = <string>data.result;
        this.addWalletAmountForm.reset();
      }
    });
  }

  getUserProfile(userId: string) {
    this.profileService.getUserProfile(userId).subscribe(data => {
      this.userArray = <UserDetail>data.result;
      console.log(this.userArray);
      this.walletAmount = this.userArray.walletAmount;
    });
  }

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default':
        this.toastyService.default(toastOptions);
        break;
      case 'info':
        this.toastyService.info(toastOptions);
        break;
      case 'success':
        this.toastyService.success(toastOptions);
        break;
      case 'wait':
        this.toastyService.wait(toastOptions);
        break;
      case 'error':
        this.toastyService.error(toastOptions);
        break;
      case 'warning':
        this.toastyService.warning(toastOptions);
        break;
    }
  }
}
