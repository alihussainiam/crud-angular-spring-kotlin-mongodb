package com.demo.server.models

import com.demo.server.repository.AgencyRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest


@DataMongoTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class AgencyTest {

    @Autowired
    lateinit var agencyRepository: AgencyRepository

    @BeforeAll
    fun  setupTestDatabase() {
        agencyRepository.save(TEST_AGENCY_1)
        agencyRepository.save(TEST_AGENCY_2)
    }

    companion object {
        val TEST_AGENCY_1 = Agency(name="Le Chamois",country="France", countryCode = "FRA", city = "Paris", street="Rue Bonaparte 7", settlementCurrency = "EUR", contactPerson = "Madame Beaufort")
        val TEST_AGENCY_2 = Agency(name="The corner",country="United Kingdom", countryCode = "GBR", city = "London", street="Batty Street E1", settlementCurrency = "GBP", contactPerson = "Mister Buttercup")

    }

    @Test
     fun shouldBeNotEmpty() {
        assertThat(agencyRepository.findAll()).isNotEmpty

    }


    @AfterAll
    fun tearDown(){
        agencyRepository.deleteAll()
    }

}
