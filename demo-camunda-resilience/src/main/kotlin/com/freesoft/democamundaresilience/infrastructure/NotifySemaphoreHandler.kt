package com.freesoft.democamundaresilience.infrastructure

import org.camunda.bpm.engine.delegate.DelegateExecution
import org.camunda.bpm.engine.delegate.JavaDelegate
import org.springframework.stereotype.Component
import java.util.concurrent.Semaphore

@Component
class NotifySemaphoreHandler : JavaDelegate {

    companion object {
        val semaphores = mutableMapOf<String, Semaphore>()
    }

    override fun execute(context: DelegateExecution?) {
        val processBusinessKey = context?.processBusinessKey
        val semaphore = semaphores[processBusinessKey]
        if (semaphore != null) {
            semaphore.release()
            semaphores.remove(processBusinessKey)
        }
    }
}