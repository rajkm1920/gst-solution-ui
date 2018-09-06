import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { ResponseJson } from '../../../domain/ResponseJson';
import { CustomerDto } from '../../../domain/customer-dto';
import { CustomerService } from '../../../services/rm/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  p;
  constructor(private customerService:CustomerService,private routes:Router) { }

  ngOnInit() {
    this.newCustomerList();
  }
  response:ResponseJson;
  customerList:CustomerDto[];

  newCustomerList(){
    this.customerService.getRMCustomer().subscribe(data=>{
        this.response=data;
        this.customerList=<CustomerDto[]>this.response.result
    })
  }


  editCustomer(customer){
    console.log(JSON.stringify(customer))
    alert(customer.userId)
  }


  
  makeProposalByCustomerId(customerId,customerName){
    localStorage.setItem('makeProposalCustomer', JSON.stringify({ customerId: customerId,customerName:customerName}));
    this.routes.navigateByUrl("/make-proposal");
    
      }

}
