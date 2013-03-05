using System.Linq;
using System.Web.Http;
using Breeze.WebApi;
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
            return _contextProvider.Context.Subscriptions;
        }

        // ~/api/subscriptions/metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }
    }
}