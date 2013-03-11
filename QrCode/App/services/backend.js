define(['services/logger'],
    function (logger) {
        var backend = {
            getSubscriptions: getSubscriptions,
            scan: scan
        };

        var manager = new breeze.EntityManager('api/subscriptions');

        return backend;
        
        function scan(customerId, campaignId, qrCodeId) {
            var data = {
                'CampaignId': campaignId,
                'QrCodeId': qrCodeId,
                'CustomerId': customerId
            };

            return $.post('/api/scan', data)
                .fail(queryFailed);
        }

        function getSubscriptions(customerId) {
            var query = breeze.EntityQuery.from("Subscriptions").where("Customer.Id", "==", customerId);

            return manager
                .executeQuery(query)
                .fail(queryFailed);
        }
        
        function queryFailed(error) {
            logger.logError("Query failed: " + error.message);
        }
        
        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        
    });