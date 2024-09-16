import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoryListComponent } from './home-category-list/home-category-list.component';



@NgModule({
  declarations: [
    HomeCategoryListComponent
  ],
  exports: [
    HomeCategoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
