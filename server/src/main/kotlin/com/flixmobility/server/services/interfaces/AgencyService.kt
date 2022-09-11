package com.demo.server.services.interfaces

import com.demo.server.mappers.AgencyDto
import com.demo.server.payloads.requests.CreateAgencyRequest
import com.demo.server.payloads.requests.UpdateAgencyRequest

public interface AgencyService {
    fun findAgencies(): MutableIterable<AgencyDto>
    fun findAgency(id: String): AgencyDto
    fun createAgency(createAgencyRequest: CreateAgencyRequest): AgencyDto
    fun updateAgency(id:String, updateAgencyRequest: UpdateAgencyRequest): AgencyDto
    fun deleteAgency(id:String)
}