import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from "./products/products.module";
import {CatalogRoutingModule} from "./catalog-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ProductsModule
  ],
  exports:[
    ProductsModule
  ]
})
export class CatalogModule { }
