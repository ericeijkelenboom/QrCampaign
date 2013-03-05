define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Congratulations!',
        qrId: ko.observable(),
        campaignId: ko.observable(),
    };

    return vm;

    //#region Internal Methods
    function activate(context) {
        logger.log('Scan View Activated', null, 'details', true);

        vm.qrId(context.qrId);
        vm.campaignId(context.campaignId);

        return true;
    }
    //#endregion
});