package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Configuration {
  val baseUrl = "http://localhost:8100"
}

class PaymentControllerTest extends Simulation {

  val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  val sc = scenario("ControllerSimulation")
    .exec(http("request1")
      .put("/api/payment/v1"))

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)
}
