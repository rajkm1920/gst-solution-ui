import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { InvoiceService } from '../../../services/rm/invoice.service';
import { DocumentDetail } from '../../../domain/document-detail';
import { Invoice } from '../../../domain/invoice';
import { environment } from '../../../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-processed-documents',
  templateUrl: './processed-documents.component.html',
  styleUrls: ['./processed-documents.component.css',
  '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../../../../node_modules/ng2-toasty/style-default.css',
  '../../../../../node_modules/ng2-toasty/style-material.css'],encapsulation: ViewEncapsulation.None
})
export class ProcessedDocumentsComponent implements OnInit {

  constructor( private invoiceService: InvoiceService,
    private modalService: NgbModal) { }

  invoiceList:Invoice[]=[];
  noDocumentsMessage:String;
  backendUrl=environment.backendUrl;
  invoiceDocumentList: DocumentDetail[]=[];

   ngOnInit() {
     
    var processedInvoice = JSON.parse(localStorage.getItem("processedInvoice"));
    if (processedInvoice != null && processedInvoice!=""){

      //localStorage.setItem("processedInvoice",null);
     if(processedInvoice.processInvoiceid!=null && processedInvoice.processInvoiceid!=undefined){
        this.invoiceList.push(processedInvoice);
        this.getProcessedDocuments(processedInvoice.processInvoiceid);

      }
    }
  }
  show=true;
  imageSource;
  zoomImageOnClick(content,documentPath){
   // this.show=true;
   this.imageSource=this.backendUrl+documentPath;
    this.modalService.open(content, { size: 'lg'});
    
    
  }
  getProcessedDocuments(processInvoiceid){

    this.invoiceService.fetchProcessedDocuments(processInvoiceid)
    .subscribe(data=>{
     if(data!=null && data.result!=null){
      this.invoiceDocumentList = <DocumentDetail[]>data.result;
      if(this.invoiceDocumentList!=null)
        console.log(" Document List ....." + JSON.stringify(this.invoiceDocumentList))

     }
     else
        this.noDocumentsMessage="no documents found";

    })

  }

}
