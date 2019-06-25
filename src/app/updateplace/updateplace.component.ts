import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateplace',
  templateUrl: './updateplace.component.html',
  styleUrls: ['./updateplace.component.css']
})
export class UpdateplaceComponent implements OnInit {



  constructor() {
    this.owner = '';
    this.address = '';
    this.aprice = 0;
    this.desc = '';
    this.isSelected = false;
    this.selectedPlace = {};
    this.places = JSON.parse(localStorage.getItem("places") || "{}");
    this.placesDetails = [];
    console.log(this.places);
    for (const [key, value] of Object.entries(this.places)) {
        this.placesDetails.push(value)
    }
  }

  ngOnInit() {
  }

  updatePlace(property){

    this.isSelected = true;
    this.selectedPlace = property;
    this.owner = this.selectedPlace.ownerName;
    this.address = this.selectedPlace.address;
    this.aprice = this.selectedPlace.askingPrice;
    this.desc = this.selectedPlace.description;
    console.log(this.selectedPlace);
  }
}
