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
    settlementCurrency: '',
    contactPerson:'',
    street:'',
  };
  submitted = false;

  constructor(private AgencyService: AgencyService) { }

  saveAgency(): void {
    const data = {
      name: this.Agency.name,
      country: this.Agency.country
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
      country: '',
      published: false
    };
  }

}