import { log } from 'util';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceRequestService } from './service-request.service';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { QueryDetail } from '../../../domain/query-detail';
import { QueryResponse } from '../../../domain/query-response';

@Component({
  selector: 'app-service-request-default',
  templateUrl: './service-request-default.component.html',
  styleUrls: [
    './service-request-default.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ServiceRequestDefaultComponent implements OnInit {
  queries: QueryDetail[];
  responseList: QueryResponse[] = [];
  queryId: number;
  httpmsg: String = 'Processing your request';
  serviceRequestForm = this.fb.group({
    title: [''],
    query: ['']
  });

  replyQueryForm = this.fb.group({
    response: [''],
    queryId: ['']
  });

  constructor(
    private fb: FormBuilder,
    private requestService: ServiceRequestService,
    private toastyService: ToastyService
  ) {}

  currentUser = 6;

  position = 'top-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 8000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  ngOnInit() {
    this.fetchUserQueries(1, 0);
  }

  fetchUserQueries(userId, queryId) {
    this.requestService.fetchUserQueries(userId).subscribe(httpmsg => {
      this.queries = <QueryDetail[]>httpmsg.result;
      if (queryId > 0) {
        this.openChat(queryId);
      }
    });
  }

  openChat(queryId) {
    this.queryId = queryId;
    this.responseList = [];
    for (let i = 0; i < this.queries.length; i++) {
      if (this.queries[i].queryId === queryId) {
        for (let j = 0; j < this.queries[i].queryResponses.length; j++) {
          this.responseList.push(this.queries[i].queryResponses[j]);
        }
      }
    }
    console.log('response :: ' + this.responseList);
  }

  replyQuery() {
    const reply: QueryResponse = this.replyQueryForm.value as QueryResponse;
    reply.queryId = this.queryId;

    this.requestService.queryResponse(reply).subscribe(httpmsg => {
      this.replyQueryForm.reset();
      this.fetchUserQueries(1, this.queryId);
    });
  }

  serviceRequest() {
    console.log(this.serviceRequestForm.value);
    const serviceQuery: QueryDetail = this.serviceRequestForm
      .value as QueryDetail;
    this.requestService.userQuery(serviceQuery).subscribe(httpmsg => {
      this.httpmsg = httpmsg.message;
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
        this.fetchUserQueries(1, 0);
        this.serviceRequestForm.reset();
      }
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
