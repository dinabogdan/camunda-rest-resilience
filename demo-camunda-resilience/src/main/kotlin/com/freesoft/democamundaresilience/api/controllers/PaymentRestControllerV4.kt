package com.freesoft.democamundaresilience.api.controllers

import com.freesoft.democamundaresilience.infrastructure.NotifySemaphoreHandler
import org.camunda.bpm.engine.ProcessEngine
import org.camunda.bpm.engine.variable.Variables
import org.camunda.bpm.model.bpmn.Bpmn
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*
import java.util.concurrent.TimeUnit
import javax.annotation.PostConstruct
import javax.servlet.http.HttpServletResponse

@RestController
class PaymentRestControllerV4(private val camunda: ProcessEngine) {

    @PostConstruct
    fun createFlowDefinition() {
        val flow = Bpmn.createExecutableProcess("paymentV4_first_synchronous_response")
                .startEvent()
                .serviceTask("stripe").camundaDelegateExpression("#{stripeHandlerV4}")
                .camundaAsyncBefore().camundaFailedJobRetryTimeCycle("R3/PT10S")
                .endEvent().camundaExecutionListenerClass("start", NotifySemaphoreHandler::class.java)
                .done()

        camunda.repositoryService.createDeployment()
                .addModelInstance("payment.bpmn", flow)
                .deploy()
    }

    @PutMapping(path = ["/api/payment/v4"])
    fun retrievePayment(response: HttpServletResponse): String {
        val traceId = UUID.randomUUID().toString()
        val amount = 15L

        val semaphore = NotifySemaphoreHandler.aNewSemaphore(traceId)

        chargeCreditCard(traceId, amount)

        val isFinished = semaphore.tryAcquire(500, TimeUnit.MILLISECONDS)
        NotifySemaphoreHandler.removeSemaphore(traceId)

        if (isFinished) {
            return "{\"status\":\"completed\", \"traceId\": \"$traceId\"}"
        } else {
            response.status = HttpServletResponse.SC_ACCEPTED
            return "{\"status\":\"pending\", \"traceId\": \"$traceId\"}"
        }
    }

    private fun chargeCreditCard(traceId: String, amount: Long) {
        camunda.runtimeService
                .startProcessInstanceByKey("paymentV4_first_synchronous_response",
                        traceId,
                        Variables.putValue("amount", amount))
    }
}