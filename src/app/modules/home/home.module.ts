import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoryListComponent } from './home-category-list/home-category-list.component';
import { SearchItemComponent } from './search-item/search-item.component';
import {FormsModule} from "@angular/forms";
import { RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeCategoryListComponent,
    SearchItemComponent
  ],
  exports: [
    HomeCategoryListComponent,
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
