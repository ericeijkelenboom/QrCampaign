using System.Linq;
using System.Web.Http;
using Breeze.WebApi;
using Newtonsoft.Json.Linq;
using QrCode.Models;
using QrCode.Persistence;

namespace QrCode.Controllers.Api
{
    [BreezeController]
    public class SubscriptionsController : ApiController
    {
        private readonly EFContextProvider<DatabaseContext> _contextProvider = new EFContextProvider<DatabaseContext>();

        // ~/api/subscriptions/subscriptions
        [HttpGet]
        public IQueryable<Subscription> Subscriptions()
        {
            return _contextProvider.Context.Subscriptions.Include("Campaign");
        }

        // ~/api/subscriptions/subscriptions
        [HttpGet]
        public IQueryable<Campaign> Campaigns()
        {
            return _contextProvider.Context.Campaigns;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            // TODO: a custom EFContextProvider and save Interception
            return _contextProvider.SaveChanges(saveBundle);
        }

        // ~/api/subscriptions/metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }
    }
}