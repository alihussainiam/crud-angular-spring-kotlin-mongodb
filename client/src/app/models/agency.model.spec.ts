import { Agency } from './agency.model';

describe('Agency', () => {
  it('should create an instance', () => {
    expect(new Agency()).toBeTruthy();
  });

  // it('should create and initiliaize to empty string', () => {

  //   let agency : Agency = {
  //     name: '',
  //     city:'',
  //     countryCode: '',
  //     country: '',
  //     settlementCurrency: '',
  //     contactPerson:'',
  //     street:'',
  //   }
  //   expect(new Agency()).toEqual(typeof(Agency.name))
  // });

});
