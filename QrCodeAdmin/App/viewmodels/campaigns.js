define(['services/logger', 'services/datacontext'], function (logger, datacontext) {
    var vm = {
        activate: activate,
        title: 'All campaigns'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Campaigns View Activated', null, 'campaigns', true);

        datacontext.getCampaigns();

        return true;
    }
    //#endregion
});