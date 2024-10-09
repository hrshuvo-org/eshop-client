import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModule} from "./product/product.module";
import {CatalogRoutingModule} from "./catalog-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ProductModule
  ],
  exports:[
    ProductModule
  ]
})
export class CatalogModule { }
