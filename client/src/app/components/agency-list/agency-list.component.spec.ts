import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AgencyService } from 'src/app/services/agency.service';

import { AgenciesListComponent } from './agency-list.component';

describe('AgenciesListComponent', () => {
  let component: AgenciesListComponent;
  let fixture: ComponentFixture<AgenciesListComponent>;
  let agencyService : AgencyService;
  
  let agencyServiceSpyObject = {
    getAll: () => {},
    findByName: () => {},
  }
  beforeEach(async () => {

    agencyServiceSpyObject = jasmine.createSpyObj(AgencyService,['getAll','findByName'])

    await TestBed.configureTestingModule({
      providers:[
        {provide: AgencyService, useValue: agencyServiceSpyObject}
      ],
      declarations: [ AgenciesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesListComponent);
    component = fixture.componentInstance;
    agencyService = TestBed.inject(AgencyService)
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(agencyServiceSpyObject, 'getAll').and.returnValue(Observable.of([]))
    spyOn(agencyServiceSpyObject, 'findByName').and.returnValue({ subscribe: () => {} })
    expect(component).toBeTruthy();
  });
});
