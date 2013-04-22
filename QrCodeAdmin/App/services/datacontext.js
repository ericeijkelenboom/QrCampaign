define([],
    function() {
        var datacontext = {
            getCampaigns: getCampaigns
        };

        var mgr = new breeze.EntityManager('http://localhost:49392/api/subscriptions');
        breeze.NamingConvention.camelCase.setAsDefault();
        
        return datacontext;

        function getCampaigns() {
            var query = breeze.EntityQuery.from('Campaigns');

            return mgr.executeQuery(query);
        }
    });