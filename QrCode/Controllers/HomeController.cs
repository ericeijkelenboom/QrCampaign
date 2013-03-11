using System.Web.Mvc;

namespace QrCode.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Scan(int campaignId, int qrCodeId)
        {
            
            return new RedirectResult("/#scan");
        }

    }
}
