define(['services/logger', 'services/backend', 'services/localstore'], function (logger, backend, localstore) {
    var vm = {
        title: 'My subscriptions',
        subscriptions: ko.observableArray([]),
        activate: activate,
        refresh: refresh,
        isRedeemAvailable: isRedeemAvailable,
    };

    return vm;

    //#region Internal Methods
    
    function activate() {
        logger.log('Subscriptions View Activated', null, 'home', true);

        return refresh();
    }
    
    function refresh() {
        // Fetch subscriptions
        return backend.getSubscriptions(localstore.getCustomerId(), vm.subscriptions);
    }
    
    function isRedeemAvailable(subscription) {
        return subscription.NumberOfPoints() >= subscription.Campaign().NumberOfPointsBeforeRedeem();
    }

    //#endregion
});