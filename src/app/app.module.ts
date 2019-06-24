import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { MapviewComponent } from './mapview/mapview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZWloOiDw1cwvDKK3LVtegg_7lKd_UHLM'
    })
  ],
  providers: [],
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
