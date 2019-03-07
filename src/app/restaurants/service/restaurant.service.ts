import { MenuList } from './../model/menu-list.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestaurantList } from '../model/restaurant-list.model';
import { map } from 'rxjs/operators';

const baseUrl: string = "http://localhost:3000/api/restaurants";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(protected http: HttpClient) { }

  getAll(newParams?: any) {
    let queryParams = {};
    if(newParams) {
      queryParams = { params: new HttpParams()
        .set('page', newParams.page || "")
        .set('pageSize', newParams.pageSize || "")
        .set('sort', newParams.sort || "")
        .set('sortDirection', newParams.sortDirection || "")
        .set('filter', newParams.filter && JSON.stringify(newParams.filter) || "")
      }
    }
    return this.http.get(baseUrl, queryParams).pipe(map(
      response => new RestaurantList(response)
    ))
  }

  getMenu(idRestaurants: number) {
    let menuUrl = baseUrl + "/" + idRestaurants + "/menus";
    return this.http.get(menuUrl).pipe(map(
      response => new MenuList(response)
    ));
  }



  // getMenu(restaurantId: number): Observable<MenuList> {
  //   return this.http.get<RestaurantList>(serverUrl + "/" + restaurantId + "/menus")
  //     .pipe(map(res => {
  //       return new MenuList(res);
  //     }));
  // }


}
