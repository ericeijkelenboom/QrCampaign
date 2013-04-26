using System.Collections.Generic;
using System.Data.Entity;
using Devtalk.EF.CodeFirst;
using QrCode.Models;

namespace QrCode.Persistence
{
    public class DatabaseContext : DbContext
    {
        private const string ConnectionStringName = "qr";

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Shop> Shops { get; set; }

        public DatabaseContext() : base(ConnectionStringName)
        {
            Database.SetInitializer(new DontDropDbJustCreateTablesIfModelChanged<DatabaseContext>());
            DatabaseSeeder.Seed(this);
        }
    }

    class DatabaseSeeder
    {
        public static void Seed(DatabaseContext context)
        {
            context.Shops.Add(new Shop
            {
                Name = "7 eleven",
                Campaigns = new List<Campaign>
                        {
                            CreateCampaign("Free coffee", 2),
                            CreateCampaign("Free dougnut", 5),
                        }
            });

            context.Shops.Add(new Shop
            {
                Name = "Noma",
                Campaigns = new List<Campaign>
                        {
                            CreateCampaign("All you can eat", 10),
                        }
            });

            context.SaveChanges();
        }

        private static Campaign CreateCampaign(string description, int numberOfPointsBeforeRedeem)
        {
            return new Campaign
            {
                Description = description,
                NumberOfPointsBeforeRedeem = numberOfPointsBeforeRedeem
            };
        }
    }
}