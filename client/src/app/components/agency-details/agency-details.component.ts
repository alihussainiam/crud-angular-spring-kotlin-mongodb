import { Component, Input, OnInit } from '@angular/core';
import { AgencyService } from 'src/app/services/agency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agency, toAgencyRequest } from 'src/app/models/agency.model';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAgency: Agency = new Agency()
  
  message = '';

  constructor(
    private AgencyService: AgencyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAgency(this.route.snapshot.params["id"]);
    }
  }

  getAgency(id: string): void {
    this.AgencyService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAgency = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateAgency(id: string): void {
    this.message = '';

    this.AgencyService.update(id,toAgencyRequest(this.currentAgency))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Agency was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAgency(): void {
    this.AgencyService.delete(this.currentAgency.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/agency']);
        },
        error: (e) => console.error(e)
      });
  }

}