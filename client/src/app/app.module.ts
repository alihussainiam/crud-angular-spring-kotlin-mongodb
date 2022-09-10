import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAgencyComponent } from './components/add-agency/add-agency.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { AgenciesListComponent } from './components/agency-list/agency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAgencyComponent,
    AgencyDetailsComponent,
    AgenciesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
