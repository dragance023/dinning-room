import { ModalComponent } from './../modal/modal.component';
import { Restaurant } from './../model/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; /* 1. importujem modal */


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() restaurant: Restaurant;
  constructor(protected modal: NgbModal) { } /* 2. injecting modal */

  ngOnInit() {
  }

  openModal() { /* 3. funkcija koja ce otvarati modal */
    const modalRef = this.modal.open(ModalComponent); /* => definisemo koja komponenta ce se otvarati u modal-u*/
    modalRef.componentInstance.restaurant = this.restaurant;  /* => saljemo vrednost naseg @Input-a restaurant u nasu ModalComponent-u, 
                                                              /* i tamo cemo morati da napravimo jedan @Input takodje */
  }                                                           /* koji ce da primi zapravo to sto saljemo odavde*/

}
