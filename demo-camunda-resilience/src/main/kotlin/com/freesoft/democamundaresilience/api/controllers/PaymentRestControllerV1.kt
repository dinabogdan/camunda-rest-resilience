package com.freesoft.democamundaresilience.api.controllers

import com.freesoft.democamundaresilience.api.model.CreateChargeRequest
import com.freesoft.democamundaresilience.api.model.CreateChargeResponse
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.postForObject
import java.util.*
import javax.servlet.http.HttpServletResponse

/**
 * First version: A simple REST Service Call
 */

@RestController
class PaymentRestControllerV1(private val restTemplate: RestTemplate){

    companion object {
        val stripeChargeUrl = "http://localhost:8099/charge"
    }

    @PutMapping(path = ["/api/payment/v1"])
    fun retrievePayment(retrievePaymentPayload: String, response: HttpServletResponse): String {
        val traceId = UUID.randomUUID().toString()
        val customerId = "0815"
        val amount = 15L

        chargeCreditCard(amount)
        return "{\"status\":\"completed\", \"traceId\": \"$traceId\"}"
    }

    fun chargeCreditCard(remainingAmount: Long): String? {
        val request = CreateChargeRequest(remainingAmount)
        val createChargeResponse = restTemplate.postForObject(stripeChargeUrl, request, CreateChargeResponse::class.java)
        return createChargeResponse?.transactionId
    }
}