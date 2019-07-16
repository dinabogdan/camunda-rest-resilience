using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System.Threading;
using stripe_fake_service.Controllers;

namespace stripe_fake_service
{
    class Program
    {
        static void Main(string[] args)
        {
            new Thread(() =>
            {
                Console.WriteLine("Service is running...");

                bool running = true;

                while (running)
                {
                    Console.WriteLine("[S]low, [N]ormal, E[X]it: ");
                    char mode = Char.ToUpper(Console.ReadKey().KeyChar);

                    switch (mode)
                    {
                        case 'S':
                            {
                                StripeFakeController.slow = true;
                                Console.WriteLine("Service is now slow");
                                break;
                            }
                        case 'N':
                            {
                                StripeFakeController.slow = false;
                                Console.WriteLine("Service is now back to normlal");
                                break;
                            }
                        case 'X':
                            {
                                running = false;
                                break;
                            }
                        default:
                            {
                                StripeFakeController.slow = false;
                                Console.WriteLine("Service is now slow");
                                break;
                            }
                    }
                }
            }).Start();

            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .UseUrls("http://localhost:8099")
            .Build();
    }
}
