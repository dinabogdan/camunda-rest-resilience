package com.freesoft.democamundaresilience.infrastructure.worker

import org.camunda.bpm.client.ExternalTaskClient
import org.camunda.bpm.client.task.ExternalTaskHandler
import java.util.*

/**
 * Worker used for completing external task "Deduct existing customer credit" used in </br>
 * PaymentV5, PaymentV6 & PaymentV7
 */

fun main(args: Array<String>) {
    val client = ExternalTaskClient.create()
            .baseUrl("http://localhost:8100/rest/engine/default")
            .asyncResponseTimeout(5000)
            .build()

    client.subscribe("customer-credit")
            .lockDuration(5000)
            .handler { externalTask, externalTaskService ->
                val amount = externalTask.getVariable("amount") as Long
                externalTaskService.complete(externalTask, mapOf(Pair("remainingAmount", 15L)))
                println("deducted $amount from customer credit")
            }.open()

    client.subscribe("customer-credit-refund")
            .lockDuration(5000)
            .handler { externalTask, externalTaskService ->
                externalTaskService.complete(externalTask)
                println("refunded to customer credit")
            }.open()
}