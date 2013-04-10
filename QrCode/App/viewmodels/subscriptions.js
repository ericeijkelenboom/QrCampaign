define(['durandal/plugins/router', 'services/logger', 'services/datacontext', 'services/localstore', 'services/subscription-helper'],
    function (router, logger, datacontext, localstore, helper) {
        var vm = {
            title: 'My campaigns',
            subscriptions: ko.observableArray([]),
            activate: activate,
            viewAttached: viewAttached,
            refresh: refresh,
            isRedeemAvailable: helper.isRedeemAvailable,
        };

        return vm;

        //#region Internal Methods
    
        function activate() {
            logger.log('Subscriptions View Activated', null, 'home');

            return refresh(false);
        }
    
        function viewAttached(view) {
            $(view).on('click', '.subscription-list-item', showSubscriptionDetails);
        }

        function refresh(forceRemote) {
            if(forceRemote === undefined) forceRemote = true;
        
            // Fetch subscriptions
            return datacontext.getSubscriptions(localstore.getCustomerId(), vm.subscriptions, forceRemote);
        }
    
        

        function showSubscriptionDetails(event) {
            var subscription = ko.dataFor(event.target);

            router.navigateTo('#subscription-details/' + subscription.id());
        }

        //#endregion
});