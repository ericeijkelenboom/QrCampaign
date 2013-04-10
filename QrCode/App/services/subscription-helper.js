define([],
    function () {
        var helper = {
            isRedeemAvailable: isRedeemAvailable,
        };

        return helper;
        
        function isRedeemAvailable(subscription) {
            return subscription.numberOfPoints() >= subscription.campaign().numberOfPointsBeforeRedeem();
        }
        
    });