import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesListComponent } from './components/agency-list/agency-list.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { AddAgencyComponent } from './components/add-agency/add-agency.component';

const routes: Routes = [
  { path: '', redirectTo: 'agency', pathMatch: 'full' },
  { path: 'agency', component: AgenciesListComponent },
  { path: 'agency/:id', component: AgencyDetailsComponent },
  { path: 'add', component: AddAgencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }