package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http


class PaymentControllerV3Test extends Simulation {

  private val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  private val sc = scenario("ControllerSimulationV3")
    .exec(http("request3")
      .put("/api/payment/v3"))

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)

}
