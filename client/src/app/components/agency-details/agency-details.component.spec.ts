import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';

import { AgencyDetailsComponent } from './agency-details.component';
import { Agency } from 'src/app/models/agency.model';
import { AgenciesListComponent } from '../agency-list/agency-list.component';
import { Component, ViewChild } from '@angular/core';

const routeServiceStub = {
  snapshot : { 
      'params': []
  }
}
const routerServiceStub = {

};

const agencyServiceStub = {
  get(id :string){

  }
};


describe('AgencyDetailsComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: AgencyDetailsComponent;
  let fixture: ComponentFixture<AgencyDetailsComponent>;
  let agencyService: AgencyService;
  let router: Router
  let route: ActivatedRoute


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyDetailsComponent,TestHostComponent],
      providers: [
        { provide: AgencyService, useValue: agencyServiceStub },
        { provide: ActivatedRoute, useValue: routeServiceStub },
        { provide: Router, useValue: routerServiceStub }

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgencyDetailsComponent);
    component = fixture.componentInstance;
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostComponent.agencyDetailsComponent!.currentAgency = new Agency()

    component.currentAgency = new Agency()
    agencyService = TestBed.inject(AgencyService)
    router = TestBed.inject(Router) 
    route = TestBed.inject(ActivatedRoute)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  @Component({
    selector: `host-component`,
    template: `<app-agency-details [currentAgency]="currentAgency"></app-agency-details>`
  })
  class TestHostComponent {
    @ViewChild(AgencyDetailsComponent)
    public agencyDetailsComponent: AgencyDetailsComponent | undefined;
  }
});

