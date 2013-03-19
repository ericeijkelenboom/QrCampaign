define(['services/logger', 'services/backend', 'services/localstore'], function (logger, backend, localstore) {
    var vm = {
        title: 'My subscriptions',
        subscriptions: ko.observableArray([]),
        activate: activate,
        isRedeemAvailable: isRedeemAvailable,
    };

    return vm;

    //#region Internal Methods
    
    function activate() {
        logger.log('Subscriptions View Activated', null, 'home', true);
        
        // Fetch subscriptions
        return backend.getSubscriptions(localstore.getCustomerId())
            .then(function(data) {
                vm.subscriptions(data.results);
            });
    }
    
    function isRedeemAvailable(subscription) {
        return subscription.NumberOfPoints() >= subscription.Campaign().NumberOfPointsBeforeRedeem();
    }

    //#endregion
});