package com.flixmobility.server.repository

import com.flixmobility.server.models.Agency
import org.springframework.data.repository.CrudRepository

interface AgencyRepository: CrudRepository<Agency, String> {
}