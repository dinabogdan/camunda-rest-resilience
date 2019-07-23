package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PaymentControllerV4Test extends Simulation {
  private val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  private val sc = scenario("ControllerSimulationV4")
    .exec(http("request4")
      .put("/api/payment/v4"))

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)
}
