package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Counter {
  var ok = 0
  var accepted = 0
}

class PaymentControllerV4Test extends Simulation {
  private val httpConf = http.baseUrl(Configuration.baseUrl)
    .acceptHeader("application/json")

  private val sc = scenario("ControllerSimulationV4")
    .exec(http("request4")
      .put("/api/payment/v4"))

  after {
    println("200 OK: " + Counter.ok)
    println("202 Accepted: " + Counter.accepted)
  }

  setUp(
    sc.inject(atOnceUsers(10000))
  ).protocols(httpConf)
}
