package com.freesoft.democamundaresilience.api.controllers

import com.freesoft.democamundaresilience.api.model.CreateChargeRequest
import com.freesoft.democamundaresilience.api.model.CreateChargeResponse
import com.netflix.hystrix.HystrixCommand
import com.netflix.hystrix.HystrixCommandGroupKey
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import java.util.*
import javax.servlet.http.HttpServletResponse

@RestController
data class PaymentRestControllerV2(val restTemplate: RestTemplate) {

    companion object {
        val stripeChargeUrl = "http://localhost:8099/charge"
    }

    @PutMapping(path = ["/api/payment/v2"])
    fun retrievePayment(retrievePaymentPayload: String, httpServletResponse: HttpServletResponse): String {
        val traceId = UUID.randomUUID().toString()
        val customerId = "0815"
        val amount = 15L

        chargeCreditCard(amount)
        return "{\"status\":\"completed\", \"traceId\": \"$traceId\"}";
    }

    fun chargeCreditCard(remainingAmount: Long): String {
        val createChargeRequest = CreateChargeRequest(remainingAmount)

        val response = object : HystrixCommand<CreateChargeResponse>(HystrixCommandGroupKey.Factory.asKey("stripe")) {
            override fun run(): CreateChargeResponse? =
                    restTemplate.postForObject(stripeChargeUrl, createChargeRequest, CreateChargeResponse::class.java)
        }.execute()

        return response.transactionId
    }
}