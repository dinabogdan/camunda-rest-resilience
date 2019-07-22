package com.freesoft.democamundaresilience.infrastructure.handlers

import com.freesoft.democamundaresilience.api.controllers.PaymentRestControllerV2
import com.freesoft.democamundaresilience.api.model.CreateChargeRequest
import com.freesoft.democamundaresilience.api.model.CreateChargeResponse
import com.netflix.hystrix.HystrixCommand
import com.netflix.hystrix.HystrixCommandGroupKey
import org.camunda.bpm.engine.delegate.DelegateExecution
import org.camunda.bpm.engine.delegate.JavaDelegate
import org.springframework.stereotype.Component
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.postForObject

@Component
class StripeHandlerV3(private val restTemplate: RestTemplate) : JavaDelegate {

    companion object {
        const val stripeChargeUrl = "http://localhost:8099/charge"
    }

    override fun execute(context: DelegateExecution?) {
        val amount = context?.getVariable("amount") as Long
        val request = CreateChargeRequest(amount)

        val response = object : HystrixCommand<CreateChargeResponse>(HystrixCommandGroupKey.Factory.asKey("stripe")) {
            override fun run(): CreateChargeResponse? =
                    restTemplate.postForObject(PaymentRestControllerV2.stripeChargeUrl, request, CreateChargeResponse::class.java)
        }.execute()

        context.setVariable("paymentTransactionId", response.transactionId)
    }
    
}