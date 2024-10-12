import {Component, OnInit} from '@angular/core';
import {Menu, NavService} from "../../../shared/services/nav.service";
import {fromEvent, Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {HomeService} from "../home.service";
import {PaginationParams} from "../../../shared/models/filter-list";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  items: any[] = [];
  showNotFound: boolean = false;
  public SearchResultEmpty: boolean = false;
  public filter = new PaginationParams(6);

  private searchSubject = new Subject<string>();

  constructor(public navServices: NavService,
              private homeService: HomeService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.searchSubject.pipe(
      debounceTime(1000) // Waits for 2 seconds
    ).subscribe(searchText => {
      this.Search(searchText);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let query = params['k'];
      if (query)
        this.filter.Query = query;
    });


    // let maincontent: any = document.querySelectorAll(".main-content");
    // fromEvent(maincontent, "click").subscribe(() => {
    //   this.selectItem('');
    // });
    // this.filter.Query = '';
  }


  Search(searchText: any) {
    if (!searchText) {
      this.items = [];
      this.SearchResultEmpty = false;

      return;
      // this.clearSearch();
    }

    // console.log(searchText);

    this.homeService.searchItem(this.filter).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.items = res.data;
      }
    });

  }


  selectItem(item: any) {
    // console.log(this.filter.Query);
    this.showNotFound = false;
    this.clearSearch();

    this.router.navigate(['/s'], {queryParams: {k: this.filter.Query}}).then(() =>{
      window.location.reload();
    });
  }

  clearSearch() {
    // this.filter.Query = '';
    this.items = [];
    this.SearchResultEmpty = false;
    return this.filter.Query, this.items
  }

  onKeyUp() {
    this.showNotFound = true;
    this.searchSubject.next(this.filter.Query);
  }

  onSearch(Query: string) {
    if (Query.length > 0) {
      this.filter.Query = Query;
      this.Search(Query);
    } else
      this.router.navigate(['/']).then(r => r);
  }


}
