import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GSTReportService } from './../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { CustomerGstinDetail } from './../../../domain/customer-gstin-detail';
import { LoginService } from './login-defaule.service';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDetail } from '../../../domain/user-detail';




@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginDefaultComponent implements OnInit {
  loginForm: FormGroup;
  userDetail:UserDetail[]=[];
  cust_gstn : CustomerGstinDetail[];

  constructor(private routes:Router,private fb: FormBuilder,private loginservice:LoginService,
    private getreport:GSTReportService,private modalService: NgbModal) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      contact: [''],
      password: '',
      role:''
    })
  }
  loginValidate(){
    console.log("Contact "+this.loginForm.value.contact+" Role "+this.loginForm.value.role);
     if(this.loginForm.value.role==1){
      this.routes.navigateByUrl("/rm-dashboard");
    }
    else if(this.loginForm.value.role==2){
      this.routes.navigateByUrl("/customer-offer-dashboard");
    }
    else if(this.loginForm.value.role==3){
      this.routes.navigateByUrl("/admin-dashboard");
    }
  }
loginWithPassWord(){
  console.warn('call Login ',btoa(this.loginForm.value.password+":"+this.loginForm.value.contact));
  let username=this.loginForm.value.contact;
  let pass=this.loginForm.value.password;
  if (username=='') {
    alert("Please enter correct login details ")
    return false;
  }
  if (pass=='') {
    alert("Please enter Password ")
    return false;
  }
  this.loginservice.LoginWithPin(username,pass).subscribe(userDetail=>
    {this.userDetail=<UserDetail[]>userDetail.result;
      // console.warn("MESSAGE ",userDetail.message," ERROR ",userDetail.error);
    if (!userDetail.error) {
      sessionStorage.setItem("USER",JSON.stringify(this.userDetail));
       //this.routes.navigateByUrl("/customer-offer-dashboard");
       let userobj=JSON.parse(sessionStorage.getItem("USER"));
       if (userobj.userId!=null) {
         let flag=false;
         console.warn("inside if ",userobj);
         this.getreport.getcustGSTNDetail(userobj.userId,'0').subscribe(
          cust_gstn=> {this.cust_gstn=<CustomerGstinDetail[]>cust_gstn.result;
            console.log(this.cust_gstn)
            if (!cust_gstn.error) {
              let cust_gstnTemp =this.cust_gstn;
            this.cust_gstn=[];
            cust_gstnTemp.forEach(element => {
              if(element.statusId==1){
                element.gstPlan.forEach(element2 => {
                  if(element2.statusId==1){
                    //alert(element2.statusId);
                      flag=true;}});}
              });
              // alert(flag)
              if(flag){this.routes.navigateByUrl("/customer-file-gst");}
              else{this.routes.navigateByUrl("/customer-offer-dashboard");}
            }
            else{
              this.routes.navigateByUrl("/customer-offer-dashboard");
            }

          });



       }
       else{
         console.log("new user alert otp "+userobj.newUser);
       }

    }
    else{
      console.log("error");
    }


    });


}


openLg(content){
  this.modalService.open(content, { size: 'lg', backdrop : 'static', keyboard : false });
}


}
