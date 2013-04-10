define(['durandal/plugins/router', 'services/logger', 'services/datacontext', 'services/localstore'],
    function (router, logger, datacontext, localstore) {
        var vm = {
            activate: activate,
            title: ko.observable('Scanning...'),
            campaignDescription: ko.observable(''),
            numberOfPoints: ko.observable(0),
            showCampaigns: showCampaigns
        };

        return vm;

        //#region Internal Methods
        function activate(context) {
            logger.log('Scan View Activated', null, 'scan', true);

            var customerId = localstore.getCustomerId();

            return datacontext.scan(customerId, context.campaignId, context.qrId)
                .then(scanSucceeded);
        }
    
        function scanSucceeded(data) {
            // Store customer id 
            localstore.setCustomerId(data.customerId);

            // Update view model
            vm.title('Congratulations!');
            vm.numberOfPoints(data.subscription.numberOfPoints);
            vm.campaignDescription(data.campaignDescription);
            
            // Update subscriptions
            datacontext.getSubscriptions(data.customerId, null, true);
        }
    
        function showCampaigns() {
            router.navigateTo('#subscriptions');
        }

        //#endregion
});