import {Component, OnInit} from '@angular/core';
import {Menu, NavService} from "../../../shared/services/nav.service";
import {fromEvent, Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {HomeService} from "../home.service";
import {PaginationParams} from "../../../shared/models/filter-list";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  // public menuItems!: Menu[];
  // public items!: Menu[];
  items: any[] = [];
  // public text!: string;
  public SearchResultEmpty: boolean = false;
  public filter = new PaginationParams(6);

  private searchSubject = new Subject<string>();

  constructor(public navServices: NavService,
              private homeService: HomeService
              ) {
    this.searchSubject.pipe(
      debounceTime(1000) // Waits for 2 seconds
    ).subscribe(searchText => {
      this.Search(searchText);
    });
  }

  ngOnInit() {

    // this.navServices.items.subscribe((menuItems) => {
    //   this.items = menuItems;
    // });
    let maincontent: any = document.querySelectorAll(".main-content");
    fromEvent(maincontent, "click").subscribe(() => {
      this.selectItem('');
    });
    this.filter.Query = '';
  }


  Search(searchText: any) {
    if(!searchText || searchText.length < 2)
      return ;

    // console.log(searchText);

    this.homeService.searchItem(this.filter).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.items = res;
      }
    });

  }


  selectItem(item: any) {

    console.log(item);
    return ;


    this.filter.Query = '';
    // this.menuItems = [];
    this.items = [];
    this.SearchResultEmpty = false;
    // return this.filter.Query, this.menuItems
    return this.filter.Query, this.items
  }

  protected readonly onkeyup = onkeyup;

  onKeyUp() {
    this.searchSubject.next(this.filter.Query);
  }
}
