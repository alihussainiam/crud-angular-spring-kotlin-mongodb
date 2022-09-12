import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyService } from 'src/app/services/agency.service';
import { FormsModule } from '@angular/forms';

import { AddAgencyComponent } from './add-agency.component';

const agencyServiceStub = {
  create(id :any){

  }
};


describe('AddAgencyComponent', () => {
  let component: AddAgencyComponent;
  let fixture: ComponentFixture<AddAgencyComponent>;
  let agencyService: AgencyService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AddAgencyComponent ],
     providers: [
        { provide: AgencyService, useValue: agencyServiceStub },
    
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
