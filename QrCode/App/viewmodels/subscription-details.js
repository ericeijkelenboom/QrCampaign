define(['durandal/plugins/router', 'services/logger', 'services/datacontext', 'services/subscription-helper'],
    function (router, logger, datacontext, helper) {
        var vm = {
            activate: activate,
            navigateToSubscriptions: navigateToSubscriptions,
            isRedeemAvailable: helper.isRedeemAvailable,
            redeem: redeem,
        
            subscription: ko.observable(''),
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
            alert('redeem! :)');
        }
    
        //#endregion
});