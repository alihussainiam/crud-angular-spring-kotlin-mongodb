package com.flixmobility.server.payloads.requests

import com.fasterxml.jackson.annotation.JsonProperty

data class CreateAgencyRequest (

            @JsonProperty("agency_name")
            val name:String="",


            @JsonProperty("agency_country")
            var country:String="",

            @JsonProperty("agency_country_code")
            var countryCode:String="",

            @JsonProperty("agency_city")
            var city:String="",

            @JsonProperty("agency_street")
            var street:String="",

            @JsonProperty("agency_settlement_currency")
            var settlementCurrency:String="",

            @JsonProperty("agency_contact_person")
            var contactPerson:String=""

)