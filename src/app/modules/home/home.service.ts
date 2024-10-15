import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AppHelperService} from "../../shared/services/app-helper.service";
import {HttpClient} from "@angular/common/http";
import {PaginationParams} from "../../shared/models/filter-list";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private helper: AppHelperService) {
  }

  searchItem(filter: PaginationParams) {
    const params = this.helper.GetHttpParams(filter);
    return this.http.get(this.baseUrl + 'home/items', {params});
  }


}
