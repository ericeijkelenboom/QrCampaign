using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GoogleQRGenerator;
using QrCode.Areas.Admin.Models;
using QrCode.Models;
using QrCode.Persistence;

namespace QrCode.Areas.Admin.Controllers
{
    public class QrCodeController : Controller
    {
        private DatabaseContext _databaseContext;

        public QrCodeController()
        {
            _databaseContext = new DatabaseContext();
        }

        public ActionResult Index()
        {
            return View(new GenerateQrCodeViewModel
            {
                AvailableCampaigns = _databaseContext.Shops.SelectMany(s => s.Campaigns)
            });
        }

        public ActionResult Generate(GenerateQrCodeViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                // Basic sanity checks
                int numberOfCodes = viewModel.NumberOfQrCodesToGenerate > 100 ? 100 : viewModel.NumberOfQrCodesToGenerate;
                int size = viewModel.QrCodeSize > 200 ? 200 : viewModel.QrCodeSize;

                // Store new QR codes on the selected campaign
                var qrCodes = new List<Qr>();
                for (int i = 0; i < numberOfCodes; i++)
                {
                    Campaign campaign = _databaseContext.Campaigns.Find(viewModel.SelectedCampaignId);

                    if (campaign != null)
                    {
                        var qr = new Qr {NumberOfPoints = 1};

                        qrCodes.Add(qr);
                        campaign.QrCodes.Add(qr);
                    }

                    _databaseContext.SaveChanges();
                }

                // Return list of QR code urls
                return PartialView("QrCode/_Generate",
                                   qrCodes.Select(qr => CreateScannableQrCode(viewModel.SelectedCampaignId, qr.Id, size))
                                          .ToList());

            }

            return null;
        }

        private ScannableQrCode CreateScannableQrCode(int campaignId, int qrCodeId, int size)
        {
            // Create URL to the scanning page
            var scanUrl = Url.Action("Index", "Home", new {area=""}, "http");
            scanUrl += string.Format("#scan/{0}/{1}", campaignId, qrCodeId);

            // Create scannable QR code
            return new ScannableQrCode
                       {
                           Qr = new GoogleQr(HttpUtility.UrlEncode(scanUrl), string.Format("{0}x{0}", size), true),
                           DirectUrl = scanUrl
                       };
        }

    }
}
