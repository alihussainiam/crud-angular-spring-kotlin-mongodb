export class Agency {
  id?: string;
  name?: string;
  country?: string;
  city?: string;
  contactPerson?: string;
  countryCode?: string;
  street?: string;
  settlementCurrency?: string;
}



  export function toAgencyRequest(agent: Agency) {
   return  {
      agency_name: agent.name,
      agency_country: agent.country,
      agency_country_code: agent.countryCode,
      agency_city: agent.city,
      agency_street: agent.street,
      agency_settlement_currency: agent.settlementCurrency,
      agency_contact_person: agent.contactPerson
    };

  }

