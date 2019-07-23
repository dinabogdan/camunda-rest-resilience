package com.freesoft.democamundaresilience.infrastructure.handlers

import com.freesoft.democamundaresilience.api.model.CreateChargeRequest
import com.freesoft.democamundaresilience.api.model.CreateChargeResponse
import org.camunda.bpm.engine.delegate.BpmnError
import org.camunda.bpm.engine.delegate.DelegateExecution
import org.camunda.bpm.engine.delegate.JavaDelegate
import org.springframework.stereotype.Component
import org.springframework.web.client.RestTemplate

@Component
class ChargeCreditCardHandler(private val restTemplate: RestTemplate) : JavaDelegate {

    companion object {
        const val stripeChargeUrl = "http://localhost:8099/charge"
    }

    override fun execute(context: DelegateExecution?) {
        val amount = context?.getVariable("remainingAmount") as Long
        val request = CreateChargeRequest(amount)
        val response = restTemplate.postForObject(
                stripeChargeUrl,
                request,
                CreateChargeResponse::class.java
        )
        println(response?.errorCode)
        if (response?.errorCode != null && response.errorCode.isNotEmpty()) {
            context.setVariable("creditCardErrorCode", response.errorCode)
            throw BpmnError("Error_CreditCardError")
        }

        context.setVariable("paymentTransactionId", response?.transactionId)
    }
}
