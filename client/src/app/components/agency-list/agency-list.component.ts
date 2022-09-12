import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency.model';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agencys-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgenciesListComponent implements OnInit {

  agencies?: Agency[];
  currentAgency: Agency = {};
  currentIndex = -1;
  name = '';

  constructor(private AgencyService: AgencyService) { }

  ngOnInit(): void {
    this.retrieveAgencies();
  }

  retrieveAgencies(): void {
    this.AgencyService.getAll()
      .subscribe({
        next: (data) => {
          this.agencies = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAgencies();
    this.currentAgency = {};
    this.currentIndex = -1;
  }

  setActiveAgency(Agency: Agency, index: number): void {
    this.currentAgency = Agency;
    this.currentIndex = index;
  }


  searchName(): void {
    this.currentAgency = {};
    this.currentIndex = -1;

    this.AgencyService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.agencies = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}