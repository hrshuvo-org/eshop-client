import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeModule} from "../../modules/home/home.module";


@NgModule({
  declarations: [
    Dashboard01Component,
    Dashboard02Component,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        NgbModule,
        FormsModule,
        NgApexchartsModule,
        HomeModule
    ]
})
export class DashboardModule { }
