package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http

class PaymentControllerV5Test extends Simulation {

  private val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  private val sc = scenario("ControllerSimulationV5")
    .exec(http("request5")
      .put("/api/payment/v5"))

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)
}
