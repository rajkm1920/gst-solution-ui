import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


const now = new Date();


@Component({
  selector: 'app-gst-track',
  templateUrl: './gst-track.component.html',
  styleUrls: ['./gst-track.component.css'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class GstTrackComponent implements OnInit {
  
  
  //selectedDate
  monthArray=[];
 
  currYear:Number;
  currMonth:Number;
  selectedMonth:Number;
  selectedYear:Number;
  plantype="Normal";
  constructor() { }

  ngOnInit() {
  }


  getPlanTypeMonth(event){
    
   this.plantype = event.target.value;
   if(this.plantype=="NORMAL"){
    this.monthArray=[{monthNo:4,month:"APR"},{monthNo:5,month:"MAY"},
    {monthNo:6,month:"JUN"},{monthNo:7,month:"JUL"},{monthNo:8,month:"AUG"},
    {monthNo:9,month:"SEP"},{monthNo:10,month:"OCT"},{monthNo:11,month:"NOV"},
    {monthNo:12,month:"DEC"},{monthNo:1,month:"JAN"},{monthNo:2,month:"FEB"},
    {monthNo:3,month:"MAR"}]
   
  }
  else{
    this.monthArray=[{monthNo:3,month:"MAR"},
    {monthNo:6,month:"JUN"},
    {monthNo:9,month:"SEP"},
    {monthNo:12,month:"DEC"}]
  }
  this.currYear=(new Date()).getFullYear();
  this.currMonth=((new Date()).getMonth()+1);
  this.selectedMonth=this.currMonth;
  this.selectedYear=this.currYear;
  }

  setDatePicker(event){
    this.selectedMonth = event.target.value;
    alert(this.selectedMonth)
  }
 
}
