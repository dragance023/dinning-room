import { RestaurantService } from './../service/restaurant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { MenuList } from '../model/menu-list.model';
import { Menu } from '../model/menu';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() restaurant: Restaurant; /* ovaj input prima ono sto smo poslali iz item.component.ts */
  menu: Menu;
  constructor(protected restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getMenu(this.restaurant._id).subscribe(response => {
      return this.menu = new MenuList(response).results[0]; /* stavljam [0] zato sto sa servera dobijamo */
    })                                                      /* listu sa samo jednim elementom (menu) */
  }

}
