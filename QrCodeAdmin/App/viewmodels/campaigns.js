define(['services/logger', 'services/datacontext', 'durandal/plugins/router'], function (logger, datacontext, router) {
    var vm = {
        activate: activate,
        title: 'All campaigns',
        campaigns: ko.observableArray([]),
        showDetails: showDetails
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Campaigns View Activated', null, 'campaigns', true);

        return datacontext.getCampaigns()
            .then(querySucceeded);
    }
    
    function querySucceeded(data) {
        vm.campaigns(data.results);
    }

    function showDetails(campaign) {
        router.navigateTo('#details/' + campaign.id());
    }
    //#endregion
});