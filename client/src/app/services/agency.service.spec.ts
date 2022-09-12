import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { AgencyService } from './agency.service';
import { HttpClient } from '@angular/common/http';

import { Agency, toAgencyRequest } from '../models/agency.model';
import { pairs } from 'rxjs';

describe('AgencyService', () => {
  let service: AgencyService;
  let http : HttpClient;
  let httpController : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AgencyService]
    });
    service = TestBed.inject(AgencyService);
    http = TestBed.inject (HttpClient);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('create agency', () => {
    const requestData = new Agency()
    requestData.city = "Paris"
    requestData.name = "Breakdown"
    requestData.country = "France"
    requestData.contactPerson = "Ali"
    requestData.settlementCurrency = "EUR"
    requestData.street = "Kastanienweg"

    service.create(toAgencyRequest(requestData))
    .subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (e) => console.error(e)
    });
    expect(service).toBeTruthy();
  });
});
