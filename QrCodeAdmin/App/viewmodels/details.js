define(['services/logger', 'services/datacontext'], function (logger, datacontext) {
    var vm = {
        activate: activate,
        title: 'Details View',
        campaign: ko.observable(null),
        save: save,
        cancel: cancel
    };

    return vm;

    //#region Internal Methods
    function activate(context) {
        logger.log('Details View Activated with id ' + context.id, null, 'details', true);

        var id = context.id;
        
        return datacontext.getCampaignById(id)
            .then(querySucceeded);
    }
    
    function querySucceeded(data) {
        vm.campaign(data.entity);
    }

    function save() {
        datacontext.saveChanges();
    }
    
    function cancel() {
        datacontext.cancelChanges();
    }
    
    //#endregion
});