package com.flixmobility.server.services.interfaces

import com.flixmobility.server.mappers.AgencyDto
import com.flixmobility.server.payloads.requests.CreateAgencyRequest
import com.flixmobility.server.payloads.requests.UpdateAgencyRequest

public interface AgencyService {
    fun findAgencies(): MutableIterable<AgencyDto>
    fun findAgency(id: String): AgencyDto
    fun createAgency(createAgencyRequest: CreateAgencyRequest): AgencyDto
    fun updateAgency(id:String, updateAgencyRequest: UpdateAgencyRequest): AgencyDto
    fun deleteAgency(id:String)
}