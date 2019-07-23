package com.freesoft.democamundaresilience.api.controllers

import com.freesoft.democamundaresilience.infrastructure.NotifySemaphoreHandler
import org.camunda.bpm.engine.ProcessEngine
import org.camunda.bpm.engine.variable.Variables
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*
import java.util.concurrent.TimeUnit
import javax.servlet.http.HttpServletResponse

/**
 * Fifth version: Use Camunda state machine for long-running retry, external task & compensation
 */

@RestController
class PaymentRestControllerV5(private val camunda: ProcessEngine) {

    @PutMapping(path = ["/api/payment/v5"])
    fun retrievePayment(response: HttpServletResponse): String {
        val traceId = UUID.randomUUID().toString()
        val amount = 15L

        val semaphore = NotifySemaphoreHandler.aNewSemaphore(traceId)
        val processInstance = aPaymentProcess(traceId, amount)

        val isFinished = semaphore.tryAcquire(500, TimeUnit.MILLISECONDS)

        NotifySemaphoreHandler.removeSemaphore(traceId)

        return if (isFinished) {
            val historicVariableInstance = camunda.historyService
                    .createHistoricVariableInstanceQuery()
                    .processInstanceId(processInstance.id)
                    .variableName("paymentTransactionId")
                    .singleResult()
            if (historicVariableInstance != null) {
                val paymentTransactionId = historicVariableInstance.value as String
                "{\"status\":\"completed\", \"traceId\": \"$traceId\", \"paymentTransactionId\": \"$paymentTransactionId\"}"
            } else {
                "{\"status\":\"completed\", \"traceId\": \"$traceId\", \"payedByCredit\": \"true\"}"
            }
        } else {
            response.status = HttpServletResponse.SC_ACCEPTED
            "{\"status\":\"pending\", \"traceId\": \"$traceId\"}"
        }
    }

    fun aPaymentProcess(traceId: String, amount: Long) =
            camunda.runtimeService
                    .startProcessInstanceByKey("paymentV5",
                            traceId,
                            Variables.putValue("amount", amount))
}