import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ProcessedDocumentsComponent } from './processed-documents.component';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { HttpClientModule } from '@angular/common/http';
import {ImageZoomModule} from 'angular2-image-zoom';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

export const ProcessedDocumentsRoutes: Routes = [
  {
    path: '',
    component: ProcessedDocumentsComponent,
    data: {
      breadcrumb: 'GST-TRACK',
      icon: 'icofont-file-alt bg-c-green',
      status: false
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ProcessedDocumentsRoutes),

    ImageZoomModule,
   HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    
  ],
  providers:[InvoiceService],
  declarations: [ProcessedDocumentsComponent]
})
export class ProcessedDocumentsModule { }
