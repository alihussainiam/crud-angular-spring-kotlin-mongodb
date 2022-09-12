import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from 'src/app/services/agency.service';

import { AgencyDetailsComponent } from './agency-details.component';

describe('AgencyDetailsComponent', () => {
  let component: AgencyDetailsComponent;
  let fixture: ComponentFixture<AgencyDetailsComponent>;
  let agencyService : AgencyService;
  let agencyServiceSpyObject: {getAll:jasmine.Spy,findByName:jasmine.Spy}
  let routeSpyObject: {snapshot: {params:{id: jasmine.Spy}}}
  let routerSpyObject: {}
  let router : Router
  let route :ActivatedRoute

  

  beforeEach(async () => {
    routeSpyObject = jasmine.createSpyObj(ActivatedRoute,['snapshot.id'])
    agencyServiceSpyObject = jasmine.createSpyObj(AgencyService,['getAll','findByName'])
    await TestBed.configureTestingModule({
      declarations: [ AgencyDetailsComponent ],
      providers:[
        {provide: AgencyService, useValue: agencyServiceSpyObject},
        {provide: ActivatedRoute, useValue: routeSpyObject},
        {provide: Router, useValue: routerSpyObject}
    
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDetailsComponent);
    component = fixture.componentInstance;
    agencyService = TestBed.inject(AgencyService)
    router = TestBed.inject(Router)
    route = TestBed.inject(ActivatedRoute)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
