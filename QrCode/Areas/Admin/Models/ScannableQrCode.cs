using GoogleQRGenerator;

namespace QrCode.Areas.Admin.Models
{
    public class ScannableQrCode
    {
        public GoogleQr Qr { get; set; }
        public string DirectUrl { get; set; }
    }
}