import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Agency } from 'src/app/models/agency.model';

import { AgencyService } from 'src/app/services/agency.service';

import { AgenciesListComponent } from './agency-list.component';


const agencyServiceStub = {
  getAll() {
    const agency = [new Agency()];
    return of( agency );
  }
};


describe('AgenciesListComponent', () => {
  let component: AgenciesListComponent;
  let fixture: ComponentFixture<AgenciesListComponent>;
  let agencyService : AgencyService;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      providers:[
        {provide: AgencyService, useValue: agencyServiceStub}
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
    expect(component).toBeTruthy();
  });
});
