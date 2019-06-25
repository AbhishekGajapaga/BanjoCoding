import { Component, OnInit } from '@angular/core';
import {Property} from '../model/property';

@Component({
  selector: 'mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

 lat: number = 40.7013909;
 lng: number = -112.029775;

  constructor() {
      this.places = JSON.parse(localStorage.getItem("places") || "{}");
      this.placesDetails = [];
      console.log(this.places);
      for (const [key, value] of Object.entries(this.places)) {
          this.placesDetails.push(value)
      }
  }

  ngOnInit() {

  }

  onMouseOver(infoWindow, $event: MouseEvent) {
        infoWindow.open();
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
        infoWindow.close();
  }

}
