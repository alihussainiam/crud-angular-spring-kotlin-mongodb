import { Component } from '@angular/core';
import { Agency, toAgencyRequest } from 'src/app/models/agency.model';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent {

  Agency: Agency = new Agency()
  
  submitted = false;

  constructor(private AgencyService: AgencyService) { }

  saveAgency(): void {
    

    this.AgencyService.create(toAgencyRequest(this.Agency))
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
    this.Agency = new Agency()
  }

}