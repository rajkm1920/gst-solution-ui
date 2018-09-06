import { StateAndCity } from './../../../domain/StateandCity';
import { Router } from '@angular/router';
import { CustomerGstinDetail } from './../../../domain/customer-gstin-detail';
import { GSTReportService } from './../../track-gst-reports/track-gst-reports-default/GSTReport.service';
import { Component, OnInit, Input } from '@angular/core';
import { PlanBuyService } from './plansBuy.server';
import { RegisterGST } from '../../register-gst/register-gst-default/register-gst.service';
import { GST } from '../../../domain/GST';


@Component({
  selector: 'app-buy-plans-default',
  templateUrl: './buy-plans-default.component.html',
  styleUrls: ['./buy-plans-default.component.css']
})
export class BuyPlansDefaultComponent implements OnInit {

  plans=JSON.parse(localStorage.getItem('custmorSelectedPlan'));
  cust_gstn : CustomerGstinDetail[];
  statesfatched: StateAndCity[];
  cityfatched: StateAndCity[];
  httpMsg:String;

  oldnumber:string;
  oldname:string;
  oldbusinessname:string;
  oldemail:string;
  oldcityId:number;
  oldstateId:number;
  oldbusinesstype:string;

  constructor(private getreport:GSTReportService,private buyPlanService:PlanBuyService,
    private routs:Router,private registerService:RegisterGST) { }

  ngOnInit() {
    console.warn(this.plans);
    this.fetchStates();
  this.getCustomerGSTN('1');
  }

  getCustomerGSTN(customerId:string) {
    this.getreport.getcustGSTNDetail(customerId,'0').subscribe(
      cust_gstn=> {this.cust_gstn=<CustomerGstinDetail[]>cust_gstn.result;
        console.log("1",this.cust_gstn);
    let cust_gstnTemp =this.cust_gstn;
    this.cust_gstn=[];
    cust_gstnTemp.forEach(element => {
      if(element.statusId==1){
        this.cust_gstn.push(element);
      }
      });
      }
    );
  };

  fetchStates(){
    this.registerService.fetcheState().subscribe(statesfatched=>
      this.statesfatched=<StateAndCity[]>statesfatched.result
    )
  };

  fetchCetie(stateId:string){
    this.registerService.fetcheCities(stateId).subscribe(cityfatched=>
      this.cityfatched=<StateAndCity[]>cityfatched.result
    )
    // console.log("cities called",stateId);
  };

  getGSTDetail(gstn){
        this.oldnumber='';
        this.oldname='';
        this.oldbusinessname='';
        this.oldemail='';
        this.oldcityId=0;
        this.oldstateId=0;
        this.oldbusinesstype='';
    // alert("onchange");
    this.cust_gstn.forEach(element => {
      if(gstn==element.gstin){
        this.oldnumber=<string>element.contact;
        this.oldname=<string>element.legalName;
        this.oldbusinessname=<string>element.businessName;
        this.oldemail=<string>element.email;
        this.oldcityId=<number>element.cityId;
        this.oldstateId=<number>element.stateId;
        this.oldbusinesstype=<string>element.businessType;
      }

    });
  }

  buyplanwith_out_srevice(months:number,businessType:string,email:string,businessName:string
    ,legalName:string,contact:string,gstin:string,planId:number,planType:string){
      let planAmount:DoubleRange= this.getplanAmount(months);
      let customerId=1;
      let gstId=0;
      let status="SAVE";
      this.cust_gstn.forEach(element => {
        if(gstin==element.gstin){
           gstId=<number>element.gstId;
           status="EXISTING";
        }
      });

        const gst:GST={customerId,contact,businessName,legalName,
          months,planId,email,businessType,status,planType,gstin,gstId,planAmount} as GST;
          console.warn("for new GST status SAVE ",gst);

      this.buyPlanService.buyGSTPlan(gst).subscribe(httpMsg=>{
        this.httpMsg=<String>httpMsg.message;
        console.log(this.httpMsg);
      if(!httpMsg.error){
       localStorage.removeItem('custmorSelectedPlan');
       localStorage.setItem('buyPlanSuccessFully',JSON.stringify('success'));
        this.routs.navigateByUrl('/user');
      }
      else{
        alert(" error ");
      }
      } );

  }
  buyplanwith_service(stateId:number,cityId:number,contact:string,businessName:string,legalName:string,
    months:number,planId:number,email:string,businessType:string,planType:string){
    let planAmount:DoubleRange= this.getplanAmount(months);
    let serviceAmount=499.0;
    let customerId=1;
    let status="APPLY"
    const gst:GST={customerId,stateId,cityId,contact,businessName,legalName,
      months,planId,email,businessType,status,planType,planAmount,serviceAmount} as GST;
      console.warn(gst);
      this.buyPlanService.buyGSTPlan(gst).subscribe(httpMsg=>{
        this.httpMsg=<String>httpMsg.message;
        console.log(this.httpMsg);
      if(!httpMsg.error){
       localStorage.removeItem('custmorSelectedPlan');
       localStorage.setItem('buyPlanSuccessFully',JSON.stringify('Plan SuccessFully taken'));
       this.routs.navigateByUrl('/user');
      }
      else{
        alert(" error ");
      }
      } );
  }

  getplanAmount(months){
    var caseVar=months;
  let amount;
    switch(caseVar) {
      case "1": {
         amount=this.plans.monthlyAmt;
         break;
      }
      case "3": {
         amount=this.plans.quarterlyAmt;
         break;
      }
      case "6": {
        amount=this.plans.halfYearlyAmt;
        break;
     }
     case "12": {
      amount=this.plans.annuallyAmt;
      break;
   }
      default: {
         amount=0;
         break;
      }
   }

   return amount;
  }

}
