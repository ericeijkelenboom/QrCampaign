define(['durandal/plugins/router', 'services/logger', 'services/datacontext', 'services/localstore'],
    function (router, logger, datacontext, localstore) {
        var vm = {
            activate: activate,
            viewAttached: viewAttached,
            refresh: refresh,
            isRedeemAvailable: isRedeemAvailable,
            title: 'My campaigns',
            subscriptions: ko.observableArray([]),
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
        
        function isRedeemAvailable(subscription) {
            return subscription.numberOfPoints() >= subscription.campaign().numberOfPointsBeforeRedeem();
        }

        //#endregion
});