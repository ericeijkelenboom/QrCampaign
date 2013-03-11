define(['services/logger', 'services/backend', 'services/localstore'], function (logger, backend, localstore) {
    var vm = {
        activate: activate,
        title: ko.observable('Scanning...'),
        campaignDescription: ko.observable(''),
        numberOfPoints: ko.observable(0)
    };

    return vm;

    //#region Internal Methods
    function activate(context) {
        logger.log('Scan View Activated', null, 'scan', true);

        var customerId = localstore.getCustomerId();

        backend.scan(customerId, context.campaignId, context.qrId)
            .then(function (data) {
                localstore.setCustomerId(data.CustomerId);

                vm.title('Congratulations');
                vm.numberOfPoints(data.Subscription.NumberOfPoints);
                vm.campaignDescription(data.CampaignDescription);
            });

        return true;
    }
    //#endregion
});