define(['services/logger', 'services/backend', 'services/localstore'], function (logger, backend, localstore) {
    var vm = {
        activate: activate,
        isRedeemAvailable: isRedeemAvailable,
        title: 'My subscriptions',
        subscriptions: ko.observableArray([]),
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Subscriptions View Activated', null, 'home', true);
        
        // Fetch subscriptions
        backend.getSubscriptions(localstore.getCustomerId())
            .then(function(data) {
                vm.subscriptions(data.results);
            });
        
        return true;
    }
    
    function isRedeemAvailable() {
        return false;
    }
    //#endregion
});