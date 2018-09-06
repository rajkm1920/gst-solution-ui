import { Router } from '@angular/router';
import { CustomerGstinDetail } from './../../../domain/customer-gstin-detail';
import { GSTReportService } from './GSTReport.service';
import { GSTReportDomain } from './../../../domain/GSTReportDomain';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-track-gst-reports-default',
  templateUrl: './track-gst-reports-default.component.html',
  styleUrls: ['./track-gst-reports-default.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TrackGstReportsDefaultComponent implements OnInit {

  report_Proposal: GSTReportDomain[];
  report_domain : GSTReportDomain[];
  cust_gstn : CustomerGstinDetail[];
  plans=[];
 
  constructor(private getreport:GSTReportService,private modalService: NgbModal,private routes:Router) { }

  ngOnInit() {
    this.getCustomerReport(1,0);
    this.getCustomerGSTN('1','0');
  }

//this.reportService=<GSTReportDomain[]>reportService.result;
  getCustomerReport(customerId:number,month:number ): void {

    const report: GSTReportDomain = { customerId,month } as GSTReportDomain;

    this.getreport.getGSTreports(report).subscribe(
      report_domain=> {this.report_domain=<GSTReportDomain[]>report_domain.result;
        console.log(this.report_domain)
      });
  }

  searchPramsCustomerReport(customerGstinId:number,month:number,planId:number,year:number): void {
   let customerId:number=1;
       console.log("customerId",customerId,"gstId",customerGstinId,"month",month,"planId",planId,"year",year);
    const report: GSTReportDomain = { customerId,month,customerGstinId,planId,year} as GSTReportDomain;

    this.getreport.getGSTreports(report).subscribe(
      report_domain=> {this.report_domain=<GSTReportDomain[]>report_domain.result;
        console.log(this.report_domain)
      });
  }

  getCustomerGSTN(customerId:string,customerGstin:string): void {
    this.getreport.getcustGSTNDetail(customerId,customerGstin).subscribe(
      cust_gstn=> {this.cust_gstn=<CustomerGstinDetail[]>cust_gstn.result;
        console.log(this.cust_gstn)
        let cust_gstnTemp =this.cust_gstn;
        this.cust_gstn=[];
        cust_gstnTemp.forEach(element => {
          if(element.statusId==1){
            this.cust_gstn.push(element);
          }
          });
      
      });
  }
getPlanofGSTid(gstId:number){
  this.plans=[];
  if(gstId>0){
    this.cust_gstn.forEach(element => {
      if (element.gstId==gstId) {
        element.gstPlan.forEach(element2 => {
          if(element2.statusId==1){
          this.plans.push({gstPlanId:element2.gstPlanId,planType:element2.planType});
          }
        });
      }
      
    });
  }
 }

 viewInprocessReport(){
  this.routes.navigateByUrl("/customer-invoices");
 }

 openLg(content,id) {
  this.report_Proposal=[];
  const proposal :GSTReportDomain={id} as GSTReportDomain;
  this.getreport.fetchAllProposals(proposal).subscribe(report_Proposal=>{
    this.report_Proposal=<GSTReportDomain[]>report_Proposal.result
    console.warn(this.report_Proposal);
    if(!report_Proposal.error){
      this.modalService.open(content, { size: 'lg', backdrop : 'static', keyboard : false });
    }else{
      alert(report_Proposal.message);
    }
    
 
  });

  
  
}


}
