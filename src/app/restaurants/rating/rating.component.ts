import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  @Input() fullIcon;  /* Putanja za pune coine ili zvezdice */
  @Input() emptyIcon;  /* Putanja za prazne coine ili zvezdice */
  @Input() grade;  /* Od svakog restorana uzima price ili rating */

  emptyArray; 
  fullArray; 

  constructor() { }

  ngOnInit() {
    this.emptyArray = new Array(5 - this.grade);  /* Niz praznih coina ili zvezdica */
    this.fullArray = new Array(this.grade);  /* Niz punih coina ili starrova */
  }

}



