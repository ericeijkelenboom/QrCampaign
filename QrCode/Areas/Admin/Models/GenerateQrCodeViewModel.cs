using System;
using System.Collections.Generic;
using QrCode.Models;

namespace QrCode.Areas.Admin.Models
{
    public class GenerateQrCodeViewModel
    {
        public GenerateQrCodeViewModel()
        {
            NumberOfQrCodesToGenerate = 1;
            QrCodeSize = 200;
        }

        public IEnumerable<Campaign> AvailableCampaigns { get; set; }
        public int NumberOfQrCodesToGenerate { get; set; }
        public int QrCodeSize { get; set; }
        public int SelectedCampaignId { get; set; }
    }
}