define(['services/logger'],
    function (logger) {
        var datacontext = {
            init: init,
            getSubscriptions: getSubscriptions,
            getSubscriptionDetails: getSubscriptionDetails,
            scan: scan
        };

        var entityQuery = breeze.EntityQuery;
        var manager = configureBreezeManager();
     
        return datacontext;
     
        function init() {
            return manager.fetchMetadata();
        }

        function scan(customerId, campaignId, qrCodeId) {
            var data = {
                'CampaignId': campaignId,
                'QrCodeId': qrCodeId,
                'CustomerId': customerId
            };

            return $.post('/api/scan', data)
                .fail(queryFailed);
        }

        function getSubscriptions(customerId, subscriptions, forceRemote) {
            if (!forceRemote) {
                var s = getLocal('Subscriptions', 'campaign.description');
                // Check if length > 1, because if we enter the app on a details page, the subscription list contains 1 item
                if (s && s.length > 1) {
                    subscriptions(s);
                    return Q.resolve();
                }
            }

            var query = entityQuery.from("Subscriptions")
                .where("customer.id", "==", customerId)
                .orderBy('campaign.description');

            return manager.executeQuery(query)
                .then(querySucceeded)
                .fail(queryFailed);
            
            function querySucceeded(data) {
                if (subscriptions) {
                    subscriptions(data.results);
                }
            }
        }
        
        function getSubscriptionDetails(id) {
            return manager.fetchEntityByKey("Subscription", id, true)
                .fail(queryFailed);
        }

        function getLocal(resource, ordering) {
            var query = entityQuery.from(resource)
                .orderBy(ordering);

            try {
                return manager.executeQueryLocally(query);    
            }
            catch(exception) {
                // Could not retrieve results from local cache
                return null;
            }
        }
        
        function configureBreezeManager() {
            breeze.NamingConvention.camelCase.setAsDefault();

            var mgr = new breeze.EntityManager('api/subscriptions');
            return mgr;
        }
        
        function queryFailed(error) {
            logger.logError("Query failed: " + error.message);
        }
      
    });