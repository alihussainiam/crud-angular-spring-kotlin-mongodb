package com.demo.server.services;

import com.demo.server.exceptions.NotFoundException
import com.demo.server.mappers.AgencyDto
import com.demo.server.mappers.AgencyMapper
import com.demo.server.models.Agency;
import com.demo.server.payloads.requests.CreateAgencyRequest
import com.demo.server.payloads.requests.UpdateAgencyRequest
import com.demo.server.repository.AgencyRepository
import com.demo.server.services.interfaces.AgencyService


import org.springframework.stereotype.Service;

@Service
class AgencyServiceImpl (val agencyRepository: AgencyRepository) : AgencyService {

   override fun findAgencies(): MutableList<AgencyDto> {
      var agencyList = agencyRepository.findAll().map {
         AgencyMapper().agencyToDto(it)
      }
      return agencyList.toMutableList()
   }

   override fun findAgency(id: String):AgencyDto {
      val agency = agencyRepository.findById(id).orElse(null)
      if (agency==null) throw NotFoundException("Agency with ${id} not found")
      return AgencyMapper().agencyToDto(agency)
   }

   override fun createAgency(createAgencyRequest: CreateAgencyRequest) :AgencyDto {
      return createAgencyRequest.let {
         AgencyMapper().agencyRequestToModel(it)
      }.let {
         agencyRepository.save(it)
      }.let {
         AgencyMapper().agencyToDto(it)
      }
   }
   override fun updateAgency(id:String, updateAgencyRequest: UpdateAgencyRequest): AgencyDto {
      var oldAgency = agencyRepository.findById(id).orElse(null)
      if (oldAgency==null) throw NotFoundException("Agency with ${id} not found")
      oldAgency.name = updateAgencyRequest.name
      oldAgency.city = updateAgencyRequest.city
      oldAgency.country = updateAgencyRequest.country
      oldAgency.countryCode = updateAgencyRequest.countryCode
      oldAgency.street = updateAgencyRequest.street
      oldAgency.settlementCurrency = updateAgencyRequest.settlementCurrency
      oldAgency.contactPerson = updateAgencyRequest.contactPerson
      agencyRepository.save(oldAgency)
      return AgencyMapper().agencyToDto(oldAgency)
   }
   override fun deleteAgency(id:String){
      var agency = agencyRepository.findById(id).orElse(null)
      if (agency==null) throw NotFoundException("Agency with ${id} not found")
      agencyRepository.deleteById(id)
   }

}
