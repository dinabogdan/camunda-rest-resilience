package com.freesoft.democamundaresilience.api.controllers

import com.freesoft.democamundaresilience.infrastructure.NotifySemaphoreHandler
import org.camunda.bpm.engine.ProcessEngine
import org.camunda.bpm.model.bpmn.Bpmn
import org.springframework.web.bind.annotation.RestController
import javax.annotation.PostConstruct

@RestController
class PaymentRestControllerV4(private val camunda: ProcessEngine) {

    @PostConstruct
    fun createFlowDefinition() {
        Bpmn.createExecutableProcess("paymentV4_first_synchronous_response")
                .startEvent()
                .serviceTask("stripe").camundaDelegateExpression("#{stripeHandlerV4}")
                .camundaAsyncBefore().camundaFailedJobRetryTimeCycle("R3/PT10S")
                .endEvent().camundaExecutionListenerClass("start", NotifySemaphoreHandler::class.java)
                .done()
    }
}