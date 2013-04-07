define(['services/logger', 'services/datacontext', 'services/localstore'], function (logger, datacontext, localstore) {
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
        return datacontext.getSubscriptions(localstore.getCustomerId(), vm.subscriptions);
    }
    
    function isRedeemAvailable(subscription) {
        return subscription.numberOfPoints() >= subscription.campaign().numberOfPointsBeforeRedeem();
    }

    //#endregion
});