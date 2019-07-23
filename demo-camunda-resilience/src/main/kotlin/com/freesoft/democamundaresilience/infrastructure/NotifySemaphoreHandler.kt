package com.freesoft.democamundaresilience.infrastructure

import org.camunda.bpm.engine.delegate.DelegateExecution
import org.camunda.bpm.engine.delegate.JavaDelegate
import org.springframework.stereotype.Component
import java.util.concurrent.Semaphore

@Component
class NotifySemaphoreHandler : JavaDelegate {

    companion object {
        fun aNewSemaphore(traceId: String): Semaphore {
            val semaphore = Semaphore(0)
            semaphores.put(traceId, semaphore)
            return semaphore
        }

        fun removeSemaphore(traceId: String) {
            semaphores.remove(traceId)
        }

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