import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearcgPlacesComponent } from './searcg-places/searcg-places.component';
import { ViewDestinationsComponent } from './view-destinations/view-destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearcgPlacesComponent,
    ViewDestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
