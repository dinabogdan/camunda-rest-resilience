package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http


class PaymentControllerV2Test extends Simulation {

  private val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  private val sc = scenario("ControllerSimulationV2")
    .exec(http("request2")
      .put("/api/payment/v2"))

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)
}
