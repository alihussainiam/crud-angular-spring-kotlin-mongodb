package com.flixmobility.server.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document


@Document(collection = "Agency")
data class Agency(@Id var id: String? = null,
                     var name: String?,
                     var country: String?,
                     var countryCode: String?,
                     var street: String?,
                     var city: String?,
                     var settlementCurrency: String?,
                     var contactPerson: String?)

