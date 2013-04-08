define(['services/logger'],
    function (logger) {
        var datacontext = {
            getSubscriptions: getSubscriptions,
            scan: scan
        };

        var EntityQuery = breeze.EntityQuery;
        var manager = configureBreezeManager();
        
        return datacontext;
        
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
                if (s && s.length > 0) {
                    subscriptions(s);
                    return Q.resolve();
                }
            }

            var query = EntityQuery.from("Subscriptions")
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
        
        function getLocal(resource, ordering) {
            var query = EntityQuery.from(resource)
                .orderBy(ordering);

            try {
                return manager.executeQueryLocally(query);    
            }
            catch(exception) {
                // Could not retrieve results from local cache (no metadata on very first run)
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
        
        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        
    });