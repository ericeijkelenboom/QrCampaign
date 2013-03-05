using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QrCode.Models
{
    public class Campaign
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Display(Name = "Name")]
        public string Description { get; set; }

        [Display(Name = "Points for redeem")]
        public int NumberOfPointsBeforeRedeem { get; set; }
      
        public virtual ICollection<Qr> QrCodes { get; set; }

        [Display(Name = "Expiry date")]
        public DateTime? ExpiredDate { get; set; }

        public List<Subscription> Subscriptions { get; set; }
    }
}