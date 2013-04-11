define(['durandal/plugins/router', 'services/logger', 'services/datacontext'],
    function (router, logger, datacontext) {

        var subscription = ko.observable();

        var numberOfRedeemsAvailable = ko.computed(function () {
            if (!subscription()) return 0;
            
            return Math.floor(subscription().numberOfPoints() / subscription().campaign().numberOfPointsBeforeRedeem());
        });

        var vm = {
            activate: activate,
            navigateToSubscriptions: navigateToSubscriptions,
            numberOfRedeemsAvailable: numberOfRedeemsAvailable,
            redeem: redeem,
            subscription: subscription,
            title: ko.observable(''),
        };
    
        return vm;

        //#region Internal Methods
        function activate(context) {
            logger.log('Details View Activated', null, 'details', true);
        
            return datacontext.getSubscriptionDetails(context.id)
                .then(showSubscription);
        }
    
        function showSubscription(data) {
            var subscription = data.entity;
            vm.subscription(subscription);
            vm.title(subscription.campaign().description());
        }
    
        function navigateToSubscriptions() {
            router.navigateTo('#subscriptions');
        }
        
        function redeem() {
            // Update number of points
            var numerOfPoints = vm.subscription().numberOfPoints() - vm.subscription().campaign().numberOfPointsBeforeRedeem();
            vm.subscription().numberOfPoints(numerOfPoints);

            // Save changes
            datacontext.saveChanges()
                .then(redeemSucceeded);
            
            function redeemSucceeded(data) {
                logger.log('Redeem succeeded!', null, null, true);
            }
        }
    
        //#endregion
});