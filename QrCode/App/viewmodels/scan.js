define(['services/logger', 'services/datacontext', 'services/localstore'],
    function (logger, datacontext, localstore) {
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

            return datacontext.scan(customerId, context.campaignId, context.qrId)
                .then(scanSucceeded)
                .then(datacontext.getSubscriptions(customerId, null, true)); // refresh subscription data
        }
    
        function scanSucceeded(data) {
            localstore.setCustomerId(data.CustomerId);

            vm.title('Congratulations!');
            vm.numberOfPoints(data.Subscription.NumberOfPoints);
            vm.campaignDescription(data.CampaignDescription);
        }
    
        //#endregion
});