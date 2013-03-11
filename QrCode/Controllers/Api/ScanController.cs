﻿using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using QrCode.Models;
using QrCode.Persistence;
using QrCode.ViewModels;
using System.Linq;

namespace QrCode.Controllers.Api
{
    public class ScanController : ApiController
    {
        private readonly DatabaseContext _context = new DatabaseContext();

        public HttpResponseMessage Post(Scan scan)
        {
            Subscription subscription;
            
            var customer = _context.Customers.Find(scan.CustomerId);
            var campaign = _context.Campaigns.Find(scan.CampaignId);

            if (campaign == null)
                return new HttpResponseMessage(HttpStatusCode.NotFound);

            if (customer == null)
            {
                // New customer
                subscription = CreateNewSubscription(campaign);
                customer = _context.Customers.Add(new Customer
                    {
                        Subscriptions = new List<Subscription> {subscription}
                    });
            }
            else
            {
                // Existing customer
                subscription = customer.Subscriptions.FirstOrDefault(s => s.Campaign.Id == scan.CampaignId);
                if (subscription != null)
                {
                    // Existing subscription
                    subscription.NumberOfPoints++;
                }
                else
                {
                    // New subscription
                    subscription = CreateNewSubscription(campaign);
                    customer.Subscriptions.Add(subscription);
                }
            }

            _context.SaveChanges();

            subscription.Campaign = null;
            subscription.Customer = null;

            return Request.CreateResponse(HttpStatusCode.Accepted, new
                {
                    CustomerId = customer.Id,
                    CampaignDescription = campaign.Description,
                    Subscription = subscription
                });
        }

        private static Subscription CreateNewSubscription(Campaign campaign)
        {
            return new Subscription
                {
                    Campaign = campaign,
                    NumberOfPoints = 1
                };
        }
    }
}