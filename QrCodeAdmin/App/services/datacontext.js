define([],
    function() {
        var datacontext = {
            getCampaigns: getCampaigns,
            getCampaignById: getCampaignById,
            init: init,
            saveChanges: saveChanges,
            cancelChanges: cancelChanges
        };

        breeze.NamingConvention.camelCase.setAsDefault();
        var mgr = new breeze.EntityManager('http://localhost:49392/api/subscriptions');
        
        return datacontext;

        function getCampaigns(forceRemote) {
            var query = breeze.EntityQuery.from('Campaigns')
                .orderBy('description');

            if (forceRemote)
                query = query.using(breeze.FetchStrategy.FromServer);
            else
                query = query.using(breeze.FetchStrategy.FromLocalCache);
            
            return mgr.executeQuery(query);
        }
        
        function getCampaignById(id) {
            return mgr.fetchEntityByKey('Campaign', id, true);
        }
        
        function init() {
            return getCampaigns(true);
        }

        function saveChanges() {
            return mgr.saveChanges();
        }

        function cancelChanges() {
            mgr.rejectChanges();
        }
    });
