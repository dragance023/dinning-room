import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './service/restaurant.service';
import { RestaurantList } from './model/restaurant-list.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  currentPage: number = 1;
  restaurantList: RestaurantList;

  params = {
    page: "",
    pageSize: "20",
    sort: "",
    sortDirection: "",
    filter: {
      cuisine: "",
      priceFrom: "",
      priceTo: ""
    }
  }

  constructor(protected restaurantService: RestaurantService, protected router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(noviParametar =>{
      let cuisine = noviParametar['tipKujne'] == "all" ? this.params.filter.cuisine = "" : this.params.filter.cuisine = noviParametar['tipKujne'];
      this.params.filter.cuisine = cuisine;
      this.params.page = "1";
      this.getRestaurants()
    });

  }

  // pageChange je @Output koji kada se promeni stranica salje bas tu stranicu na koju je promenjeno
  // nasa funkcija changePage ce primiti taj $event sto je zapravo nova stranica
  // i smestice u parametre, zatim ce refreshovati ispis sa getRestaurants
  changePage(newPage) {
    this.params.page = newPage;
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getAll(this.params).subscribe(response => {
      return this.restaurantList = response;
    });
  }



}
