package com.demorepository

import com.demo.server.models.Agency
import org.springframework.data.repository.CrudRepository

interface AgencyRepository: CrudRepository<Agency, String> {
}