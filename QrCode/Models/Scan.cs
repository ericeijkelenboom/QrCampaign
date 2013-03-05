using System;

namespace QrCode.Models
{
    public class Scan
    {
        public int CampaignId { get; set; }
        public int QrCodeId { get; set; }
        public int CustomerId { get; set; } 
    }
}