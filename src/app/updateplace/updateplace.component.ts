import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/mapsservice.service';

@Component({
  selector: 'app-updateplace',
  templateUrl: './updateplace.component.html',
  styleUrls: ['./updateplace.component.css']
})
export class UpdateplaceComponent implements OnInit {

  lat = 0;
  lng = 0;
  isSelected = false;
  selectedPlace = {};

  constructor(private _mapsService: MapsService) {
    this.places = JSON.parse(localStorage.getItem("places") || "{}");
    this.placesDetails = [];
    for (const [key, value] of Object.entries(this.places)) {
        this.placesDetails.push(value)
    }
  }

  ngOnInit() {
  }

  updatePlace(property){
    this.isSelected = true;
    this.selectedPlace = property;
    this.lat = this.selectedPlace.lat;
    this.lng = this.selectedPlace.lng;
  }

  savePlace(){
    this.selectedPlace.lat = this.lat;
    this.selectedPlace.lng = this.lng;
    this.places[this.selectedPlace.id] = this.selectedPlace;
    localStorage.setItem("places", JSON.stringify(this.places));
  }

  deletePlace(){
    delete this.places[this.selectedPlace.id];
    localStorage.setItem("places", JSON.stringify(this.places));
    this.reload();
  }

  reload() {
    window.location.reload();
  }

  getGeoLocation(){
    this._mapsService.getGeoLocation(address.value).subscribe(resp => {
      this.lat = resp.lat();
      this.lng = resp.lng();
    },
    error => {
      console.log(error);
    });
  }
}
