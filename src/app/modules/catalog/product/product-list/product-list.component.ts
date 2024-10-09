import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  queryParam: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.loadQueryParams();

    console.log(this.queryParam);
  }

  private loadQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['k'];
    });

  }


}
