import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

 lat: number = 40.7013909;
 lng: number = -112.029775;

  constructor() {

  }

  ngOnInit() {
  }

}
