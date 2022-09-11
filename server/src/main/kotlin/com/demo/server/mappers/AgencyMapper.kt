package com.demo.server.mappers

import com.demo.server.models.Agency
import com.demo.server.payloads.requests.CreateAgencyRequest

class AgencyMapper {

        fun agencyRequestToModel(createAgencyRequest: CreateAgencyRequest): Agency {
            return Agency(
                    name = createAgencyRequest.name,
                    city = createAgencyRequest.city,
                    country = createAgencyRequest.country,
                    contactPerson = createAgencyRequest.contactPerson,
                    settlementCurrency = createAgencyRequest.settlementCurrency,
                    countryCode = createAgencyRequest.countryCode,
                    street = createAgencyRequest.street
            )
        }


        fun agencyToDto(agency: Agency): AgencyDto {
            return AgencyDto(agency.id, agency.city, agency.country,agency.countryCode,agency.name,agency.contactPerson,agency.settlementCurrency,agency.street)
        }
    }

data class AgencyDto(var id: String?, var city: String?, var country: String?, var countryCode: String?, var name: String?, var contactPerson: String?, var settlementCurrency: String?, var street: String?)

