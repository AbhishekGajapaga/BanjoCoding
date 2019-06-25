import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService extends GoogleMapsAPIWrapper{

  constructor() {
    super();
  }

  /**
     * Gets the coordingates (lat,lng) from a string address using Google API
     * geocoding service.
     * @param {string} [address] String representation of the address to be geocoded.
     * @returns {Observable<any>} Location object which has coords attributes.
     */
    getGeoLocation(address: string): Observable<any> {
        console.log('Getting address: ', address);
        let geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode({
                'address': address
            }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error: ', results, ' & Status: ', status);
                    observer.error();
                }
            });
        });
    }
}
