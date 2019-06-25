import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { MapviewComponent } from './mapview/mapview.component';
import { AddnewplaceComponent } from './addnewplace/addnewplace.component';
import { UpdateplaceComponent } from './updateplace/updateplace.component';

import { MapsService } from './services/mapsservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapviewComponent,
    AddnewplaceComponent,
    UpdateplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZWloOiDw1cwvDKK3LVtegg_7lKd_UHLM',
      libraries: ['places']
    })
  ],
  providers: [MapsService],
  bootstrap: [AppComponent],
  exports:[
    MapviewComponent,
    HeaderComponent
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
