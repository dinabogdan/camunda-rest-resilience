using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using stripe_fake_service.Models;

namespace stripe_fake_service.Controllers
{
    public class StripeFakeController : ControllerBase
    {
        public static bool slow = false;
        public static Random random = new Random();

        [HttpPost]
        [Route("/charge")]
        public IActionResult RetrievePayment([FromBody]CreateChargeRequest request)
        {
            CreateChargeResponse response = new CreateChargeResponse();

            int waitTimeMillis = 0;
            if (slow)
            {
                waitTimeMillis = random.Next(0, 60) * 1000;
            }

            if (random.NextDouble() > 0.8d)
            {
                response.errorCode = "Credit card expired";
            }

            Console.WriteLine("Charge on credit card will take " + waitTimeMillis / 1000 + " seconds");
            Thread.Sleep(waitTimeMillis);
            response.transactionId = Guid.NewGuid().ToString();
            return Ok(response);
        }

    }
}