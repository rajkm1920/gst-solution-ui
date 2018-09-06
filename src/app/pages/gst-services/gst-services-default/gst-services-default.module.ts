import { GSTService } from './gst.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { GstServicesDefaultComponent } from "./gst-services-default.component";

export const GstServicesDefaultRoutes: Routes=[
{
    path : '',
    component : GstServicesDefaultComponent,
    data : {
        breadcrumb: ' GST Services',
        icon: 'icofont-box bg-c-Moderate_cyan',
        status: false
    }
}

];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(GstServicesDefaultRoutes),
      SharedModule,
      HttpClientModule,
    ],
    providers: [GSTService],
    declarations: [GstServicesDefaultComponent]
  })
  export class GstServicesDefaultModule { }
  