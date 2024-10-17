import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../catalog/category/category.service";
import {PaginationParams} from "../../../shared/models/filter-list";

@Component({
  selector: 'app-home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.scss']
})
export class HomeCategoryListComponent implements OnInit {
  categoryList: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategoryList();
    // this.loadCategoryTree();
  }

  private loadCategoryList() {
    let filter = new PaginationParams(6);

    this.categoryService.loadList(filter).subscribe(res => {

      this.categoryList = res.data;
      // console.log(this.categoryList);
    });

  }

  // private loadCategoryTree() {
  //   this.categoryService.loadCategoryTree().subscribe(res => {
  //     console.log(res);
  //   });
  // }
}
