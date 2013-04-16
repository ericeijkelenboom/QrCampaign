define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'All campaigns'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Campaigns View Activated', null, 'campaigns', true);
        return true;
    }
    //#endregion
});