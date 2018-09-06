import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PaymentService } from './payment.service';
import { ResponseJson } from '../../../domain/ResponseJson';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { FormGroup,  FormControl,  FormBuilder,  Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css',
  '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'],encapsulation: ViewEncapsulation.None
})
export class PaymentsComponent implements OnInit {

  p;
  constructor(private paymentService:PaymentService,
    private toastyService: ToastyService,
    private modalService: NgbModal) { }
  response:ResponseJson;
  paymentList:PaymentDetails[]=[];
  paymentItemList;

  ngOnInit() {

   
    this.getPaymentList();
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', backdrop : 'static', keyboard : false });
  }



  getPaymentList(){
        this.paymentService.getPaymentList().subscribe(data=>{
          this.response=data;
          this.paymentList=<PaymentDetails[]>this.response.result
      })
  }


  verifyPayment(payment){

      console.log(JSON.stringify(payment.paymentId))

      if(confirm("Are you sure want to verify this Payment?")){

      this.paymentService.verifyPayment(payment.paymentId,payment.gstPlanId,payment.serviceId).subscribe(data=>{
        this.response=data;
        if(this.response!=null && !this.response.error){
          this.addToast({title:'', msg:this.response.message, showClose: true, timeout: 8000, theme:'bootstrap', type:'success', position:'top-right', closeOther:true});
          this.getPaymentList();

        }
        else
        this.addToast({title:'', msg:this.response.message, showClose: true, timeout: 8000, theme:'bootstrap', type:'error', position:'top-right', closeOther:true});
       
    });
  }
  }
  modalTransactionId
  viewItems(content,payment){
this.modalTransactionId=payment.orderId;
    console.log(JSON.stringify(payment.paymentItems))
    this.paymentItemList=payment.paymentItems;
    this.modalService.open(content, { size: 'lg', backdrop : 'static', keyboard : false });
  //   this.paymentService.verifyPayment(paymentId).subscribe(data=>{
  //     this.response=data;
  //     if(this.response!=null && !this.response.error){
  //       this.addToast({title:'', msg:this.response.message, showClose: true, timeout: 8000, theme:'bootstrap', type:'success', position:'top-right', closeOther:true});
  //       this.getPaymentList();

  //     }
  //     else
  //     this.addToast({title:'', msg:this.response.message, showClose: true, timeout: 8000, theme:'bootstrap', type:'error', position:'top-right', closeOther:true});
     
  // })
}





  position = 'top-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 8000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

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
       //alert("save")
     },
     onRemove: (toast: ToastData) => {
       /* removed */
       //alert("remove")
     }
   };

   switch (options.type) {
     case 'default': this.toastyService.default(toastOptions); break;
     case 'info': this.toastyService.info(toastOptions); break;
     case 'success': this.toastyService.success(toastOptions); break;
     case 'wait': this.toastyService.wait(toastOptions); break;
     case 'error': this.toastyService.error(toastOptions); break;
     case 'warning': this.toastyService.warning(toastOptions); break;
   }
 }



}
