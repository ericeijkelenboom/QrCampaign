define(['services/logger'],
    function (logger) {
        var backend = {
            getSubscriptions: getSubscriptions
        };

        var manager = new breeze.EntityManager('api/subscriptions');

        return backend;
        
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