import { GSTServices } from './../../../domain/GSTServices';
import { GSTService } from './gst.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gst-services-default',
  templateUrl: './gst-services-default.component.html',
  styleUrls: ['./gst-services-default.component.css']
})
export class GstServicesDefaultComponent implements OnInit {
  GST_Service: GSTServices[];

  constructor(private gstServices: GSTService) {}

  ngOnInit() {
    this.getGSTservices();
  }

  getGSTservices(): void {
    this.gstServices.getGSTServices().subscribe(GST_Service => {
      this.GST_Service = <GSTServices[]>GST_Service.result;
      console.log(this.GST_Service);
    });
  }
}
