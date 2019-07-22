package com.freesoft.democamundaresilience.api.controllers

import org.camunda.bpm.engine.ProcessEngine
import org.camunda.bpm.engine.variable.Variables
import org.camunda.bpm.model.bpmn.Bpmn
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.annotation.PostConstruct
import javax.servlet.http.HttpServletResponse

@RestController
class PaymentRestControllerV3(private val camunda: ProcessEngine) {

    @PostConstruct
    fun createFlowDefinition() {
        val flow = Bpmn.createExecutableProcess("paymentV3_Stateful_Retry")
                .startEvent()
                .serviceTask("stripe").camundaDelegateExpression("#{stripeHandler}")
                .camundaAsyncBefore().camundaFailedJobRetryTimeCycle("R3/PT2S")
                .endEvent()
                .done()
        camunda.repositoryService
                .createDeployment()
                .addModelInstance("payment.bpmn", flow)
                .deploy()
    }

    @PutMapping(path = ["/api/payment/v3"])
    fun retrievePayment(response: HttpServletResponse): String {
        val traceId = UUID.randomUUID().toString()
        val amount = 15L
        chargeCreditCard(amount)
        response.status = HttpServletResponse.SC_ACCEPTED
        return "{\"status\":\"pending\", \"traceId\": \"$traceId\"}"
    }

    private fun chargeCreditCard(amount: Long) {
        camunda.runtimeService
                .startProcessInstanceByKey("paymentV3_Stateful_Retry", Variables.putValue("amount", amount))
    }
}