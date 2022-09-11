package com.demo.server.controllers



import org.springframework.http.ResponseEntity
import com.demo.server.constant.RoutesConstant.AGENCY_ROUTES
import com.demo.server.constant.RoutesConstant.API_VERSION
import com.demo.server.exceptions.NotFoundException
import com.demo.server.payloads.requests.CreateAgencyRequest
import com.demo.server.payloads.requests.UpdateAgencyRequest
import com.demo.server.services.AgencyServiceImpl

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*




@RestController
@RequestMapping("${API_VERSION}${AGENCY_ROUTES}")
class AgencyController(private val service: AgencyServiceImpl) {


    @Operation(summary = "Get list of Agencies")
    @ApiResponse(responseCode = "201", description = "List of Agencies")
    @GetMapping("/")
    fun getAgencies():ResponseEntity<*>? {

        return try {
            ResponseEntity.ok(service.findAgencies())
        } catch (ex: RuntimeException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.message)
        }
    }

    @GetMapping("/{id}")
    fun getAgency(@PathVariable id:String):ResponseEntity<*>? {

        return try {
            return ResponseEntity.ok(service.findAgency(id))
        } catch (ex: NotFoundException) {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.message)
        }catch (ex: RuntimeException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("")
        }
    }
    @PostMapping("/")
    fun createAgency(@RequestBody createAgencyRequest: CreateAgencyRequest):ResponseEntity<*>? {

        return try {
            return ResponseEntity.ok(service.createAgency(createAgencyRequest))
        } catch (ex: RuntimeException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("")
        }
    }

    @PutMapping("/{id}")
    fun updateAgency(@PathVariable id:String,@RequestBody updateAgencyRequest: UpdateAgencyRequest):ResponseEntity<*>?{
        return try {
            return ResponseEntity.ok(service.updateAgency(id,updateAgencyRequest))
        } catch (ex: NotFoundException) {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.message)
        }catch (ex: RuntimeException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("")
        }
    }

    @DeleteMapping("/{id}")
    fun deleteAgency(@PathVariable id:String):ResponseEntity<*>?{
        return try {
            return ResponseEntity.ok(service.deleteAgency(id))
        } catch (ex: NotFoundException) {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.message)
        }catch (ex: RuntimeException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("")
        }
    }

}