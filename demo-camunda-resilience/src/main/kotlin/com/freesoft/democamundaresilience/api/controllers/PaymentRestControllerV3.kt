package com.freesoft.democamundaresilience.api.controllers

import org.camunda.bpm.engine.ProcessEngine
import org.camunda.bpm.model.bpmn.Bpmn
import org.camunda.bpm.model.bpmn.BpmnModelInstance
import org.springframework.web.bind.annotation.RestController
import javax.annotation.PostConstruct

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


}