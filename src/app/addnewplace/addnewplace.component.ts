import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/mapsservice.service'
import * as uuid from 'uuid';
import {Property} from '../model/property';

@Component({
  selector: 'app-addnewplace',
  templateUrl: './addnewplace.component.html',
  styleUrls: ['./addnewplace.component.css']
})
export class AddnewplaceComponent implements OnInit {

  lat: number = 0;
  lng: number = 0;

  address : string;
  aprice : number;
  desc : string;

  constructor(private _mapsService: MapsService) {
    //this.getGeoLocation("13322 Dovedale Way, Germantown, MD, 20874");
    //places = JSON.parse(localStorage.getItem("properties") || "{}");;
  }

  ngOnInit() {

  }

  getGeoLocation(){
    this._mapsService.getGeoLocation(address.value).subscribe(resp => {
      console.log(typeof resp.lat(), resp.lng());
      this.lat = resp.lat();
      this.lng = resp.lng();
    },
    error => {
      console.log(error);
    });
  }

  savePlace(){
    const myId = uuid.v4();
    var places = JSON.parse(localStorage.getItem("places") || "{}");
    let property : Property = {
      id: myId,
      address: address.value,
      askingPrice: aprice.value,
      description: desc.value,
      lat: this.lat,
      lng: this.lng
    }
    console.log(property);
    places[myId] = property;
    localStorage.setItem("places", JSON.stringify(places));
    address.value = '';
    aprice.value = '';
    desc.value = '';
  }


}
