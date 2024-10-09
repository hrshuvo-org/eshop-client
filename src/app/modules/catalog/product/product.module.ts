import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from "../../../shared/shared.module";
import {NgbPagination, NgbRating} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [

    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbRating,
    NgbPagination
  ]
})
export class ProductModule { }
