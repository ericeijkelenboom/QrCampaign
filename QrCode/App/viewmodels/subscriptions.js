define(['services/logger', 'services/backend'], function (logger, backend) {
    var vm = {
        activate: activate,
        title: 'My subscriptions',
        subscriptions: ko.observableArray()
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Subscriptions View Activated', null, 'home', true);
        
        // Fetch subscriptions
        backend.getSubscriptions(1234)
            .then(function(data) {
                logger.success("Fetched subscriptions");
                vm.subscriptions(data.results);
            });
        

        return true;
    }
    //#endregion
});