import { Component } from '@angular/core';
import { Agency } from 'src/app/models/agency.model';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent {

  Agency: Agency ={
    name: '',
    countryCode: '',
    country: '',
    city: '',
    settlementCurrency: '',
    contactPerson:'',
    street:'',
  };
  submitted = false;

  constructor(private AgencyService: AgencyService) { }

  saveAgency(): void {
    const data = {
      agency_name: this.Agency.name,
      agency_country: this.Agency.country,
      agency_country_code:this.Agency.countryCode,
      agency_city:this.Agency.city,
      agency_street:this.Agency.street,
      agency_settlement_currency:this.Agency.settlementCurrency,
      agency_contact_person:this.Agency.contactPerson
    };

    this.AgencyService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAgency(): void {
    this.submitted = false;
    this.Agency = {
      name: '',
      countryCode: '',
      country: '',
      settlementCurrency: '',
      contactPerson:'',
      street:'',
    };
  }

}