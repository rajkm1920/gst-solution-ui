import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import '../../../../assets/charts/echart/echarts-all.js';
import { Http } from '@angular/http';
import { ProfileService } from './profile.service';
import { UserDetail } from '../../../domain/user-detail';
import { ResponseJson } from '../../../domain/ResponseJson';
import { FormBuilder,  Validators} from '@angular/forms';
import { GSTReportService } from '../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { CustomerGstinDetail } from '../../../domain/customer-gstin-detail';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  userArray: UserDetail;
  response: ResponseJson;
  typeVar: String = 'success';
  cust_gstn: CustomerGstinDetail[];
  gstdetails = [];
   httpPlanMsg=JSON.parse(localStorage.getItem('buyPlanSuccessFully'));
  httpmsg: String = 'Processing your request';

  editProfileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required]],
    contact: ['', Validators.required],
    password: [null],
    address: [null]
  });

  constructor(
    private fb: FormBuilder,
    public http: Http,
    private profileService: ProfileService,
    private toastyService: ToastyService,
    private getreport: GSTReportService,
    private modalService: NgbModal
  ) {}

  p;
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
    this.getCustomerGSTN('1', '0');
    this.addToast({title: 'sdsdsdf', msg: "ddgdbdbhdbh", showClose: true, timeout: 8000, theme: 'bootstrap', type: this.typeVar,position: 'top-right',closeOther: true});
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  getUserProfile(userId: string) {
    this.profileService.getUserProfile(userId).subscribe(data => {
      this.response = data;
      this.userArray = <UserDetail>this.response.result;
      console.log(this.userArray);
      this.editProfileForm.setValue({
        name: this.userArray.name,
        email: this.userArray.email,
        contact: this.userArray.contact,
        password: this.userArray.password,
        address: this.userArray.address
      });

    });
  }

  editProfile() {
    const editUser: UserDetail = this.editProfileForm.value as UserDetail;
    this.profileService.editUserProfile(editUser).subscribe(httpmsg => {
      this.httpmsg = <String>httpmsg.message;
      this.getUserProfile('1');
      console.log(this.httpmsg);
      if (httpmsg.error) {
        this.typeVar = 'error';
      }

      this.addToast({
        title: '',
        msg: this.httpmsg,
        showClose: true,
        timeout: 8000,
        theme: 'bootstrap',
        type: this.typeVar,
        position: 'top-right',
        closeOther: true
      });
    });
    this.typeVar = 'success';
  }

  getCustomerGSTN(customerId: string, customerGstin: string): void {
    this.getreport
      .getcustGSTNDetail(customerId, customerGstin)
      .subscribe(cust_gstn => {
        this.cust_gstn = <CustomerGstinDetail[]>cust_gstn.result;
        console.log(this.cust_gstn);
        let cust_gstnTemp = this.cust_gstn;
        this.cust_gstn = [];
        cust_gstnTemp.forEach(element => {
          if (element.statusId === 1) {
            this.cust_gstn.push(element);
          }
        });

        this.cust_gstn.forEach(element => {
          element.gstPlan.forEach(element2 => {
            if (element2.statusId === 1) {
              this.gstdetails.push({
                gstId: element.gstId,
                gstin: element.gstin,
                plan: element2.planType,
                businessName: element.businessName,
                scheme: element2.scheme,
                proposals: element2.proposals,
                status: element.status
              });
            }
          });
        });
        this.cust_gstn.forEach(element => {
          let  result = this.gstdetails.find( e => e.gstId === element.gstId );
            if(!result){
              this.gstdetails.push({
                gstId: element.gstId,
                gstin: element.gstin,
                plan: 'Not Found',
                businessName: element.businessName,
                scheme: 'Not Found',
                proposals: 'Not Found',
                status: element.status
               } )
            }

          });


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

  closeSuccessDiv(){
    this.httpPlanMsg="";
    localStorage.removeItem('buyPlanSuccessFully');
  }

}
