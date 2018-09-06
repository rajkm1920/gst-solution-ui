import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { RegisterGST } from './register-gst.service';
import { FormBuilder } from '@angular/forms';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GST } from '../../../domain/GST';
import { StateAndCity } from '../../../domain/StateandCity';

@Component({
  selector: 'app-register-gst-default',
  templateUrl: './register-gst-default.component.html',
  styleUrls: [
    './register-gst-default.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class RegisterGstDefaultComponent implements OnInit {
  statesfatched: StateAndCity[];
  cityfatched: StateAndCity[];

  httpmsg: String = 'Processing your request';
  profileForm = this.fb.group({
    legalName: [''],
    gstin: [''],
    stateId: [''],
    cityId: [''],
    businessName: [''],
    contact: ['']
  });

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterGST,
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
    this.fetchStates();
  }

  addnewGSTN() {
    const reportRegister: GST = this.profileForm.value as GST;
    reportRegister.status = 'SAVE';
    reportRegister.customerId = 1;
    this.registerService.addGST(reportRegister).subscribe(httpmsg => {
      this.httpmsg = httpmsg.message;
      console.log(httpmsg);
      if (httpmsg.error) {
        this.addToast({
          title: '',
          msg: this.httpmsg,
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
          msg: this.httpmsg,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
        this.profileForm.reset();
      }
    });
  }

  fetchStates() {
    this.registerService
      .fetcheState()
      .subscribe(
        statesfatched =>
          (this.statesfatched = <StateAndCity[]>statesfatched.result)
      );
  }

  fetchCeties(stateId: string) {
    this.registerService
      .fetcheCities(stateId)
      .subscribe(
        cityfatched => (this.cityfatched = <StateAndCity[]>cityfatched.result)
      );
    console.log('cities called', stateId);
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
