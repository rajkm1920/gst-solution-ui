import { Plan } from '../../../domain/plans';
import { PlanService } from './plan.servics';
import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import { PlanNote } from '../../../domain/PlanNote';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {

  planNote:PlanNote;
  plans:Plan[];
  planNoteVar:String;
  

  constructor(private planService: PlanService,private routes: Router) { }

  ngOnInit() {
    this.getPlans();
  }

  getPlans(): void {
    this.planService.getPlans()
      .subscribe(plans => {
        this.planNote = <PlanNote>plans.result;
        this.planNoteVar=this.planNote.planNote;
         //console.log(this.planNoteVar)
         this.plans=this.planNote.plans;
        //  console.warn(this.plans);
        });
        
      
  }

  buyplanClick(plan){
    console.warn(plan);
    localStorage.setItem('custmorSelectedPlan',JSON.stringify(plan))
    this.routes.navigateByUrl("/customer-buyPlans");
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}


