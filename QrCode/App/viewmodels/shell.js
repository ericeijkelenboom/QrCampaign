define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'services/datacontext', 'services/localstore'],
    function (system, router, logger, datacontext, localstore) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }
        
        function boot() {
            router.mapNav('subscriptions');
            router.mapNav('scan/:campaignId/:qrId');

            log('QR has been loaded!', null, true);

            return router.activate('subscriptions');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });