import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 's',
        component: ProductListComponent
      }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule {
}
